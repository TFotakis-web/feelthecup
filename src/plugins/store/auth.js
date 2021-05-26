import router from '@/plugins/router/router';
import { Auth } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from '@/graphql/queries';
import { createUser, updateUser } from '@/graphql/mutations';

const initState = () => ({
	cognitoUser: null,
	user: null,
	userProfile: null,
	userModelPermissions: [],
	userPagePermissions: {},
});

const initUserProfile = (user) => ({
	id: user.attributes.sub,
	sub: user.attributes.sub,
	name: user.attributes.name,
	surname: user.attributes.family_name,
	email: user.attributes.email,
	mobileNumber: user.attributes.phone_number,
	birthdate: user.attributes.birthdate,
	cup_balance: 0,
	credits: 0,
	loyaltyBalance: 0,
	noOfCupsUsed: 0,
	noOfCupsLost: 0,
	address: {
		country: null,
		city: null,
		municipality: null,
		latitude: null,
		longitude: null,
		street: null,
		number: null,
		postalCode: null,
	},
	stores: [],
	deposits: [],
	friends: [],
});

function compareKeys(a, b) {
	var aKeys = Object.keys(a).sort();
	var bKeys = Object.keys(b).sort();
	// return JSON.stringify(aKeys) === JSON.stringify(bKeys);

	for (const key of bKeys) {
		if (!aKeys.includes(key)) {
			return false;
		}
		if ((a[key] === null || a[key] === undefined) && a[key] !== b[key]) {
			return false;
		}
		if (typeof a[key] === 'object' && a[key] !== null && !Array.isArray(a[key])) {
			const flag = compareKeys(a[key], b[key]);
			if (!flag) {
				return false;
			}
		}
	}
	return true;
}

export const auth = {
	namespaced: true,
	state: initState(),
	mutations: {
		init(state) {
			Object.assign(state, initState());
		},
		setCognitoUser(state, payload) {
			state.cognitoUser = payload;
		},
		setUser(state, payload) {
			state.user = payload;
		},
		setUserProfile(state, payload) {
			state.userProfile = payload;
		},
	},
	actions: {
		async signUp(_, payload) {
			try {
				const response = await Auth.signUp(payload);
				return Promise.resolve(response);
			} catch (error) {
				console.error(error);
				return Promise.reject(error);
			}
		},
		async confirmSignUp(_, { username, code }) {
			try {
				const response = await Auth.confirmSignUp(username, code);
				return Promise.resolve(response);
			} catch (error) {
				console.error(error);
				return Promise.reject(error);
			}
		},
		async resendSignUp(_, username) {
			try {
				const response = await Auth.resendSignUp(username);
				return Promise.resolve(response);
			} catch (error) {
				console.error(error);
				return Promise.reject(error);
			}
		},
		async completeNewPassword({ dispatch }, { username, old_password, new_password }) {
			try {
				let response = await Auth.signIn({ username: username, password: old_password });
				response = await Auth.completeNewPassword(response, new_password);
				await dispatch('signIn', { username, password: new_password });
				return Promise.resolve(response);
			} catch (error) {
				console.error(error);
				return Promise.reject(error);
			}
		},
		async signIn({ commit, dispatch }, { username, password }) {
			try {
				const cognitoUser = await Auth.signIn({ username, password });
				commit('setCognitoUser', cognitoUser);
				if (cognitoUser.challengeName === 'NEW_PASSWORD_REQUIRED') {
					return Promise.reject({
						name: 'NEW_PASSWORD_REQUIRED',
						code: 'NEW_PASSWORD_REQUIRED',
					});
				} else {
					await dispatch('currentAuthenticatedUser');
					return Promise.resolve();
				}
			} catch (error) {
				console.error(error);
				return Promise.reject(error);
			}
		},
		async signOut({ commit, dispatch }) {
			try {
				commit('pageStructure/increaseGlobalPendingPromises', null, { root: true });
				await Auth.signOut();
				commit('setUser', null);
				await router.push({ name: 'SignIn' });
				await dispatch('initModules', null, { root: true });
				return Promise.resolve();
			} catch (error) {
				console.error(error);
				return Promise.reject(error);
			}
		},
		async forgotPassword(_, username) {
			try {
				const response = await Auth.forgotPassword(username);
				return Promise.resolve(response);
			} catch (error) {
				console.error(error);
				return Promise.reject(error);
			}
		},
		async forgotPasswordSubmit(_, { username, code, password }) {
			try {
				const response = await Auth.forgotPasswordSubmit(username, code, password);
				return Promise.resolve(response);
			} catch (error) {
				console.error(error);
				return Promise.reject(error);
			}
		},
		async currentAuthenticatedUser({ commit }) {
			try {
				commit('pageStructure/increaseGlobalPendingPromises', null, { root: true });

				// bypassCache: Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
				const cognitoUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
				commit('setCognitoUser', cognitoUser);

				const user = await Auth.currentUserInfo();
				commit('setUser', user);

				// This has to be synchronous for routing permissions
				let userProfile = await API.graphql(graphqlOperation(getUser, { id: user.attributes.sub }));
				userProfile = userProfile.data.getUser;
				if (!userProfile) {
					userProfile = await API.graphql(graphqlOperation(createUser, { input: initUserProfile(user)}));
					userProfile = userProfile.data.createUser;
				} else if (!compareKeys(userProfile, initUserProfile(user))) {
					userProfile = Object.assign(userProfile, initUserProfile(user));
					delete userProfile.createdAt;
					delete userProfile.updatedAt;
					delete userProfile.owner;
					userProfile = await API.graphql(graphqlOperation(updateUser, { input: userProfile }));
					userProfile = userProfile.data.updateUser;
				}
				commit('setUserProfile', userProfile);
				return Promise.resolve(userProfile);
			} catch (error) {
				console.error(error);
				await Auth.signOut();
				return Promise.reject(error);
			} finally {
				commit('pageStructure/decreaseGlobalPendingPromises', null, { root: true });
			}
		},
		async updateUserProfile({ commit, getters }, userProfile) {
			if (!userProfile) {
				userProfile = Object.assign({}, getters['userProfile']);
				delete userProfile.createdAt;
				delete userProfile.updatedAt;
			}

			try {
				commit('pageStructure/increaseRouterViewPendingPromises', null, { root: true });
				// Todo: Use proper update method
				// const response = await API.graphql(graphqlOperation(updateUserProfileDetails, { input: userProfile }));
				// userProfile = response.data.updateUserProfileDetails;
				return Promise.resolve(userProfile);
			} catch (error) {
				console.error(error);
				return Promise.reject(error);
			} finally {
				commit('pageStructure/decreaseRouterViewPendingPromises', null, { root: true });
			}
		},
	},
	getters: {
		cognitoUser: (state) => state.cognitoUser,
		userGroups: (state) => state.cognitoUser?.signInUserSession.idToken.payload['cognito:groups'] || [],
		isAdmin: (state, getters) => getters.userGroups.includes('admin'),
		role: (state) => state.userProfile.role,
		user: (state) => state.user,
		userId: (state) => state.user.id,
		username: (state) => state.user.username,
		fullName: (state) => (state.userProfile.name || '') + ' ' + (state.userProfile.family_name || ''),
		email: (state) => state.user.attributes.email,
		userAttributes: (state) => state.user.attributes,
		userProfile: (state) => state.userProfile,
		userModelPermissions: (state) => state.userModelPermissions,
		userPagePermissions: (state) => state.userPagePermissions,
		userPreferences: (state) => JSON.parse(state.userProfile.preferences),
	},
};

import { createStore } from 'vuex';
import { pageStructure } from '@/plugins/store/pageStructure';
import { auth } from '@/plugins/store/auth';


const initState = () => ({});

export const store = createStore({
	modules: {
		pageStructure,
		auth,
	},
	state: initState(),
	mutations: {
		init(state) {
			Object.assign(state, initState());
		},
	},
	actions: {
		initModules({ commit }) {
			commit('init');
			commit('auth/init');
			commit('pageStructure/init');
		},
	},
	getters: {},
});



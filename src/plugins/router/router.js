import { createRouter, createWebHistory } from '@ionic/vue-router';

import { store } from '@/plugins/store/store';

import auth from '@/plugins/router/auth';
import tabs from '@/plugins/router/tabs';
import various from '@/plugins/router/various';
import storeRoutes from '@/plugins/router/store';


const routes = [
	...auth,
	...tabs,
	...various,
	...storeRoutes,
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: () => import('@/views/errorPages/NotFound'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

function hasPermissions(route) {
	if (store.getters['auth/isAdmin']) {
		return route.meta.isAdmin;
	}

	if (store.getters['auth/isStore']) {
		return route.meta.isStore;
	}

	let flag = true;
	const userModelPermissions = store.getters['auth/userModelPermissions'];
	const userPagePermissions = store.getters['auth/userPagePermissions'];

	if (route.meta.isAdmin) {
		flag &= store.getters['auth/isAdmin'];
	}

	if (route.meta.isStore) {
		flag &= store.getters['auth/isStore'];
	}

	if (route.meta.requiresPagePermission) {
		flag &= userPagePermissions[route.name]?.read;
		flag &= userPagePermissions[route.name]?.write;
	}

	if (route.meta.modelPermissions) {
		for (const permission of route.meta.modelPermissions) {
			flag &= userModelPermissions.includes(permission);
		}
	}

	if (route.meta.customCheck) {
		flag &= route.meta.customCheck();
	}
	return flag;
}

function hasPermissionsByName(name) {
	if (!name) {
		return false;
	}
	const route = router.resolve({ name });
	return hasPermissions(route);
}

router.hasPermissions = hasPermissions;
router.hasPermissionsByName = hasPermissionsByName;

function checkRoute(to, from, next) {
	let user = store.getters['auth/user'];
	const defaultRoute = () => {
		if (store.getters['auth/isAdmin']) {
			return { name: 'AdminHome' };
		}
		if (store.getters['auth/isStore']) {
			return { name: 'StoreHome' };
		}
		return { name: 'Home' };
	};
	if (to.meta.requiresAuth) {
		if (!user) {
			return store.dispatch('auth/currentAuthenticatedUser')
				.then(() => {
					if (!hasPermissions(to)) {
						return next(defaultRoute());
					}
					return next();
				})
				.catch(() => {
					next({ name: 'SignIn' });
				});
		}
		if (!hasPermissions(to)) {
			return next(defaultRoute());
		}
	} else if (to.meta.ifAuthenticatedRedirect) {
		if (!user) {
			return store.dispatch('auth/currentAuthenticatedUser')
				.then(() => {
					next(defaultRoute());
				})
				.catch(() => {
					next();
				});
		}
		return next(defaultRoute());
	}
	next();
}

router.beforeEach(checkRoute);

export default router;

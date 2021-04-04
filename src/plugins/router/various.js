export default [
	{
		path: '',
		name: 'Home',
		component: () => import('@/views/home/Home'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/profile',
		name: 'UserProfile',
		component: () => import('@/views/userProfile/UserProfile'),
		meta: {
			requiresAuth: true,
		},
	},
];

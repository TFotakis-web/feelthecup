export default [
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/home/Home.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/map',
		name: 'Map',
		component: () => import('@/views/map/Map.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/qrCode',
		name: 'QRCode',
		component: () => import('@/views/qrCode/QRCode.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/rewards',
		name: 'Rewards',
		component: () => import('@/views/rewards/Rewards.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/profile',
		name: 'UserProfile',
		component: () => import('@/views/userProfile/UserProfile.vue'),
		meta: {
			requiresAuth: true,
		},
	},
];

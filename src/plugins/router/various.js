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
		path: '/map',
		name: 'Map',
		component: () => import('@/views/map/Map'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/qrCode',
		name: 'QRCode',
		component: () => import('@/views/qrCode/QRCode'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/rewards',
		name: 'Rewards',
		component: () => import('@/views/rewards/Rewards'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/setReminder',
		name: 'SetReminder',
		component: () => import('@/views/reminder/SetReminder'),
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
	{
		path: '/notifications',
		name: 'Notifications',
		component: () => import('@/views/notifications/Notifications'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/settings',
		name: 'Settings',
		component: () => import('@/views/settings/Settings'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/about/About'),
		meta: {
			requiresAuth: true,
		},
	},
];

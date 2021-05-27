export default [
	{
		path: '/setReminder',
		name: 'SetReminder',
		component: () => import('@/views/reminder/SetReminder'),
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

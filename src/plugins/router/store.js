export default [
	{
		path: '/store',
		component: () => import('@/components/structure/passThroughRouterView'),
		children: [
			{
				path: '',
				name: 'StoreHome',
				component: () => import('@/views/storeHome/StoreHome'),
				meta: {
					requiresAuth: true,
					isStore: true,
				},
				children: [
					{
						path: 'give',
						name: 'StoreHomeGive',
						component: () => import('@/views/storeHome/storeHomeGive'),
						meta: {
							requiresAuth: true,
							isStore: true,
						},
					},
					{
						path: 'receive',
						name: 'StoreHomeReceive',
						component: () => import('@/views/storeHome/storeHomeReceive'),
						meta: {
							requiresAuth: true,
							isStore: true,
						},
					},
				]
			},
			{
				path: 'settings',
				name: 'StoreSettings',
				component: () => import('@/views/storeSettings/StoreSettings'),
				meta: {
					requiresAuth: true,
					isStore: true,
				},
			},
		],
	},
];

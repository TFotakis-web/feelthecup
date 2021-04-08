<template>
	<ion-page>
		<ion-tabs>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="Home" :href="$router.resolve({ name: 'Home'}).fullPath">
					<ion-icon :icon="$ionicons.homeOutline"/>
					<ion-label>{{ $t('views.homePage.pageTitle') }}</ion-label>
				</ion-tab-button>
				<ion-tab-button tab="Map" :href="$router.resolve({ name: 'Map'}).fullPath">
					<ion-icon :icon="$ionicons.locationOutline"/>
					<ion-label>{{ $t('views.map.pageTitle') }}</ion-label>
				</ion-tab-button>
				<ion-tab-button tab="QRCode" :href="$router.resolve({ name: 'QRCode'}).fullPath">
					<ion-icon :icon="$ionicons.qrCodeOutline"/>
					<ion-label>{{ $t('views.qrcode.pageTitle') }}</ion-label>
				</ion-tab-button>
				<ion-tab-button tab="Rewards" :href="$router.resolve({ name: 'Rewards'}).fullPath">
					<ion-icon :icon="$ionicons.pintOutline"/>
					<ion-label>{{ $t('views.rewards.pageTitle') }}</ion-label>
				</ion-tab-button>
				<ion-tab-button tab="UserProfile" :href="$router.resolve({ name: 'UserProfile'}).fullPath">
					<ion-icon :icon="$ionicons.personCircleOutline"/>
					<ion-label>{{ $t('views.userProfile.pageTitle') }}</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>
<script>
	export default {
		name: 'Tabs',
	};
</script>

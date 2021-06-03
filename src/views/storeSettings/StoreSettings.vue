<template>
	<base-layout :page-title="$t('views.storeSettings.pageTitle')">
		<h1 class="ion-text-center">{{ $t('various.underConstruction') }}</h1>
		<ion-list>
			<ion-item @click="$store.dispatch('auth/signOut')" button>
				<ion-icon slot="start" :icon="$ionicons.logOutOutline" class="ion-align-self-center"/>
				<ion-label>{{ $t('actions.signOut') }}</ion-label>
			</ion-item>
		</ion-list>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';


	export default {
		name: 'StoreSettings',
		components: {
			BaseLayout,
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.storeSettings.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', true);
			this.$store.commit('pageStructure/setBackButtonDefaultHref', this.$router.resolve({ name: 'StoreHome' }).fullPath);
		},
	};
</script>

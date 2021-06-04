<template>
	<base-layout :page-title="$t('views.storeSettings.pageTitle')">
		<ion-list>
			<locale-dropdown lines="inset"/>
			<ion-item @click="$store.dispatch('auth/signOut')" button>
				<ion-icon slot="start" :icon="$ionicons.logOutOutline" color="danger" class="ion-align-self-center"/>
				<ion-label color="danger">{{ $t('actions.signOut') }}</ion-label>
			</ion-item>
		</ion-list>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';
	import LocaleDropdown from '@/components/structure/localeDropdown';


	export default {
		name: 'StoreSettings',
		components: {
			LocaleDropdown,
			BaseLayout,
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.storeSettings.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', true);
			this.$store.commit('pageStructure/setBackButtonDefaultHref', this.$router.resolve({ name: 'StoreHome' }).fullPath);
		},
	};
</script>

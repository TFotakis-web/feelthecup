<template>
	<base-layout :page-title="$t('views.settings.pageTitle')">
		<ion-list>
			<ion-list-header style="font-size: x-large; font-weight: bold;">
				<ion-label>{{ $t('views.settings.generalGroup') }}</ion-label>
			</ion-list-header>
			<ion-list-header style="font-size: x-large; font-weight: bold;">
				<ion-label>{{ $t('views.settings.accountGroup') }}</ion-label>
			</ion-list-header>
			<ion-list-header style="font-size: x-large; font-weight: bold;">
				<ion-label>{{ $t('views.settings.appGroup') }}</ion-label>
			</ion-list-header>
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
		name: 'Settings',
		components: {
			LocaleDropdown,
			BaseLayout,
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.settings.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', true);
			this.$store.commit('pageStructure/setBackButtonDefaultHref', this.$router.resolve({ name: 'UserProfile' }).fullPath);
		},
	};
</script>

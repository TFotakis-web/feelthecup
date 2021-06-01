<template>
	<base-layout :page-title="$t('views.storeHome.pageTitle')">
		<template v-slot:actions-end>
			<ion-button :router-link="{name: 'StoreSettings'}">
				<ion-icon :icon="$ionicons.settingsOutline" slot="icon-only"/>
			</ion-button>
		</template>
		<ion-toolbar>
			<ion-segment v-model="page">
				<ion-segment-button value="give">
					<ion-label>{{ $t('actions.give') }}</ion-label>
				</ion-segment-button>
				<ion-segment-button value="receive">
					<ion-label>{{ $t('actions.receive') }}</ion-label>
				</ion-segment-button>
			</ion-segment>
		</ion-toolbar>
		<router-view/>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';


	export default {
		name: 'StoreHome',
		components: {
			BaseLayout,
		},
		data() {
			return {
				page: 'give',
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.storeHome.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
		watch: {
			page: {
				immediate: true,
				handler(newValue) {
					this.$router.push({ name: newValue === 'give' ? 'StoreHomeGive' : 'StoreHomeReceive' });
				},
			},
		},
	};
</script>

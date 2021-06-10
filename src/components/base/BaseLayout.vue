<template>
	<ion-page>
		<!--		<ion-header>-->
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-back-button :default-href="$store.getters['pageStructure/backButtonDefaultHref']" v-if="$store.getters['pageStructure/pageBackButton']"/>
			</ion-buttons>
			<ion-title>{{ pageTitle }}</ion-title>
			<ion-buttons slot="end">
				<slot name="actions-end"/>
			</ion-buttons>
		</ion-toolbar>
		<!--		</ion-header>-->
		<ion-content :fullscreen="true" :color="contentColor">
			<ion-refresher slot="fixed" @ionRefresh="$router.go(0)">
				<ion-refresher-content>
				</ion-refresher-content>
			</ion-refresher>
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">{{ pageTitle }}</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-grid fixed style="padding-top: 0; padding-bottom: 0;">
				<slot/>
			</ion-grid>
		</ion-content>
		<Tabs/>
	</ion-page>
</template>
<script>
	import Tabs from './Tabs.vue';


	export default {
		components: { Tabs },
		name: 'BaseLayout',
		props: ['pageTitle', 'contentColor'],
	};
</script>
<style>
	.ion-row-full-width {
		margin-left: -5px;
		margin-right: -5px;
	}

	.ion-row-full-height {
		margin-top: -5px;
		margin-bottom: -5px;
	}

	.ion-row-no-margin {
		margin-left: -5px;
		margin-right: -5px;
		margin-top: -5px;
		margin-bottom: -5px;
	}
</style>

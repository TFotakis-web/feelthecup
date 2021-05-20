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
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">{{ pageTitle }}</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-grid fixed>
				<slot/>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>
<script>
	export default {
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

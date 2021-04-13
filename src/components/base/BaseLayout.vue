<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>{{ pageTitle }}</ion-title>
				<ion-buttons slot="end">
					<slot name="actions-end"/>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
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
		props: ['pageTitle'],
	};
</script>
<style>
	.ion-row-full-width {
		margin-left: -5px;
		margin-right: -5px;
	}
</style>

<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>{{ pageTitle }}</ion-title>
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

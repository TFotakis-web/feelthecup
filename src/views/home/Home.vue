<template>
	<ion-grid fixed>
		<h1 class="ion-text-center">{{ $t('various.underConstruction') }}</h1>
	</ion-grid>
</template>
<script>
	export default {
		name: 'Home',
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.homePage.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
	};
</script>

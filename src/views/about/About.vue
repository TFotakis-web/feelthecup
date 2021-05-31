<template>
	<base-layout :page-title="$t('views.about.pageTitle')">
		<h1 class="ion-text-center">{{ $t('various.underConstruction') }}</h1>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';


	export default {
		name: 'About',
		components: {
			BaseLayout,
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.about.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', true);
			this.$store.commit('pageStructure/setBackButtonDefaultHref', this.$router.resolve({ name: 'UserProfile' }).fullPath);
		},
	};
</script>

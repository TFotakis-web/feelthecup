<template>
	<base-layout :page-title="$t('views.userProfile.pageTitle')">
		<h1 class="ion-text-center">{{ $t('various.underConstruction') }}</h1>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';

	export default {
		name: 'UserProfile',
		components: {
			BaseLayout,
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.userProfile.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
	};
</script>

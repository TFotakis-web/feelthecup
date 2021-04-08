<template>
	<base-layout :page-title="$t('views.rewards.pageTitle')">
		<h1 class="ion-text-center">{{ $t('various.underConstruction') }}</h1>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';

	export default {
		name: 'Rewards',
		components: {
			BaseLayout,
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.rewards.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
	};
</script>

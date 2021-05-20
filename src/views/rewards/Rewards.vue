<template>
	<base-layout :page-title="$t('views.rewards.pageTitle')">
		<ion-row>
			<ion-col size="12">
				<div class="ion-text-center" style="background-color: var(--ion-color-accent); border-radius: 20px; padding-top: 30px; padding-bottom: 30px">
					<div class="vertical-align-content">
						<ion-icon :icon="$ionicons.starOutline" class="ion-align-self-center" style="font-size: x-large; margin-left: auto"/>
						<span style="font-size: xxx-large; font-weight: bold; margin-right: auto">{{ points }}</span>
					</div>
					<h1 class="ion-no-margin">
						<strong>{{ $t('views.rewards.pointsAvailable') }}</strong>
					</h1>
				</div>
			</ion-col>
			<ion-col size="6" v-for="i in 6" :key="i">
				<div class="ion-text-center" style="background-color: var(--ion-color-light-shade); border-radius: 20px; border: 1px solid black; padding-top: 30px; padding-bottom: 30px">
					<h2 class="ion-no-margin">{{ $t('views.rewards.discount') }}</h2>
					<ion-icon :icon="$ionicons.pintOutline" class="ion-align-self-center" style="font-size: xxx-large; margin-left: auto"/>
					<h3 class="ion-no-margin">
						<strong>-0.3€</strong>
					</h3>
				</div>
			</ion-col>
		</ion-row>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';


	export default {
		name: 'Rewards',
		components: {
			BaseLayout,
		},
		data() {
			return {
				points: 300,
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.rewards.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
	};
</script>
<style scoped>
	.vertical-align-content {
		display: flex !important;
		align-content: center !important;
		align-items: center !important;
	}
</style>

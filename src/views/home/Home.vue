<template>
	<base-layout :page-title="$t('views.homePage.pageTitle')">
		<template v-slot:actions-end>
			<ion-button :router-link="{name: 'Notifications' }">
				<ion-icon :icon="$ionicons.notificationsOutline" slot="icon-only"/>
			</ion-button>
			<ion-button :router-link="{name: 'Settings'}">
				<ion-icon :icon="$ionicons.settingsOutline" slot="icon-only"/>
			</ion-button>
		</template>
		<h1 class="ion-margin-bottom"><strong>{{ $t('views.home.itsCoffeeTime') }}</strong></h1>
		<ion-row class="ion-row-full-width" style="background: var(--ion-color-gradient);">
			<ion-col class="ion-text-center ion-align-self-center">
				<ion-icon icon="/assets/logo.svg" color="dark" style="font-size: 150px; margin-top: -15px; margin-bottom: -15px;"/>
				<h5 style="font-weight: bold; margin-top: -80px; margin-bottom: 55px; position: relative; z-index: 1;">{{ userProfile.noOfCupsUsed }}</h5>
			</ion-col>
			<ion-col class="ion-text-center ion-align-self-center">
				<h4 style="font-weight: bold">{{ $t('views.home.FeelTheCupUses') }}</h4>
			</ion-col>
		</ion-row>
		<h1><strong>{{ $t('views.home.saved') }}</strong></h1>
		<ion-row class="ion-text-center">
			<ion-col>
				<h5 class="ion-no-margin">{{ $t('views.home.plasticCups') }}</h5>
				<ion-icon :icon="$ionicons.pintOutline" size="large" class="ion-margin-top"/>
				<h5><strong>{{ plasticCups }}</strong></h5>
			</ion-col>
			<ion-col>
				<h5 class="ion-no-margin">{{ $t('views.home.kgSUP') }}</h5>
				<ion-icon :icon="$ionicons.pintOutline" size="large" class="ion-margin-top"/>
				<h5><strong>{{ kgSUP }}</strong></h5>
			</ion-col>
		</ion-row>
		<ion-row class="ion-text-center ion-row-full-width" style="background: var(--ion-color-accent)">
			<ion-col>
				<h5 style="font-weight: bold">{{ $t('views.home.timeTillCupReturning') }}</h5>
			</ion-col>
		</ion-row>
		<ion-row class="ion-text-center">
			<ion-col size="6" class="ion-text-right">
				<h6>{{ $t('dates.hours') }}</h6>
				<h1 class="ion-no-margin">{{ hoursRemaining }}</h1>
			</ion-col>
			<ion-col size="6" class="ion-text-left">
				<h6>{{ $t('dates.minutes') }}</h6>
				<h1 class="ion-no-margin">{{ minutesRemaining }}</h1>
			</ion-col>
			<ion-col>
				<ion-button :router-link="{name: 'SetReminder'}" shape="round" color="dark">
					<ion-icon :icon="$ionicons.notificationsOutline" slot="start"/>
					<ion-label>{{ $t('views.actions.remindMe') }}</ion-label>
				</ion-button>
			</ion-col>
		</ion-row>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';
	import { mapGetters } from 'vuex';


	export default {
		name: 'Home',
		components: {
			BaseLayout,
		},
		data() {
			return {
				plasticCups: 1252,
				kgSUP: 5.21,
				hoursRemaining: '14',
				minutesRemaining: '04',
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.homePage.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
		computed: {
			...mapGetters('auth', ['userProfile']),
		},
	};
</script>

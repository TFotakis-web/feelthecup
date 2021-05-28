<template>
	<base-layout :page-title="$t('views.qrcode.pageTitle')" content-color="accent">
		<ion-row>
			<ion-col class="ion-text-center">
				<h1 class="ion-text-center ion-margin-bottom">{{ $t('actions.return') }}</h1>
				<div class="ion-padding ion-margin" style="background-color: white; border-radius: 10px; width: fit-content; display: inline-block">
					<qrcode-vue :value="qrCodeUrl" :size="170" level="H"/>
				</div>
			</ion-col>
		</ion-row>
		<ion-row>
			<ion-col size="12" class="ion-text-center">
				<ion-item color="accent" class="ion-text-center" style="border: 1px solid black; border-radius: 10px; width: fit-content; display: inline-block">
					<ion-icon :icon="$ionicons.giftOutline" size="large" class="ion-align-self-center"/>
					<div class="ion-padding" style="display: inline-block">
						<h6 class="ion-no-margin"><strong>{{ pointsText }}</strong></h6>
						<h6 class="ion-no-margin">for the next</h6>
						<h6 class="ion-no-margin"><strong>{{ timeText }}</strong></h6>
					</div>
				</ion-item>
			</ion-col>
			<ion-col size="12" class="ion-text-center">
				<ion-item color="accent" class="ion-text-center" style="border: 1px solid black; border-radius: 10px; width: fit-content; display: inline-block">
					<ion-icon :icon="$ionicons.timeOutline" size="large" class="ion-align-self-center"/>
					<div class="ion-padding" style="display: inline-block">
						<h6 class="ion-no-margin"><strong>{{ $t('views.qrcode.timeInUse') }}</strong></h6>
						<h6 class="ion-no-margin"><strong>{{ timeInUse }}</strong></h6>
					</div>
				</ion-item>
			</ion-col>
		</ion-row>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';
	import QrcodeVue from 'qrcode.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'QRCode',
		components: {
			BaseLayout,
			QrcodeVue,
		},
		data() {
			return {
				pointsText: '+100 points',
				timeText: '20:05 min',
				timeInUse: '45:00',
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.qrcode.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
		computed: {
			...mapGetters('auth', ['userProfile']),
			qrCodeUrl() {
				return this.userProfile.sub;
			}
		},
	};
</script>

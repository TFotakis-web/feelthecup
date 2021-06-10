<template>
	<base-layout :page-title="$t('views.leaderboard.pageTitle')">
		<ion-row>
			<ion-col size="12">
				<div class="ion-text-left ion-padding" style="background: var(--ion-color-gradient); border-radius: 20px; padding-top: 30px; padding-bottom: 30px">
					<div class="vertical-align-content">
						<ion-icon :icon="$ionicons.starOutline" class="ion-align-self-center ion-margin-end" style="font-size: x-large;"/>
						<span style="font-size: xxx-large; font-weight: bold;">{{ points }}</span>
					</div>
					<ion-row>
						<ion-col class="ion-align-self-center">
							<span style="font-size: x-large; font-weight: bold; display: inline-block;">{{ $t('views.leaderboard.currentPlaceOnLeaderboard') }}</span>
						</ion-col>
						<ion-col size="auto">
							<span style="font-size: xxx-large; font-weight: bold; display: inline-block;">{{ place }}</span>
						</ion-col>
					</ion-row>
				</div>
			</ion-col>
		</ion-row>
		<ion-list>
			<ion-item lines="none">
				<label slot="start">{{ $t('views.leaderboard.place') }}</label>
				<label>{{ $t('views.leaderboard.user') }}</label>
				<label slot="end">{{ $t('views.leaderboard.numberPoints') }}</label>
			</ion-item>
			<ion-item v-if="friends.length === 0">
				<span>{{ $t('views.leaderboard.noUsers') }}</span>
			</ion-item>
			<ion-item v-else v-for="(friend, i) in friends" :key="`friend:${i}`" lines="none">
				<label slot="start" style="font-weight: bold">{{ i + 1 }}.</label>
				<ion-avatar class="ion-margin-start ion-margin-end">
					<s3-ion-img :s3-object="friend.profilePicture" :default-url="$store.getters['pageStructure/defaultProfilePicture']"/>
				</ion-avatar>
				<label>{{ friend.name }}</label>
				<ion-badge slot="end" color="accent">{{ friend.points }}</ion-badge>
			</ion-item>
		</ion-list>
<!--		<ion-row class="ion-row-full-width" style="background: var(&#45;&#45;ion-color-accent)">-->
<!--			<ion-col class="ion-padding-start ion-align-self-center">-->
<!--				<span class="ion-text-left" style="font-size: x-large; font-weight: bold;">{{ $t('views.leaderboard.weekEnding') }}</span>-->
<!--			</ion-col>-->
<!--			<ion-col size="auto" class="ion-padding-end">-->
<!--				<span class="ion-text-right" style="font-size: xx-large; font-weight: bold;">{{ weekEnd }}</span>-->
<!--			</ion-col>-->
<!--		</ion-row>-->
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';
	import S3IonImg from '@/components/structure/S3IonImg';


	export default {
		name: 'Leaderboard',
		components: {
			S3IonImg,
			BaseLayout,
		},
		data() {
			return {
				points: 526,
				place: 21,
				friends: [
					{
						id: 1,
						name: 'Aspa',
						profilePicture: {},
						points: 1050,
					},
					{
						id: 2,
						name: 'Myriam',
						profilePicture: {},
						points: 968,
					},
					{
						id: 3,
						name: 'Alex',
						profilePicture: {},
						points: 952,
					},
					{
						id: 4,
						name: 'Pandelis',
						profilePicture: {},
						points: 850,
					},
					{
						id: 5,
						name: 'Marina',
						profilePicture: {},
						points: 823,
					},
				],
				weekEnd: '14:04',
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.leaderboard.pageTitle'));
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

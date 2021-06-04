<template>
	<base-layout :page-title="$t('views.userProfile.hi') + ', ' + userProfile.name">
		<template v-slot:actions-end>
			<ion-button :router-link="{name: 'Notifications' }">
				<ion-icon :icon="$ionicons.notificationsOutline" slot="icon-only"/>
			</ion-button>
			<ion-button :router-link="{name: 'About' }">
				<ion-icon :icon="$ionicons.helpOutline" slot="icon-only"/>
			</ion-button>
			<ion-button :router-link="{name: 'Settings'}">
				<ion-icon :icon="$ionicons.settingsOutline" slot="icon-only"/>
			</ion-button>
			<ion-button @click="signOut">
				<ion-icon :icon="$ionicons.logOutOutline" slot="icon-only"/>
			</ion-button>
		</template>
		<ion-row>
			<ion-col>
				<ion-avatar style="border: 1px solid black">
					<s3-ion-img :s3-object="userProfile.profilePicture" :default-url="$store.getters['pageStructure/defaultProfilePicture']"/>
				</ion-avatar>
			</ion-col>
			<ion-col>
				<h5 class="ion-no-margin ion-margin-top">{{ userProfile.pointsUsed }}</h5>
				<p class="ion-no-margin">{{ $t('views.userProfile.pointUsed') }}</p>
			</ion-col>
			<ion-col>
				<h5 class="ion-no-margin ion-margin-top">{{ userProfile.noOfRewards }}</h5>
				<p class="ion-no-margin">{{ $t('views.userProfile.rewards') }}</p>
			</ion-col>
		</ion-row>
		<ion-row>
			<ion-col>
				<div class="ion-padding" style="border-radius: 200px; background-color: var(--ion-color-dark); color: var(--ion-color-light); margin-bottom: -30px; width: fit-content; margin-left: auto; margin-right: auto">
					<span>{{ $t('views.userProfile.Recent') }}</span>
				</div>
			</ion-col>
		</ion-row>
		<ion-row class="ion-row-full-width" style="background-color: var(--ion-color-accent); padding-top: 25px;">
			<ion-col class="ion-text-center ion-align-self-center">
				<p v-if="recents.length === 0">{{ $t('views.userProfile.noRecents') }}</p>
				<p v-else v-for="(recent, i) in recents" :key="i">
					<span style="font-size: large; font-weight: bold">{{ i + 1 }}. {{ recent.shop }}, </span>
					<span style="font-size: small;">{{ recent.address }}</span>
				</p>
			</ion-col>
		</ion-row>
		<ion-row class="ion-padding-top">
			<ion-col>
				<div class="ion-text-center" style="border-radius: 20px; border: 1px solid black;">
					<h3 class="ion-no-margin">{{ userProfile.cupsPerWeek }}</h3>
					<ion-icon :icon="$ionicons.pintOutline" class="ion-align-self-center" style="font-size: x-large; margin-left: auto"/>
					<h6 class="ion-no-margin">/{{ $t('views.userProfile.week') }}</h6>
				</div>
			</ion-col>
			<ion-col>
				<div class="ion-text-center" style="border-radius: 20px; border: 1px solid black;">
					<h3 class="ion-no-margin">{{ userProfile.hoursPerCup }}{{ $t('views.userProfile.hoursPerCup') }}</h3>
					<ion-icon :icon="$ionicons.timeOutline" class="ion-align-self-center" style="font-size: x-large; margin-left: auto"/>
					<h6 class="ion-no-margin">/{{ $t('views.userProfile.cup') }}</h6>
				</div>
			</ion-col>
			<ion-col>
				<div class="ion-text-center" style="border-radius: 20px; border: 1px solid black;">
					<h3 class="ion-no-margin">{{ userProfile.noOfCupsLost }} {{ $t('views.userProfile.cup') }}</h3>
					<ion-icon :icon="$ionicons.alertCircleOutline" class="ion-align-self-center" style="font-size: x-large; margin-left: auto"/>
					<h6 class="ion-no-margin">/{{ $t('views.userProfile.lost') }}</h6>
				</div>
			</ion-col>
		</ion-row>
		<ion-row class="ion-row-full-width ion-align-items-center" style="background-color: var(--ion-color-accent); margin-top: 30px; margin-bottom: 15px;">
			<ion-col size="auto" class="ion-text-center" height="40px">
				<div class="ion-padding ion-text-center ion-margin-end" style="border-radius: 100%; background-color: var(--ion-color-dark); color: var(--ion-color-light); width: 60px; height: 60px; margin-top: -30px; margin-bottom: -30px; display: inline-block; margin-left: 5px">
					<ion-icon :icon="$ionicons.peopleOutline" class="ion-align-self-center" style="font-size: x-large; margin-left: auto"/>
				</div>
			</ion-col>
			<ion-col>
				<span class="ion-align-self-center ion-margin" style="font-weight: bold;">{{ $t('views.userProfile.feelTheCupForFriends') }}</span>
			</ion-col>
		</ion-row>
		<ion-list>
			<ion-item v-if="friends.length === 0">
				<span>{{ $t('views.userProfile.noFriends') }}</span>
			</ion-item>
			<ion-item v-else v-for="(friend, i) in friends" :key="`friend:${i}`">
				<ion-avatar slot="start">
					<s3-ion-img :s3-object="friend.profilePicture" :default-url="$store.getters['pageStructure/defaultProfilePicture']"/>
				</ion-avatar>
				<span>{{ friend.name }}</span>
				<ion-button slot="end" @click="useCup(friend.id)" shape="round" class="useCupBtn">{{ $t('actions.useCup') }}</ion-button>
			</ion-item>
		</ion-list>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';
	import S3IonImg from '@/components/structure/S3IonImg';
	import { mapActions, mapGetters } from 'vuex';


	export default {
		name: 'UserProfile',
		components: {
			S3IonImg,
			BaseLayout,
		},
		data() {
			return {
				recents: [
					// {
					// 	shop: 'Coffee Jerry',
					// 	address: 'Amarousiou 32',
					// },
					// {
					// 	shop: 'Cup stories',
					// 	address: 'Vouliagmenis 118',
					// },
					// {
					// 	shop: 'Starbucks',
					// 	address: 'Kolokotroni 5',
					// },
				],
				friends: [
					{
						id: 1,
						name: 'Aspa',
						profilePicture: {},
					},
					{
						id: 2,
						name: 'Myriam',
						profilePicture: {},
					},
					{
						id: 3,
						name: 'Alex',
						profilePicture: {},
					}
				],
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.userProfile.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
		methods: {
			...mapActions('auth', ['signOut']),
			useCup(friendId) {
				console.log(`Used cup: ${friendId}`);
			},
		},
		computed: {
			...mapGetters('auth', ['userProfile']),
		},
	};
</script>
<style>
	.useCupBtn {
		--background: var(--ion-color-accent);
	}
</style>

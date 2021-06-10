<template>
	<base-layout :page-title="$t('views.map.pageTitle')">
		<ion-row class="ion-row-full-width">
			<ion-col class="ion-no-padding">
				<GoogleMap
					:api-key="$store.getters['pageStructure/googleMapsApiKey']"
					style="width: 100%; height: 75vh; position: fixed; z-index: 0"
					:center="center"
					:zoom="15"
					:styles="mapOptions"
				>
					<Marker v-for="marker in markers" :key="marker.position" :options="marker"/>
				</GoogleMap>
				<div style="position: relative; z-index: 1; background: var(--ion-background-color); margin-top: 70vh; border-radius: 25px 25px 0 0;">
					<ion-grid>
						<ion-row>
							<ion-col>
								<hr style="width: 50%; background: var(--ion-color-dark); border: 3px solid var(--ion-color-dark); border-radius: 25px">
							</ion-col>
						</ion-row>
						<ion-row>
							<ion-col>
								<ion-card class="ion-margin-vertical" style="border-radius: 20px">
									<ion-img src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
									<ion-card-header color="dark">
										<ion-card-title><strong>Coffee Jerry</strong></ion-card-title>
										<ion-card-subtitle>Patision 115, Athens</ion-card-subtitle>
									</ion-card-header>
								</ion-card>
								<ion-card class="ion-margin-vertical" style="border-radius: 20px">
									<ion-img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
									<ion-card-header color="dark">
										<ion-card-title><strong>Starducks</strong></ion-card-title>
										<ion-card-subtitle>Patision 115, Athens</ion-card-subtitle>
									</ion-card-header>
								</ion-card>
								<ion-card class="ion-margin-vertical" style="border-radius: 20px">
									<ion-img src="https://media.istockphoto.com/photos/come-join-us-for-a-coffee-picture-id1150956580?k=6&m=1150956580&s=612x612&w=0&h=tt9afQtFcpEUFAxqOP8vRVGemWAMSSmfYnmbRYoI8PE=" />
									<ion-card-header color="dark">
										<ion-card-title><strong>Coffee Mountain</strong></ion-card-title>
										<ion-card-subtitle>Patision 115, Athens</ion-card-subtitle>
									</ion-card-header>
								</ion-card>
								<ion-card class="ion-margin-vertical" style="border-radius: 20px">
									<ion-img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
									<ion-card-header color="dark">
										<ion-card-title><strong>Alps</strong></ion-card-title>
										<ion-card-subtitle>Patision 115, Athens</ion-card-subtitle>
									</ion-card-header>
								</ion-card>
							</ion-col>
						</ion-row>
					</ion-grid>
				</div>
			</ion-col>
		</ion-row>
	</base-layout>
</template>
<script>
	import BaseLayout from '@/components/base/BaseLayout';
	import { GoogleMap, Marker } from 'vue3-google-map';


	export default {
		name: 'Map',
		components: {
			BaseLayout,
			GoogleMap,
			Marker,
		},
		data() {
			return {
				mapOptions: [
					{
						'featureType': 'poi',
						'elementType': 'labels.icon',
						'stylers': [
							{
								'visibility': 'off',
							},
						],
					},
				],
				center: {
					lat: 40.09935068133715,
					lng: 23.309305733312083,
				},
				markers: [
					{
						position: {
							lat: 40.09935068133715,
							lng: 23.309305733312083,
						},
						clickable: true,
						draggable: false,
						title: 'Sani Resort',
					},
					{
						position: {
							lat: 40.10063917206959,
							lng: 23.307331626032646,
						},
						clickable: true,
						draggable: false,
						title: 'Sani Beach',
					},
					{
						position: {
							lat: 40.100023513346166,
							lng: 23.31305019588953,
						},
						clickable: true,
						draggable: false,
						title: 'Porto Sani',
					},
					{
						position: {
							lat: 40.09661765682072,
							lng: 23.313157194212593,
						},
						clickable: true,
						draggable: false,
						title: 'Sani Dunes',
					},
				],
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.map.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
	};
</script>
<style>
	ion-content {
		--overflow: overlay;
	}
</style>

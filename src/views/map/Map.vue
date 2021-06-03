<template>
	<base-layout :page-title="$t('views.map.pageTitle')">
		<ion-row class="ion-row-full-width">
			<ion-col class="ion-no-padding">
				<GoogleMap
					:api-key="$store.getters['pageStructure/googleMapsApiKey']"
					style="width: 100%; height: 75vh"
					:center="center"
					:zoom="15"
					:styles="mapOptions"
				>
					<Marker v-for="marker in markers" :key="marker.position" :options="marker"/>
				</GoogleMap>
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

<template>
	<ion-row class="ion-row-full-width">
		<ion-col class="ion-text-center ion-align-self-center" style="padding-left: 0; padding-right: 0;">
			<qrcode-stream @decode="onDecode" @init="onInit" v-if="!userProfile"/>
			<p v-if="userId">{{ `User ID: ${userId}` }}</p>
		</ion-col>
	</ion-row>
	<ion-row v-if="userProfile">
		<ion-col>
			<ion-button @click="confirmCustomer" color="accent" shape="round" class="ion-margin" style="height: fit-content" expand="block">
				<div>
					<h5>User</h5>
					<h3>{{ `${userProfile.name} ${userProfile.surname}` }}</h3>
				</div>
			</ion-button>
			<ion-button @click="qrScanAgain" color="danger" shape="round" fill="outline" expand="block" size="large" class="ion-margin">
				<ion-icon :icon="$ionicons.reloadOutline" slot="start"/>
				<label>{{ $t('actions.qrScanAgain') }}</label>
			</ion-button>
		</ion-col>
	</ion-row>
	<!--	<ion-row>
			<ion-col class="ion-text-center">
				<ion-button @click="confirmNewCustomer" fill="clear" style="height: fit-content" expand="block">
					<div>
						<ion-icon :icon="$ionicons.addCircleOutline" size="large"/>
						<h5>{{ $t('actions.confirmNewCustomer') }}</h5>
					</div>
				</ion-button>
				<ion-button @click="cupLost" fill="clear" style="height: fit-content" expand="block">
					<div>
						<ion-icon :icon="$ionicons.warningOutline" size="large"/>
						<h5>{{ $t('actions.cupLost') }}</h5>
					</div>
				</ion-button>
				<ion-button @click="qrScan" fill="clear" style="height: fit-content" expand="block">
					<div>
						<ion-icon :icon="$ionicons.qrCodeOutline" size="large"/>
						<h5>{{ $t('actions.qrScan') }}</h5>
					</div>
				</ion-button>
			</ion-col>
		</ion-row>-->
	<!--	<ion-row>
			<ion-col class="ion-text-center">
				<ion-button @click="confirmNewCustomer" fill="clear">
					<ion-icon :icon="$ionicons.addCircleOutline" slot="start"/>
					<label>{{ $t('actions.confirmNewCustomer') }}</label>
				</ion-button>
				<ion-button @click="cupLost" fill="clear">
					<ion-icon :icon="$ionicons.warningOutline" slot="start"/>
					<label>{{ $t('actions.cupLost') }}</label>
				</ion-button>
				<ion-button @click="qrScan" fill="clear">
					<ion-icon :icon="$ionicons.qrCodeOutline" slot="start"/>
					<label>{{ $t('actions.qrScan') }}</label>
				</ion-button>
			</ion-col>
		</ion-row>-->
	<!--	<ion-row v-if="src !== null">
			<ion-col>
				<ion-img :src="src"/>
			</ion-col>
		</ion-row>-->
</template>
<script>
	// import { Camera, CameraResultType } from '@capacitor/camera';
	// import QrCode from 'qrcode-reader';

	// import { getUser } from '@/graphql/queries';
	import { API, graphqlOperation } from 'aws-amplify';
	import { QrcodeStream } from 'vue3-qrcode-reader';


	export default {
		name: 'storeHomeGive',
		components: {
			QrcodeStream,
		},
		data() {
			return {
				src: null,
				userId: '',
				result: '',
				error: '',
				userProfile: null,
			};
		},
		// created() {
		// 	Camera.requestPermissions();
		// },
		methods: {
			confirmCustomer() {
				console.log('Confirm customer.');
				this.userId = '';
				this.userProfile = null;
			},
			qrScanAgain() {
				console.log('QR Scan again.');
				this.userId = '';
				this.userProfile = null;
			},
			confirmNewCustomer() {
				console.log('Confirm new customer.');
			},
			cupLost() {
				console.log('Cup Lost.');
			},
			async qrScan() {
				console.log('QR Scan');
				//
				// const image = await Camera.getPhoto({
				// 	quality: 100,
				// 	allowEditing: false,
				// 	resultType: CameraResultType.DataUrl,
				// });
				//
				// this.src = image.dataUrl;
				//
				// let qr = new QrCode();
				// qr.callback = function (err, value) {
				// 	if (err) {
				// 		return console.error(err);
				// 	}
				// 	this.userId = value.result;
				// 	console.log(value.result);
				// };
				// qr.decode(this.src);
			},
			async onDecode(result) {
				this.userId = result;
				console.log(result);

				const getUserCustom = /* GraphQL */ `
				  query GetUser($id: ID!) {
				    getUser(id: $id) {
				      id
				      sub
				      name
				      surname
				      profilePicture {
				        level
				        filePath
				        filename
				        contentType
				      }
				    }
				  }
				`;
				let userProfile;
				try {
					userProfile = await API.graphql(graphqlOperation(getUserCustom, { id: result }));
				} catch (e) {
					console.log(e);
				} finally {
					console.log(userProfile);
					this.userProfile = userProfile.data.getUser;
				}
				if (!this.userProfile) {
					this.qrScanAgain();
				}
				console.log(this.userProfile);
			},
			async onInit(promise) {
				try {
					await promise;
				} catch (error) {
					if (error.name === 'NotAllowedError') {
						this.error = 'ERROR: you need to grant camera access permission';
					} else if (error.name === 'NotFoundError') {
						this.error = 'ERROR: no camera on this device';
					} else if (error.name === 'NotSupportedError') {
						this.error = 'ERROR: secure context required (HTTPS, localhost)';
					} else if (error.name === 'NotReadableError') {
						this.error = 'ERROR: is the camera already in use?';
					} else if (error.name === 'OverconstrainedError') {
						this.error = 'ERROR: installed cameras are not suitable';
					} else if (error.name === 'StreamApiNotSupportedError') {
						this.error = 'ERROR: Stream API is not supported in this browser';
					}
				}
			},
		},
	};
</script>

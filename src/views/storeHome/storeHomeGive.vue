<template>
	<ion-grid fixed>
		<ion-row>
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
		</ion-row>
<!--		<ion-row v-if="src !== null">-->
<!--			<ion-col>-->
<!--				<ion-img :src="src"/>-->
<!--			</ion-col>-->
<!--		</ion-row>-->
		<ion-row>
			<ion-col>
<!--				<h1>QR Stream</h1>-->
				<p>{{ userId }}</p>
				<qrcode-stream @decode="onDecode" @init="onInit" />
			</ion-col>
		</ion-row>
	</ion-grid>
</template>
<script>
	// import { Camera, CameraResultType } from '@capacitor/camera';
	// import QrCode from 'qrcode-reader';

	import { QrcodeStream } from 'vue3-qrcode-reader';


	export default {
		name: 'storeHomeGive',
		components: {
			QrcodeStream
		},
		data() {
			return {
				src: null,
				userId: '',
				result: '',
				error: ''
			};
		},
		// created() {
		// 	Camera.requestPermissions();
		// },
		methods: {
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
			onDecode (result) {
				this.userId = result;
				console.log(result);
			},
			async onInit (promise) {
				try {
					await promise
				} catch (error) {
					if (error.name === 'NotAllowedError') {
						this.error = "ERROR: you need to grant camera access permission"
					} else if (error.name === 'NotFoundError') {
						this.error = "ERROR: no camera on this device"
					} else if (error.name === 'NotSupportedError') {
						this.error = "ERROR: secure context required (HTTPS, localhost)"
					} else if (error.name === 'NotReadableError') {
						this.error = "ERROR: is the camera already in use?"
					} else if (error.name === 'OverconstrainedError') {
						this.error = "ERROR: installed cameras are not suitable"
					} else if (error.name === 'StreamApiNotSupportedError') {
						this.error = "ERROR: Stream API is not supported in this browser"
					}
				}
			}
		},
	};
</script>

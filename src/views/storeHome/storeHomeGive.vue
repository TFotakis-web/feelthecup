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
	</ion-grid>
</template>
<script>
	export default {
		name: 'storeHomeGive',
		methods: {
			confirmNewCustomer() {
				console.log('Confirm new customer.');
			},
			cupLost() {
				console.log('Cup Lost.');
			},
			qrScan() {
				console.log('QR Scan');
			}
		},
	};
</script>

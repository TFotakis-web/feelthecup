<template>
	<ion-footer v-if="show">
		<ion-toolbar>
			<ion-buttons>
				<ion-grid fixed>
					<ion-row>
						<ion-col size="12" size-sm="8" offset-sm="2" size-md="6" offset-md="3" size-lg="4" offset-lg="4" size-xl="4" offset-xl="4">
							<ion-row class="ion-text-center">
								<ion-col v-for="button in buttons" :key="button.routerLinkName">
									<ion-button :router-link="{ name: button.routerLinkName}" :color="$route.name ===  button.routerLinkName ? 'accent' : ''">
										<ion-icon :icon="button.icon" slot="icon-only"/>
									</ion-button>
								</ion-col>
							</ion-row>
						</ion-col>
					</ion-row>
				</ion-grid>
			</ion-buttons>
		</ion-toolbar>
	</ion-footer>
</template>
<script>
	export default {
		name: 'Tabs',
		data() {
			return {
				buttons: [
					{
						routerLinkName: 'Home',
						icon: this.$ionicons.homeOutline
					},
					{
						routerLinkName: 'Map',
						icon: this.$ionicons.locationOutline
					},
					{
						routerLinkName: 'QRCode',
						icon: this.$ionicons.qrCodeOutline
					},
					{
						routerLinkName: 'Rewards',
						icon: this.$ionicons.pintOutline
					},
					{
						routerLinkName: 'UserProfile',
						icon: this.$ionicons.personCircleOutline
					},
				]
			}
		},
		computed: {
			routerLinkNames() {
				return Array.from(this.buttons, b => b.routerLinkName);
			},
			show() {
				return this.routerLinkNames.includes(this.$route.name);
			}
		},
	};
</script>

<template>
	<ion-page>
		<ion-content :fullscreen="true" color="gradient">
			<ion-grid fixed class="ion-centered-container ion-margin-top">
				<ion-row class="ion-justify-content-center">
					<ion-col size-sm="10" size-md="8" size-lg="6" size-xl="6">
						<ion-icon icon="/assets/logo.svg" color="light" class="ion-margin-bottom" style="font-size: 200px"/>
						<h1 class="ion-margin-bottom" style="font-size: xxx-large">{{ $t('views.auth.confirmSignUp') }}</h1>
						<form @submit.prevent="confirmSignUp">
							<ion-item class="ion-item-round ion-margin-bottom">
								<ion-icon :icon="$ionicons.mailOutline" slot="start" class="ion-align-self-center"/>
								<ion-label position="floating">{{ $t('fields.email') }}</ion-label>
								<ion-input v-model="credentials.username" type="email" name="email" autocomplete="email" required/>
							</ion-item>
							<ion-item class="ion-item-round ion-margin-bottom">
								<ion-icon :icon="$ionicons.qrCodeOutline" slot="start" class="ion-align-self-center"/>
								<ion-label position="floating">{{ $t('fields.verificationCode') }}</ion-label>
								<ion-input v-model="verificationCode" type="text" required/>
							</ion-item>
							<ion-button :disabled="resendLoading" @click="resendSignUp" fill="clear" color="dark" expand="block" shape="round" class="ion-margin-bottom">{{ $t('actions.resendVerificationCode') }}</ion-button>
							<loadingBtn color="dark" expand="block" type="submit" shape="round" :loading="loading" :text="$t('actions.submit')" :loadingText="$t('actions.submitting')" class="ion-margin-bottom"/>
							<p v-if="error !== {}" class="text-danger">{{ error.message }}</p>
							<ion-button :router-link="{ name: 'SignIn' }" fill="clear" color="dark" expand="block" shape="round">{{ $t('views.auth.signIn') }}</ion-button>
							<localeDropdown :use-button="true" fill="clear" color="dark" expand="block" shape="round"/>
						</form>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>
<script>
	import localeDropdown from '@/components/structure/localeDropdown';
	import loadingBtn from '@/components/structure/loadingBtn';


	export default {
		name: 'confirmSignUp',
		components: {
			localeDropdown,
			loadingBtn,
		},
		props: {
			credentials: {
				type: Object,
				default: () => ({
					username: '',
					password: '',
				}),
			},
		},
		data() {
			return {
				verificationCode: '',
				resendLoading: false,
				loading: false,
				error: {},
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.auth.confirmSignUp'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
		methods: {
			confirmSignUp: async function () {
				this.loading = true;
				this.error = {};
				try {
					await this.$store.dispatch('auth/confirmSignUp', {
						username: this.credentials.username,
						code: this.verificationCode,
					});
					await this.$router.push({ name: 'SignIn' });
					this.loading = false;
				} catch (error) {
					this.error = error;
					this.loading = false;
				}
			},
			resendSignUp: async function () {
				this.resendLoading = true;
				try {
					await this.$store.dispatch('auth/resendSignUp', this.credentials.username);
					setTimeout(() => {
						this.resendLoading = false;
					}, 10000);
				} catch (error) {
					this.error = error;
					this.resendLoading = false;
				}
			},
		},
	};
</script>

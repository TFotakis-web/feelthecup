<template>
	<ion-page>
		<ion-content :fullscreen="true" color="gradient">
			<ion-grid fixed class="ion-centered-container">
				<ion-row class="ion-justify-content-center">
					<ion-col size-sm="10" size-md="8" size-lg="6" size-xl="6">
						<ion-icon icon="/assets/logo.svg" color="light" class="ion-margin-bottom" style="font-size: 200px"/>
						<h1 class="ion-margin-bottom" style="font-size: xxx-large">{{ $t('views.auth.enter') }}</h1>
						<form @submit.prevent="signIn">
							<ion-item class="ion-item-round ion-margin-bottom">
								<ion-icon :icon="$ionicons.mailOutline" slot="start" class="ion-align-self-center"/>
								<ion-label position="floating">{{ $t('fields.email') }}</ion-label>
								<ion-input v-model="credentials.username" type="email" name="email" autocomplete="email" required/>
							</ion-item>
							<ion-item class="ion-item-round ion-margin-bottom">
								<ion-icon :icon="$ionicons.keyOutline" slot="start" class="ion-align-self-center"/>
								<ion-label position="floating">{{ $t('fields.password') }}</ion-label>
								<ion-input v-model="credentials.password" :type="passwordVisible ? 'text' : 'password'" name="password" autocomplete="current-password" required/>
								<ion-button @click="passwordVisible = !passwordVisible" slot="end" fill="clear" color="dark" shape="round" class="ion-align-self-center">
									<ion-icon slot="icon-only" :icon="passwordVisible ? $ionicons.eyeOffOutline : $ionicons.eyeOutline"/>
								</ion-button>
							</ion-item>
							<loadingBtn color="dark" expand="block" type="submit" shape="round" :loading="loading" :text="$t('views.auth.signIn')" :loadingText="$t('views.auth.signingIn')" class="ion-margin-bottom"/>
							<p v-if="error !== {}" class="text-danger">{{ error.message }}</p>
							<ion-button :router-link="{ name: 'ForgotPassword' }" fill="clear" color="dark" expand="block" shape="round">{{ $t('views.auth.forgotYourPassword') }}</ion-button>
							<ion-button :router-link="{ name: 'SignUp' }" fill="clear" color="dark" expand="block" shape="round">{{ $t('views.auth.createAccount') }}</ion-button>
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
		name: 'signIn',
		components: {
			localeDropdown,
			loadingBtn,
		},
		data() {
			return {
				loading: false,
				credentials: {
					username: '',
					password: '',
				},
				error: {},
				passwordVisible: false,
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.auth.signInToYourFeelTheCupAccount'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
		methods: {
			signIn: async function () {
				this.loading = true;
				this.error = {};
				try {
					await this.$store.dispatch('auth/signIn', this.credentials);
					await this.$router.push({ name: 'Home' });
				} catch (error) {
					if (error.name === 'UserNotConfirmedException') {
						await this.$router.push({ name: 'ConfirmSignUp' });
					} else if (error.name === 'NEW_PASSWORD_REQUIRED') {
						await this.$router.push({ name: 'ForceChangePassword' });
					}
					this.error = error;
				} finally {
					this.loading = false;
				}
			},
		},
	};
</script>
<style>
	.gradient-background {
		background: rgb(220, 106, 53);
		background: linear-gradient(45deg, rgba(220, 106, 53, 1) 0%, rgba(244, 206, 16, 1) 50%, rgba(97, 191, 166, 1) 100%);
	}
</style>

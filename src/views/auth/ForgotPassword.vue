<template>
	<ion-page>
		<ion-content :fullscreen="true" color="gradient">
			<ion-grid fixed class="ion-centered-container ion-margin-top">
				<ion-row class="ion-justify-content-center">
					<ion-col size-sm="10" size-md="8" size-lg="6" size-xl="6">
						<ion-icon icon="/assets/logo.svg" color="light" class="ion-margin-bottom" style="font-size: 200px"/>
						<h1 class="ion-margin-bottom" style="font-size: xxx-large">{{ $t('views.auth.resetYourPassword') }}</h1>
						<form v-if="!showVerificationForm" @submit.prevent="forgotPassword">
							<ion-item class="ion-item-round ion-margin-bottom">
								<ion-icon :icon="$ionicons.mailOutline" slot="start" class="ion-align-self-center"/>
								<ion-label position="floating">{{ $t('fields.email') }}</ion-label>
								<ion-input v-model="username" type="email" name="email" autocomplete="email" required/>
							</ion-item>
							<loadingBtn color="dark" expand="block" type="submit" shape="round" :loading="loading" :text="$t('actions.sendCode')" :loadingText="$t('actions.sendingCode')" class="ion-margin-bottom"/>
							<p v-if="error !== {}" class="text-danger">{{ error.message }}</p>
							<ion-button :router-link="{name: 'SignIn'}" fill="clear" color="dark" expand="block" shape="round">{{ $t('views.auth.backToSignIn') }}</ion-button>
							<localeDropdown :use-button="true" fill="clear" color="dark" expand="block" shape="round"/>
						</form>
						<form v-else-if="showVerificationForm" @submit.prevent="forgotPasswordSubmit">
							<ion-item class="ion-item-round ion-margin-bottom">
								<ion-icon :icon="$ionicons.qrCodeOutline" slot="start" class="ion-align-self-center"/>
								<ion-label position="floating">{{ $t('fields.verificationCode') }}</ion-label>
								<ion-input v-model="verificationCode" type="text" name="verificationCode" autocomplete="verificationCode" required/>
							</ion-item>
							<ion-item class="ion-item-round ion-margin-bottom">
								<ion-icon :icon="$ionicons.keyOutline" slot="start" class="ion-align-self-center"/>
								<ion-label position="floating">{{ $t('fields.newPassword') }}</ion-label>
								<ion-input v-model="newPassword" :type="passwordVisible ? 'text' : 'password'" name="password" autocomplete="new-password" required/>
								<ion-button @click="passwordVisible = !passwordVisible" slot="end" fill="clear" color="dark" shape="round" class="ion-align-self-center">
									<ion-icon slot="icon-only" :icon="passwordVisible ? $ionicons.eyeOffOutline : $ionicons.eyeOutline"/>
								</ion-button>
							</ion-item>
							<loadingBtn color="dark" expand="block" type="submit" shape="round" :loading="loading" :text="$t('actions.submit')" :loadingText="$t('actions.submitting')" class="ion-margin-bottom"/>
							<p v-if="error !== {}" class="text-danger">{{ error.message }}</p>
							<ion-button :router-link="{name: 'SignIn'}" fill="clear" color="dark" expand="block" shape="round">{{ $t('views.auth.backToSignIn') }}</ion-button>
							<localeDropdown :use-button="true" fill="clear" color="dark" expand="block" shape="round"/>
						</form>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>
<script>
	import { mapActions } from 'vuex';
	import localeDropdown from '@/components/structure/localeDropdown';
	import loadingBtn from '@/components/structure/loadingBtn';


	export default {
		name: 'forgotPassword',
		components: {
			localeDropdown,
			loadingBtn,
		},
		data() {
			return {
				loading: false,
				error: {},
				username: '',
				showVerificationForm: false,
				verificationCode: '',
				newPassword: '',
				passwordVisible: false,
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.auth.resetYourPassword'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
		methods: {
			...mapActions({
				forgotPasswordStore: 'auth/forgotPassword',
				forgotPasswordSubmitStore: 'auth/forgotPasswordSubmit',
			}),
			forgotPassword: async function () {
				this.loading = true;
				this.error = {};
				try {
					await this.forgotPasswordStore(this.username);
					this.showVerificationForm = true;
					this.loading = false;
				} catch (error) {
					this.error = error;
					this.loading = false;
				}
			},
			forgotPasswordSubmit: async function () {
				this.loading = true;
				this.error = {};
				try {
					await this.forgotPasswordSubmitStore({
						username: this.username,
						code: this.verificationCode,
						password: this.newPassword,
					});
					await this.$router.push({ name: 'SignIn' });
				} catch (error) {
					this.error = error;
					this.loading = false;
				}
			},
		},
	};
</script>

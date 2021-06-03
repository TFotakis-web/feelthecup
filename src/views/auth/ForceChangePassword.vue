<template>
	<ion-page>
		<ion-content :fullscreen="true" color="gradient">
			<ion-grid fixed class="ion-centered-container ion-margin-top">
				<ion-row class="ion-justify-content-center">
					<ion-col size-sm="10" size-md="8" size-lg="6" size-xl="6">
						<ion-icon icon="/assets/logo.svg" color="light" class="ion-margin-bottom" style="font-size: 200px"/>
						<h1 class="ion-margin-bottom" style="font-size: xx-large">{{ $t('views.auth.changeYourPassword') }}</h1>
						<form @submit.prevent="completeNewPassword">
							<ion-item class="ion-item-round ion-margin-bottom">
								<ion-icon :icon="$ionicons.mailOutline" slot="start" class="ion-align-self-center"/>
								<ion-label position="floating">{{ $t('fields.email') }}</ion-label>
								<ion-input v-model="username" type="email" name="email" autocomplete="email" required/>
							</ion-item>
							<ion-item class="ion-item-round ion-margin-bottom">
								<ion-icon :icon="$ionicons.keyOutline" slot="start" class="ion-align-self-center"/>
								<ion-label position="floating">{{ $t('fields.password') }}</ion-label>
								<ion-input v-model="old_password" :type="oldPasswordVisible ? 'text' : 'password'" name="password" autocomplete="new-password" required/>
								<ion-button @click="oldPasswordVisible = !oldPasswordVisible" slot="end" fill="clear" color="dark" shape="round" class="ion-align-self-center">
									<ion-icon slot="icon-only" :icon="oldPasswordVisible ? $ionicons.eyeOffOutline : $ionicons.eyeOutline"/>
								</ion-button>
							</ion-item>
							<ion-item class="ion-item-round ion-margin-bottom">
								<ion-icon :icon="$ionicons.keyOutline" slot="start" class="ion-align-self-center"/>
								<ion-label position="floating">{{ $t('fields.newPassword') }}</ion-label>
								<ion-input v-model="new_password" :type="newPasswordVisible ? 'text' : 'password'" name="password" autocomplete="new-password" required/>
								<ion-button @click="newPasswordVisible = !newPasswordVisible" slot="end" fill="clear" color="dark" shape="round" class="ion-align-self-center">
									<ion-icon slot="icon-only" :icon="newPasswordVisible ? $ionicons.eyeOffOutline : $ionicons.eyeOutline"/>
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
	import localeDropdown from '@/components/structure/localeDropdown';
	import loadingBtn from '@/components/structure/loadingBtn';


	export default {
		name: 'forceChangePassword',
		components: {
			localeDropdown,
			loadingBtn,
		},
		props: {
			credentials: {
				type: Object,
				default: () => {
				},
			},
		},
		data() {
			return {
				loading: false,
				error: {},
				username: '',
				old_password: '',
				new_password: '',
				oldPasswordVisible: false,
				newPasswordVisible: false,
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.auth.changeYourPassword'));
			this.$store.commit('pageStructure/setPageBackButton', false);
		},
		methods: {
			completeNewPassword: async function () {
				this.loading = true;
				this.error = {};
				try {
					await this.$store.dispatch('auth/completeNewPassword', {
						username: this.username,
						old_password: this.old_password,
						new_password: this.new_password,
					});
					await this.$router.push({ name: 'SignIn' });
					this.loading = false;
				} catch (error) {
					this.error = error;
					this.loading = false;
				}
			},
		},
	};
</script>

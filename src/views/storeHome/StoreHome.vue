<template>
	<ion-page>
		<ion-header style="background: var(--ion-color-gradient); color: var(--ion-color-dark)">
			<ion-grid fixed>
				<ion-row class="ion-row-full-width">
					<ion-col>
						<span><strong>Store ID:</strong> {{ store.id }}</span>
					</ion-col>
					<ion-col class="ion-text-center">
						<ion-icon icon="/assets/logo.svg" color="light" class="ion-margin-bottom" style="font-size: 150px"/>
						<h1 class="ion-no-margin">FeelThe<strong>Cup</strong></h1>
					</ion-col>
					<ion-col class="ion-text-right">
						<ion-button :router-link="{name: 'StoreSettings'}" fill="clear" color="dark">
							<ion-icon :icon="$ionicons.settingsOutline" slot="icon-only"/>
						</ion-button>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-header>
		<ion-content>
			<ion-button v-if="state === 'init'" @click="state = 'qrScan'" fill="outline" color="dark" shape="round" class="ion-margin ion-padding" style="height: fit-content" expand="block">
				<div>
					<ion-icon :icon="$ionicons.qrCodeOutline" size="large"/>
					<h5>{{ $t('actions.qrScan') }}</h5>
				</div>
			</ion-button>
			<ion-row v-if="state === 'qrScan'" class="ion-row-full-width">
				<ion-col class="ion-text-center ion-no-padding ion-align-self-center" style="padding-left: 0; padding-right: 0;">
					<qrcode-stream @decode="onDecode" @init="onInitQRScanner" v-if="!userProfile"/>
					<p v-if="userId">{{ `User ID: ${userId}` }}</p>
					<p v-if="error">
						<ion-text color="danger">{{ error }}</ion-text>
					</p>
					<ion-button @click="init" color="danger" shape="round" fill="outline" expand="block" size="large" class="ion-margin">
						<ion-icon :icon="$ionicons.closeOutline" slot="start"/>
						<label>{{ $t('actions.cancel') }}</label>
					</ion-button>
				</ion-col>
			</ion-row>
			<ion-row v-if="state === 'userScanned'">
				<ion-col>
					<div class="ion-margin-top ion-margin-bottom ion-padding ion-text-center" style="height: fit-content; width: fit-content; background: var(--ion-color-accent-tint); border-radius: 25px; margin-left: auto; margin-right: auto;">
						<h5 class="ion-no-margin">{{ $t('fields.user') }}:</h5>
						<h3 class="ion-no-margin"><strong>{{ `${userProfile.name} ${userProfile.surname}` }}</strong></h3>
					</div>
					<ion-button @click="giveCup" color="accent" shape="round" size="large" expand="block" class="ion-margin">
						<ion-icon :icon="$ionicons.arrowUpCircleOutline" slot="start"/>
						<ion-label>{{ $t('actions.give') }}</ion-label>
					</ion-button>
					<ion-button @click="receiveCup" color="accent" shape="round" size="large" expand="block" class="ion-margin">
						<ion-icon :icon="$ionicons.arrowDownCircleOutline" slot="start"/>
						<ion-label>{{ $t('actions.receive') }}</ion-label>
					</ion-button>
					<ion-button @click="qrScan" color="dark" shape="round" fill="outline" expand="block" size="large" class="ion-margin">
						<ion-icon :icon="$ionicons.reloadOutline" slot="start"/>
						<label>{{ $t('actions.qrScanAgain') }}</label>
					</ion-button>
					<ion-button @click="init" color="dark" shape="round" fill="outline" expand="block" size="large" class="ion-margin">
						<ion-icon :icon="$ionicons.closeOutline" slot="start"/>
						<label>{{ $t('actions.cancel') }}</label>
					</ion-button>
				</ion-col>
			</ion-row>
			<!--			<ion-toolbar>-->
			<!--				<ion-segment v-model="page">-->
			<!--					<ion-segment-button value="give">-->
			<!--						<ion-label>{{ $t('actions.give') }}</ion-label>-->
			<!--					</ion-segment-button>-->
			<!--					<ion-segment-button value="receive">-->
			<!--						<ion-label>{{ $t('actions.receive') }}</ion-label>-->
			<!--					</ion-segment-button>-->
			<!--				</ion-segment>-->
			<!--			</ion-toolbar>-->
			<!--			<router-view/>-->
		</ion-content>
	</ion-page>
</template>
<script>
	import { API, graphqlOperation } from 'aws-amplify';
	import { mapGetters } from 'vuex';
	import { QrcodeStream } from 'vue3-qrcode-reader';


	export default {
		name: 'StoreHome',
		components: {
			QrcodeStream,
		},
		data() {
			return {
				page: 'give',
				state: 'init',
				userId: '',
				userProfile: null,
				error: '',
			};
		},
		mounted() {
			this.$store.commit('pageStructure/setPageTitle', () => window.vm.$t('views.storeHome.pageTitle'));
			this.$store.commit('pageStructure/setPageBackButton', false);

			this.init();
			// this.onDecode('8701cb43-d0bd-4936-b17b-ba2c81e3a3d9');
		},
		methods: {
			init() {
				this.state = 'init';
				this.userId = '';
				this.userProfile = null;
				this.error = '';
			},
			qrScan() {
				this.userId = '';
				this.userProfile = null;
				this.error = '';
				this.state = 'qrScan';
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
				      cup_balance
				      noOfCupsUsed
				      noOfCupsLost
				    }
				  }
				`;
				let userProfile;
				try {
					userProfile = await API.graphql(graphqlOperation(getUserCustom, { id: result }));
					this.userProfile = userProfile.data.getUser;
					console.log(this.userProfile);
				} catch (e) {
					console.log(e);
					this.$toast.error();
					this.qrScan();
				}
				this.state = 'userScanned';
			},
			async onInitQRScanner(promise) {
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
			async giveCup() {
				console.log('Give cup!');
				const updateUserCustom = /* GraphQL */ `
					mutation UpdateUser(
						$input: UpdateUserInput!
						$condition: ModelUserConditionInput
					) {
						updateUser(input: $input, condition: $condition) {
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
					        cup_balance
					        noOfCupsUsed
					        noOfCupsLost
						}
					}`;
				try {
					let response = await API.graphql(graphqlOperation(updateUserCustom, {
						input: {
							id: this.userId,
							cup_balance: this.userProfile.cup_balance - 1,
							noOfCupsUsed: this.userProfile.noOfCupsUsed + 1,
							// noOfCupsLost: this.userProfile.noOfCupsLost,
						},
					}));
					console.log(response);
				} catch (e) {
					console.log(e);
					this.$toast.error();
				}

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
				      cup_balance
				      noOfCupsUsed
				      noOfCupsLost
				    }
				  }
				`;
				let userProfile;
				try {
					userProfile = await API.graphql(graphqlOperation(getUserCustom, { id: this.userId }));
					this.userProfile = userProfile.data.getUser;
				} catch (e) {
					console.log(e);
					this.$toast.error();
				}
				this.init();
			},
			async receiveCup() {
				console.log('Receive cup!');
				const updateUserCustom = /* GraphQL */ `
					mutation UpdateUser(
						$input: UpdateUserInput!
						$condition: ModelUserConditionInput
					) {
						updateUser(input: $input, condition: $condition) {
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
					        cup_balance
					        noOfCupsUsed
					        noOfCupsLost
						}
					}`;
				try {
					let response = await API.graphql(graphqlOperation(updateUserCustom, {
						input: {
							id: this.userId,
							cup_balance: this.userProfile.cup_balance + 1,
							// noOfCupsLost: this.userProfile.noOfCupsLost,
						},
					}));
					console.log(response);
				} catch (e) {
					console.log(e);
					this.$toast.error();
				}

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
				      cup_balance
				      noOfCupsUsed
				      noOfCupsLost
				    }
				  }
				`;
				let userProfile;
				try {
					userProfile = await API.graphql(graphqlOperation(getUserCustom, { id: this.userId }));
					this.userProfile = userProfile.data.getUser;
				} catch (e) {
					console.log(e);
					this.$toast.error();
				}
				this.init();
			},
		},
		computed: {
			...mapGetters('auth', ['store']),
		},
		// watch: {
		// 	page: {
		// 		immediate: true,
		// 		handler(newValue) {
		// 			this.$router.push({ name: newValue === 'give' ? 'StoreHomeGive' : 'StoreHomeReceive' });
		// 		},
		// 	},
		// },
	};
</script>

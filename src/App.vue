<template>
	<ion-app v-if="loading === 0">
		<ion-loading :is-open="$store.getters['pageStructure/globalPendingPromises']"/>
		<router-view v-if="$store.getters['pageStructure/globalPendingPromises'] === 0"/>
	</ion-app>
</template>
<script>
	export default {
		name: 'App',
		data() {
			return {
				loading: 0,
				colorTheme: 'light',
			};
		},
		created: async function () {
			this.initLocale();
			window.vm = this;
		},
		mounted() {
			this.setColorTheme();
		},
		methods: {
			initLocale: function () {
				this.loading++;
				const userLang =
					this.$cookies.get('locale') ||
					navigator.language ||
					navigator.userLanguage;
				this.$i18n.$loadLanguageAsync(userLang)
					.then(() => {
						this.loading--;
					});
			},
			toggleTheme() {
				this.colorTheme = this.colorTheme === 'light' ? 'dark' : 'light';
				this.setColorTheme();
			},
			setColorTheme() {
				document.body.setAttribute('color-theme', this.colorTheme);
				this.$cookies.set('color-theme', this.colorTheme);
			},
		},
	};
</script>
<style>
	input:-webkit-autofill {
		height: 0;
		-webkit-box-shadow: 0 0 0 10px white inset;
		-webkit-text-fill-color: black;
		font-weight: 500;
	}

	input:-webkit-autofill:focus {
		height: 0;
		-webkit-box-shadow: 0 0 0 10px white inset;
		-webkit-text-fill-color: black;
		font-weight: 500;
	}

	hr {
		background-color: var(--ion-color-medium);
	}

	a {
		display: inline-block;
		text-decoration: none;
	}

	.no-arrows input::-webkit-outer-spin-button,
	.no-arrows input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.no-arrows input[type=number] {
		-moz-appearance: textfield; /* Firefox */
	}

	ion-menu ion-content ion-list {
		--border-width: 1px;
		border-bottom: var(--border-width) solid var(--ion-color-step-150, #d7d8da) !important;
	}

	.list-lines-none,
	.list-md-lines-none {
		--border-width: 0;
	}

	.ion-centered-container {
		text-align: center;
		position: absolute;
		left: 0;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}

	.ion-item-round {
		border-radius: 1000px;
	}
</style>

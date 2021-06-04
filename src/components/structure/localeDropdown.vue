<template>
	<ion-item :lines="lines" v-if="!useButton">
		<ion-icon :icon="$ionicons.languageOutline" slot="start" class="ion-align-self-center"/>
		<ion-label v-if="!noLabel">{{ $t('components.localeDropdown.language') }}</ion-label>
		<ion-select :ok-text="$t('actions.ok')" :cancel-text="$t('actions.cancel')" interface="popover" :ionChange="$i18n.$loadLanguageAsync(selectedLocale)" v-model="selectedLocale">
			<ion-select-option v-for="locale in $i18n.availableLocales" :key="locale" :value="locale">{{ locale }}</ion-select-option>
		</ion-select>
	</ion-item>
	<ion-button
		v-if="useButton"
		@click="showPopover = true"
		:buttonType="buttonType"
		:color="color"
		:disabled="disabled"
		:expand="expand"
		:fill="fill"
		:mode="mode"
		:rel="rel"
		:shape="shape"
		:size="size"
		:strong="strong"
		:target="target"
	>
		<ion-icon :icon="$ionicons.languageOutline" slot="icon-only"/>
	</ion-button>
	<ion-popover v-if="useButton" :is-open="showPopover" @onDidDismiss="showPopover = false" style="width: fit-content">
		<ion-list>
			<ion-item v-for="locale in $i18n.availableLocales" :key="locale" :value="locale" @click="() => {$i18n.$loadLanguageAsync(locale); showPopover = false;}" button>{{ locale }}</ion-item>
		</ion-list>
	</ion-popover>
</template>
<script>
	export default {
		name: 'LocaleDropdown',
		props: [
			'lines',
			'noLabel',
			'useButton',
			'buttonType',
			'color',
			'disabled',
			'expand',
			'fill',
			'mode',
			'rel',
			'shape',
			'size',
			'strong',
			'target',
		],
		data() {
			return {
				selectedLocale: this.$i18n.locale,
				showPopover: false,
			};
		},
	};
</script>

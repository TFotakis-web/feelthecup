<template>
	<router-view v-slot="{ Component }">
		<transition name="route" mode="out-in">
			<component :is="Component"/>
		</transition>
	</router-view>
</template>
<script>
	export default {
		name: 'BaseLayout',
		components: {},
		props: {
			pageTitle: {
				type: String,
				default: '',
			},
		},
	};
</script>
<style>
	.route-enter-from {
		opacity: 0;
		transform: translateY(5px) scale(0.995);
		zoom: 0.5;
	}

	.route-enter-active {
		transition: all 200ms ease-out;
	}

	.route-leave-active {
		transition: all 200ms ease-in;
	}

	.route-leave-to {
		opacity: 0;
		transform: translateY(5px) scale(0.995);
	}
</style>

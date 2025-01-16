<script setup>

</script>

<template>
	<div>
		<div>
			<router-link to="/">Home</router-link>
      <router-link to="/Secret" v-if="false">Secret</router-link>
			<router-link to="/About">About</router-link>
		</div>

		<router-view v-slot="{ Component, route }">
			<transition name="fade" mode="out-in">
				<div :key="route.name">
					<component :is="Component"></component>
				</div>
			</transition>
		</router-view>
    
	</div>
</template>

<style>
	main {
		will-change: transform, opacity;
	}

	.content {
		margin: 0 auto;
		position: relative;
	}

	a {
		font-weight: bold;
		color: #7a5c3a;
		text-decoration: none;
		margin-right: 1em;
	}

	a:hover,
	a.router-link-exact-active {
		color: #d0af8e;
		border-bottom: 1px solid #d0af8e;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.6s ease-in-out;
	}
</style>

<script setup></script>

<template>
	<div class="content">
		<router-link to="/">Home</router-link>
		<router-link to="/About">About</router-link>

		<router-view v-slot="{ Component }">
			<transition >
				<component :is="Component"></component>
			</transition>
		</router-view>
	</div>
</template>

<style>
	.content {
		width: 40%;
		min-width: 500px;
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
	a.router-link-active {
		color: #d0af8e;
		border-bottom: 1px solid #d0af8e;
	}

</style>

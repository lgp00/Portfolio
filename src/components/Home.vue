<script setup>
	import { ref } from "vue";

	defineProps({
		msg: String,
	});

	const count = ref(0);
</script>

<template>
	<h1>Sometimes is good</h1>

	<h2>This backup page is under development</h2>
	<h4>Farewell</h4>
</template>

<style scoped>
	.read-the-docs {
		color: #888;
	}
</style>

<template>
	<h1 class="ShakyHand">👋</h1>
	<h1>Welcome <br />traveler</h1>

	<h2>This page is under development</h2>
	<div class="Sameline">
		<h1>🚧</h1>
		<h1 class="ShakyWorker1">👷</h1>
		<h1 class="ShakyWorker2">👷‍♂️</h1>
		<h1 class="ShakyWorker3">👷‍♀️</h1>
		<h1>🚧</h1>
	</div>
	<h4>Farewell</h4>

</template>

<style scoped>
	.Sameline {
		display: flex;
		justify-content: center;
	}
	.ShakyHand {
		animation: shakyhand 6.5s;
		animation-iteration-count: 1;
	}
	@keyframes shakyhand {
		0% {
			transform: translate(0px, 0px) rotate(0deg);
			opacity: 0;
		}
		10% {
			transform: translate(0px, 0) rotate(60deg);
		}
		20% {
			transform: translate(0, 0) rotate(0deg);
		}
		30% {
			transform: translate(0, 0) rotate(60deg);
		}
		40% {
			transform: scale(1.2);
		}
		100% {
			transform: translate(0px, 0px) rotate(0deg);
			visibility: hidden;
		}
	}
	.ShakyWorker1 {
		animation: shakyworker1 0.9s;
		animation-iteration-count: 4;
	}
	.ShakyWorker2 {
		animation: shakyworker2 1.1s;
		animation-iteration-count: 4;
	}
	.ShakyWorker3 {
		animation: shakyworker3 1s;
		animation-iteration-count: 4;
	}
	@keyframes shakyworker1 {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}
	@keyframes shakyworker2 {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}
	@keyframes shakyworker3 {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}
</style>

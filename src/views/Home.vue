<template>
	<div>
		<h1 class="ShakyHand" @click="handleClick">👋</h1>
		<h1>Welcome <br />traveler</h1>
		<h2>This website is under development</h2>
		<div class="Sameline">
			<h1>🚧</h1>
			<h1 class="ShakyWorker1">👷</h1>
			<h1 class="ShakyWorker2">👷‍♂️</h1>
			<h1 class="ShakyWorker3">👷‍♀️</h1>
			<h1>🚧</h1>
		</div>
		<h4 class="GoodByeList"></h4>

		<!-- Modern Minimalist Modal -->
		<div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
			<div class="modal-content" @click.stop>
				<h2>🎉 Secret Discovered! 🎉</h2>
				<p>You clicked three times to unlock this secret!</p>
				<button class="close-button" @click="closeModal">Close</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				clickCount: 0,
				isModalVisible: false, // Controls modal visibility
			};
		},
		methods: {
			handleClick() {
				this.clickCount++;
				if (this.clickCount === 3) {
					this.isModalVisible = true; // Show the modal
					this.$root.SecretIsVisible = true;

					// Save to localStorage to persist the state after page reload
					localStorage.setItem("SecretIsVisible", "true");
				}
			},
			closeModal() {
				this.isModalVisible = false; // Hide the modal
			},
		},
	};
</script>

<style scoped>
	/* Modal Overlay (background dim) */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	/* Modal Content (popup box) */
	.modal-content {
		background: #fff;
		padding: 20px;
		border-radius: 12px;
		text-align: center;
		max-width: 400px;
		width: 90%;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
		animation: fadeIn 0.3s ease-out;
	}

	.modal-content h2 {
		font-size: 24px;
		color: #333;
		margin-bottom: 10px;
	}

	.modal-content p {
		font-size: 16px;
		color: #666;
		margin-bottom: 20px;
	}

	/* Close Button */
	.close-button {
		background-color: #7a5c3a;
		color: #fff;
		border: none;
		padding: 10px 20px;
		border-radius: 8px;
		cursor: pointer;
		font-size: 14px;
		transition: background-color 0.3s;
	}

	.close-button:hover {
		background-color: #d0af8e;
	}

	/* Fade-in Animation */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(0.9);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
	.GoodByeList::after {
		display: block;
		content: "";
		animation: 30s ease-in-out 1s infinite alternate change-text;
	}

	@keyframes change-text {
		0% {
			content: "Farewell";
			transform: translateX(2%);
			opacity: 1;
		}
		10% {
			content: "Farewell";
			transform: translateX(-2%);
			opacity: 0.9;
		}
		20% {
			content: "So long";
			transform: translateX(2%);
			opacity: 1;
		}
		30% {
			content: "So long";
			transform: translateX(-2%);
			opacity: 0.9;
		}
		40% {
			content: "Take care";
			transform: translateX(2%);
			opacity: 1;
		}
		50% {
			content: "Take care";
			transform: translateX(-2%);
			opacity: 0.9;
		}
		60% {
			content: "See you around";
			transform: translateX(2%);
			opacity: 1;
		}
		70% {
			content: "See you around";
			transform: translateX(-2%);
			opacity: 0.9;
		}
		80% {
			content: "Catch you later";
			transform: translateX(2%);
			opacity: 1;
		}
		90% {
			content: "Catch you later";
			transform: translateX(-2%);
			opacity: 0.9;
		}
		100% {
			content: "Farewell";
			transform: translateX(2%);
			opacity: 1;
		}
	}

	.Sameline {
		display: flex;
		justify-content: center;
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
	/* SHAKY HAND SPECIAL */
	.ShakyHand {
		animation: shakyhand 6.5s;
		align-content: center;
		/* position: absolute ; */
		/* animation-iteration-count: 1; */
	}
	.ShakyHand:hover {
		cursor: grab;
	}
	.ShakyHand:active {
		animation: HighFive 3s;
		transform: scale(2);
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
</style>

<template>
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
</template>

<script>
export default {
  methods: {
    handleClick() {
      // Get the App instance to access the parent data property
      const app = this.$root;
      
      // Increment the click count
      this.clickCount = (this.clickCount || 0) + 1;
      
      // When clicked 3 times, set the SecretIsVisible to true
      if (this.clickCount === 3) {
        app.SecretIsVisible = true;
      }
    },
  },
};
</script>

<style scoped>
	.GoodByeList::after {
		display: block;
		content: "";
		animation: 30s linear 1s infinite alternate change-text;
	}
	@keyframes change-text {
		0% {
			content: "Farewell";
			transform: translatex(5%);
		}
		10% {
			content: "Farewell";
			transform: translatex(-5%);
		}
		20% {
			content: "So long";
			transform: translatex(5%);
		}
		30% {
			content: "So long";
			transform: translatex(-5%);
		}
		40% {
			content: "Take care";
			transform: translatex(5%);
		}
		50% {
			content: "Take care";
			transform: translatex(-5%);
		}
		60% {
			content: "See you around";
			transform: translatex(5%);
		}
		70% {
			content: "See you around";
			transform: translatex(-5%);
		}
		80% {
			content: "Catch you later";
			transform: translatex(5%);
		}
		90% {
			content: "Catch you later";
			transform: translatex(-5%);
		}
		100% {
			content: "Farewell";
			transform: translatex(5%);
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

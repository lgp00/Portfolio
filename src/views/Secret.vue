<template>
  <div>
    <div v-if="isLoading" class="loading-screen">
      <div class="emoji-container">
        <span class="emoji">🤫</span> 
      </div>
      <div class="loading-text">Loading...</div>
    </div>

    <!-- Render special.vue after loading is finished -->
    <special v-if="!isLoading" />
  </div>
</template>


<script>
// Import the special component
import Special from '../components/Special.vue';

export default {
  name: "LoadingScreen",
  components: {
    Special, // Register the component
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Hide the loading screen after 4 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 4000); // 4 seconds
  },
};
</script>

<style scoped>
	.loading-screen {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		animation: fadeOut 1s ease-in-out forwards;
		animation-delay: 4s; /* Fade-out after 4 seconds */
	}

	/* Emoji Container */
	.emoji-container {
		font-size: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: smoothBounce 1.5s ease-in-out infinite;
	}

	/* Bounce effect for the emoji */
	@keyframes smoothBounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-18px);
		}
	}

	/* Loading Text */
	.loading-text {
		color: #7a5c3a; /* Apple-esque neutral green */
		font-size: 20px;
		font-weight: 500;
		margin-top: 16px;
		letter-spacing: 0.5px;
		opacity: 0.8;
		animation: fadeText 2s ease-out infinite;
	}

	/* Subtle fade text effect */
	@keyframes fadeText {
		0%,
		100% {
			opacity: 0.8;
			transform: translateY(0);
		}
		50% {
			opacity: 0.4;
			transform: translateY(5px);
		}
	}

	/* Fade-out effect for the screen */
	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			visibility: hidden;
		}
	}
</style>

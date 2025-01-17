<template>
	<div>
		<div>
			<router-link to="/">Home</router-link>
			<router-link to="/Secret" v-if="SecretIsVisible">Secret</router-link>
			<router-link to="/About">About</router-link>
		</div>

		<router-view v-slot="{ Component, route }">
			<transition name="fade" mode="out-in">
				<div :key="route.name">
					<component :is="Component"></component>
				</div>
			</transition>
		</router-view>

		<!-- Unauthorized Modal -->
		<div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
			<div class="modal-content" @click.stop>
				<h2>🚫 I'm sorry. Time's up! 🚫</h2>
				<p>You do not have access anymore to this page.</p>
				<button class="close-button" @click="closeModal">Close</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				SecretIsVisible: false,
				isModalVisible: false, // Controls unauthorized access modal visibility
			};
		},
		methods: {
			closeModal() {
				this.isModalVisible = false;
			},
		},
		created() {
			// Check if the secret is visible in localStorage
			const secretStatus = localStorage.getItem("SecretIsVisible");
			if (secretStatus === "true") {
				this.SecretIsVisible = false;
			}
		},
		watch: {
			$route(to) {
				// Check if we're navigating to the Secret page
				if (to.path === "/Secret" && !this.SecretIsVisible) {
					this.isModalVisible = true; // Show unauthorized modal
					this.$router.push("/"); // Redirect to the Home page
				}
			},
		},
	};
</script>

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background-color: white;
		padding: 2em;
		border-radius: 8px;
		text-align: center;
	}

	.close-button {
		margin-top: 1em;
		padding: 0.5em 1em;
		background-color: #7a5c3a;
		border: none;
		cursor: pointer;
	}
	.close-button:hover {
		background-color: #d0af8e;
	}
	::selection {
		color: none;
		background: none;
	}
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

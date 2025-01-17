<template>
	<div class="landing-page">
		<div class="content">
			<div class="text-box">
				<h1 :class="animationClass">{{ message }}</h1>
			</div>
			<button v-if="showButton" @click="continueAction" class="continue-button">
				{{ buttonText }}
			</button>
			<button
				v-if="showGiftButton"
				@click="showLanguageSelector"
				class="gift-button"
				role="img"
				aria-label="gift">
				🎁
			</button>

			<!-- Language Selector Section -->
			<div v-if="showLanguageSelectorBox" class="language-selector-box">
				<div class="selector-header">
					<h2>Select Your Language</h2>
				</div>
				<div class="selector-body">
					<select v-model="selectedLanguage" @change="updateMessage">
						<option value="" disabled selected>Select a language</option>
						<option value="en">English</option>
						<option value="ro">Romanian</option>
						<option value="it">Italian</option>
					</select>
				</div>
				<div class="translated-message" v-if="translatedMessage">
					<p>{{ translatedMessage }}</p>
				</div>

				<!-- New Box with Link -->
				<div v-if="showLanguageMessage" class="language-message-box">
					<a :href="specialMessageLink" target="_blank" rel="noopener noreferrer">
						{{ specialMessage }}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: "",
				animationClass: "",
				showButton: false,
				showGiftButton: false,
				showLanguageSelectorBox: false,
				selectedLanguage: "",
				translatedMessage: "",
				showLanguageMessage: false, // Controls the visibility of the new box
				specialMessage: "", // The message to display in the new box
				specialMessageLink: "", // The link associated with the special message
				buttonText: "Well...",
				translations: {
					en: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
					ro: "Fiindcă atât de mult a iubit Dumnezeu lumea, că a dat pe singurul Lui Fiu, pentru ca oricine crede în El să nu piară, ci să aibă viața veșnică.",
					it: "Dio infatti ha tanto amato il mondo da dare il suo Figlio unigenito, perché chiunque crede in lui non muoia, ma abbia la vita eterna.",
				},
				links: {
					en: "https://www.bible.com/en/bible/111/JHN.3.NIV", // English link
					ro: "https://www.bible.com/ro/bible/191/JHN.3.VDC", // Romanian link
					it: "https://www.bible.com/it/bible/1197/JHN.3.ICL00P", // Italian link
				},
			};
		},
		mounted() {
			let i = 0;
			const text1 = "Hi Human";
			this.animationClass = "typing";

			const typeWriter = () => {
				if (i < text1.length) {
					this.message += text1.charAt(i);
					i++;
					setTimeout(typeWriter, 150);
				}
			};

			setTimeout(typeWriter, 250);

			setTimeout(() => {
				this.animationClass = "fade-out";
			}, 1800);

			setTimeout(() => {
				this.message = "";
				this.animationClass = "typing";
				let j = 0;
				const text2 = "I was waiting for you";

				const typeWriter2 = () => {
					if (j < text2.length) {
						this.message += text2.charAt(j);
						j++;
						setTimeout(typeWriter2, 150);
					}
				};
				typeWriter2();
			}, 2500);

			setTimeout(() => {
				this.showButton = true;
			}, 6000);
		},
		methods: {
			continueAction() {
				this.animationClass = "fade-out";
				this.showButton = false;

				setTimeout(() => {
					this.message = "";
					this.animationClass = "typing";
					let k = 0;
					const text3 = "I have something for you";

					const typeWriter3 = () => {
						if (k < text3.length) {
							this.message += text3.charAt(k);
							k++;
							setTimeout(typeWriter3, 120);
						}
					};
					typeWriter3();

					setTimeout(() => {
						this.showGiftButton = true;
					}, 4000);
				}, 2000);
			},
			showLanguageSelector() {
				// Fade out the message first
				this.animationClass = "fade-out";
				setTimeout(() => {
					// Clear the message and reset the translated text
					this.message = "";
					this.translatedMessage = ""; // Clear the translated text
					this.showGiftButton = false;
					this.showLanguageSelectorBox = true; // Show the language selector box
				}, 1000); // Adjust delay to match fade-out duration
			},
			updateMessage() {
				// Update the translated message based on the selected language
				this.translatedMessage = this.translations[this.selectedLanguage];

				// Update the special message box and its link
				if (this.selectedLanguage === "ro") {
					this.specialMessage = "Isus te Iubeste!";
				} else if (this.selectedLanguage === "it") {
					this.specialMessage = "Gesù ti Ama!";
				} else {
					this.specialMessage = "Jesus Loves You!";
				}
				this.specialMessageLink = this.links[this.selectedLanguage];

				this.showLanguageMessage = true; // Show the special message box
			},
		},
	};
</script>

<style scoped>
	/* Global Reset */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
		font-family: "Poppins", sans-serif;
		background: linear-gradient(135deg, #ff9a9e, #fad0c4);
	}

	.landing-page {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		padding: 0;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		height: 100%;
		text-align: center;
		padding-top: 15%;
	}

	.text-box {
		padding: 10px 20px;
		max-width: 80%;
	}

	h1 {
		font-size: 2.5em;
		font-weight: 600;
		opacity: 0;
		transition: opacity 1s ease, transform 1.5s ease;
		transform: scale(1);
		margin-bottom: 10px;
	}

	.typing {
		opacity: 1;
	}

	.fade-out {
		opacity: 0;
		transform: scale(1);
	}

	.continue-button {
		font-size: 1.8em;
		padding: 10px 20px;
		background-color: #fff;
		color: #d0af8e;
		border: none;
		border-radius: 25px;
		cursor: pointer;
		transition: transform 0.3s ease, background-color 0.3s ease;
		margin-top: 20px;
	}

	.continue-button:hover {
		transform: scale(1.1);
		background-color: #7a5c3a;
	}

	.gift-button {
		font-size: 3em;
		padding: 10px;
		background-color: transparent;
		cursor: pointer;
		transition: transform 0.3s ease;
		margin-top: 20px;
	}

	.gift-button:hover {
		transform: scale(1.2);
	}

	.language-selector-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: -50px;
		background: #ffffff;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		padding: 20px;
		width: 90%;
		max-width: 400px;
		text-align: center;
		transition: transform 0.3s ease, opacity 0.3s ease;
		transform: translateY(20px);
		opacity: 0;
		animation: slide-in 0.5s ease forwards;
	}

	.selector-header h2 {
		font-size: 1.8rem;
		color: #333333;
		margin-bottom: 15px;
		font-weight: 600;
	}

	.selector-body select {
		width: 100%;
		max-width: 300px;
		padding: 12px 15px;
		font-size: 1rem;
		font-weight: 500;
		border: 1px solid #dddddd;
		border-radius: px;
		background: #f9f9f9;
		color: #333333;
		cursor: pointer;
		appearance: none;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
		transition: background-color 0.3s ease, box-shadow 0.3s ease;
	}

	.selector-body select:hover {
		background-color: #ffffff;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.selector-body select:focus {
		outline: none;
		border-color: #7a5c3a;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
	}

	.translated-message {
		margin-top: 20px;
		font-size: 1.25rem;
		font-weight: 500;
		line-height: 1.6;
		color: #555555;
		text-align: center;
		opacity: 0;
		animation: fade-in 0.8s ease forwards;
	}

	/* Animations */
	@keyframes slide-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.language-message-box {
		margin-top: 15px;
		background: #f9f9f9;
		padding: 15px 20px;
		border-radius: 10px;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
		text-align: center;
		font-size: 1.25rem;
		font-weight: 600;
		color: #4a4a4a;
		animation: fade-in 0.8s ease forwards;
	}

	.language-message-box a {
		color: #7a5c3a;
		text-decoration: none;
		border-bottom: 2px solid transparent;
		transition: all 0.3s ease;
	}

	.language-message-box a:hover {
		color: #d08863;
		border-bottom: 2px solid #d08863;
	}

	/* Fade-in animation for the language message box */
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>

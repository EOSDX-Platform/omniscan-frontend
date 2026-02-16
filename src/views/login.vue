<script setup>
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { UserRound, Eye, EyeClosed } from 'lucide-vue-next'
import deviceImg from '@/assets/device.png'

const router = useRouter()

const showPassword = ref(false)

const form = reactive({
	login: '',
	password: ''
})

const errors = reactive({
	login: '',
	password: ''
})

/**
 *
 */
const handleSubmit = () => {

	errors.login = ''
	errors.password = ''

	if (!form.login.trim()) {
		errors.login = 'Required field'
	}

	if (form.password.length < 6) {
		// eslint-disable-next-line sonarjs/no-hardcoded-passwords
		errors.password = 'Min 6-char password'
	}

	if (!errors.login && !errors.password) {
		//  API
		router.push('/home')
	}
}

</script>

<template>
	<section class="login-screen">
		<main>
			<div class="column">
				<div class="decor">
					<img :src="deviceImg" alt="device">
				</div>
				<div class="icon icon-login">
					<UserRound :size="48"/>
				</div>
				<h1>Lab Technician</h1>
				<form @submit.prevent="handleSubmit" class="form">
					<div class="form-element">
						<sp-textfield
							id="login"
							:value="form.login"
							@input="form.login = $event.target.value; errors.login = ''"
							:invalid="errors.login ? true : undefined"
							placeholder="Login"
						></sp-textfield>
						<sp-help-text v-if="errors.login" variant="negative">{{ errors.login }}</sp-help-text>
					</div>
					<div class="form-element">
						<div class="password-wrapper">
							<sp-textfield
								id="password"
								:type="showPassword ? 'text' : 'password'"
								:value="form.password"
								@input="form.password = $event.target.value"
								:invalid="errors.password ? true : undefined"
								placeholder="Password"
								class="password-input">
							</sp-textfield>
							<sp-action-button
								quiet
								class="eye-button"
								@click="showPassword = !showPassword">
								<sp-icon-visibility v-if="!showPassword" slot="icon">
									<Eye :size="16"/>
								</sp-icon-visibility>
								<sp-icon-visibility-off v-else slot="icon">
									<EyeClosed :size="16"/>
								</sp-icon-visibility-off>
							</sp-action-button>
						</div>
						<sp-help-text v-if="errors.password" variant="negative">{{ errors.password }}</sp-help-text>
					</div>
					<div class="form-group-element">
						<sp-button type="submit" variant="accent">Sign In</sp-button>
					</div>
				</form>
			</div>
		</main>
		<footer></footer>
	</section>
</template>

<style scoped>
	.login-screen {
		footer::before {
			content: '';
			background-image: url('@/assets/eoslogoorange.webp');
			z-index: 3;
			height: 68px;
			width: 144px;
			background-size: cover;
			margin-left: auto;
		}
	}
	.icon-login {
		padding: var(--space-inside-s);
		background-color: var(--color-surface);
		border-radius: 50%;
		margin: 0 auto var(--space-inside-m) auto;
	}
	h1 {
		text-align: center;
		margin-bottom: var(--space-unrelated);
	}

	main {
		align-items: center;
		justify-content: center;
		.column {
			position: relative;
			.decor {
				position: absolute;
				width: 420px;
				opacity: .8;
				left: -150%;
				top: -50%;
			}
		}
	}

	sp-button {
		width: 100%;
	}
	.password-wrapper {
		position: relative;
		display: flex;
		align-items: center;
	}

	.eye-button {
		position: absolute;
		right: 0;
		z-index: 1;
	}
	[slot="icon"] {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
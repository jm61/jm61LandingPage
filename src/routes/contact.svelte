<script>
	import { init, sendForm } from 'emailjs-com';
	init('uMXASuONdO5-rWg3X');
	import { browser } from '$app/env';

	function sendMessage() {
		let message = document.querySelector('.contactForm');
		let btn = document.querySelector('button');
		btn.disabled = true;
		btn.innerText = 'Message en transit...';
		sendForm('default_service', 'template_srh55ud', message)
			.then(() => {
				btn.style.backgroundColor = '#1D2030';
				btn.style.color = 'white';
				btn.innerText = 'Message Envoyé!';
				message.reset();
				btn.innerText = 'Envoyer';
			})
			.catch(() => {
				window.alert('Il y a une erreur, essayez de nouveau');
				btn.disabled = false;
				btn.innerText = 'Send';
				message.reset();
			});
	}
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<h1 class="text-center m-12 text-2xl">CONTACT</h1>

<div>
	<form class="contactForm flex flex-col" on:submit|preventDefault={sendMessage}>
		<div class="form-control">
			<label class="label" for="text">
				<span class="label-text">Votre nom</span>
			</label>
			<input
				type="text"
				placeholder="votre nom"
				class="input input-bordered"
				name="user_name"
				required
			/>
		</div>

		<div class="form-control">
			<label class="label" for="email">
				<span class="label-text">Votre Email</span>
			</label>
			<input
				type="text"
				placeholder="email@mail.com"
				class="input input-bordered"
				name="user_email"
				required
			/>
		</div>

		<div class="form-control">
			<label class="label" for="textarea">
				<span class="label-text">Votre Message</span>
			</label>
			<textarea
				name="message"
				class="textarea textarea-bordered h-24"
				placeholder="votre message"
				required
			/>
		</div>

		<div class="form-control">
			<label for="button" class="input-group mb-6" />
			<button type="submit" class="btn btn-outline btn-primary">Envoyer</button>
		</div>
	</form>
</div>

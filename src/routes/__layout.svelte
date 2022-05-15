<script>
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { themeChange } from 'theme-change'
	import {onMount} from 'svelte'

	onMount(async () => {
		themeChange(false)
	})
</script>

<Navbar />
<main class="container max-w-3xl mx-auto px-4 mb-20">
	<slot />
</main>
<Footer />

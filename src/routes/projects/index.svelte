<script context="module">
	import Card from '$lib/components/Card.svelte';
	import { client } from '$lib/graphql-client';
	import { projectsQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { projects } = await client.request(projectsQuery);

		return {
			props: {
				projects
			}
		};
	};
</script>

<script>
	export let projects;
	import { blur } from 'svelte/transition';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<h1 class="font-bold mb-20 text-center text-5xl">Recent Projects by Me</h1>

<div
	transition:blur={{ delay: 250, duration: 500 }}
	class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52"
>
	{#each projects as { name, slug, description, image }, index}
		<Card {name} {description} url={image[0].url} {index} {slug} />
	{/each}
</div>

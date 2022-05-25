<script>
	const cssClass = 'hover:border-b-2 hover:border-primary hover:text-primary';
</script>

<svelte:head>
	<title>Comment ce site fonctionne</title>
</svelte:head>
<h1 class="text-3xl">Comment fonctionne ce site web...</h1>
<br />
<p class="text-lg">
	il est déployé avec <a href="https://vercel.com" class={cssClass} target="_blank">Vercel</a> qui
	automatise les déploiements à partir d'un repo
	<a href="https://github.com" class={cssClass} target="_blank">Github</a>. Les données des projets
	et le blog sont hébergés sur
	<a href="https://graphcms.com/" class={cssClass} target="_blank">graphCms</a>
	qui est le CMS de
	<a href="https://graphql.org/" class={cssClass} target="_blank">GraphQL.</a> L'application front
	fonctione avec
	<a href="https://kit.svelte.dev/" class={cssClass} target="_blank">SvelteKit</a>.
</p>

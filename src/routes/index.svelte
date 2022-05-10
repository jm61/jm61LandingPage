<script context="module">
    import Card from  '$lib/components/Card.svelte'
    import {gql} from 'graphql-request'
    import {client} from '$lib/graphql-client'

    export const load = async () => {
        const query = gql`
        query GetProjects {
            projects {
            name
            slug
            description
            demo
            sourceCode
            image {
            url
            }
        }
      }
    `
    const { projects } = await client.request(query)
    return {
      status: 200,
      props: {projects}
    }
}
</script>
<script>
    export let projects
</script>

<h1>Recent Projects by Me</h1>

<div>
  {#each projects as { name, slug, description, image }}
    <Card {name} {slug} {description} url={image[0].url}/>
  {/each}
</div>

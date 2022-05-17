export const handle = async ({event, resolve}) => {
    let path = event.url.pathname
    if(path === '/t') {
        return new Response('No network...')
    }
    const res = await resolve(event)
    return res
}
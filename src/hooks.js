export const handle = async ({event, resolve}) => {
    console.log(event.url.pathname)
    const res = await resolve(event)
    return res
}
export const handle = async ({event, resolve}) => {
    console.log(event)
    const res = await resolve(event)
    return res
}
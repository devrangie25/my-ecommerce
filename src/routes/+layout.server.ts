export const load = (async ({ locals }: any) => {

    if (locals.user) {
        return {
            user: JSON.parse(JSON.stringify(locals.user))
        }
    }
})
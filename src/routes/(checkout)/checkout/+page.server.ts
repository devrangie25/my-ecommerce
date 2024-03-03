import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    login: async ({ locals, request }: any) => {
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])
        try {
            await locals.pb.collection('customers').authWithPassword(data.email, data.password)
        } catch (error: any) {
            console.log('Error Occured in Login',  JSON.parse(JSON.stringify(error)))
            return {
                error: true,
                message: JSON.parse(JSON.stringify(error))
            }
        }
        throw redirect(303, '/')
    },

    payment: async({ locals, request }: any) => {
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])
        console.log('PAYMENT DATA', data)
    }
}

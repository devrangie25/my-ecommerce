import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    register: async ({ locals, request }: any) => {
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])
        try {
            // Create new User
            await locals.pb.collection('customers').create(data)
        } catch (error: any) {
            console.log('Error Occured in Register', JSON.parse(JSON.stringify(error)))
            return {
                error: true,
                message: JSON.parse(JSON.stringify(error))
            }
        }

        // go to login page if everything goes smooth or without an error encountered
        throw redirect(303, '/login')
    }
}
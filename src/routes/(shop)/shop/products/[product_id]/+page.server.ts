import { error } from '@sveltejs/kit';
import { APP_ENVIRONMENT } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }: any) {
    
    const fetchSingleProductById = async () => {
        try {
            const product = await locals.pb.collection('products').getOne(params.product_id);
            return product
        } catch (err) {
            console.log('ERROR', err)
            throw error(404);
        }
    }

    return {
        pb_product_by_id: await fetchSingleProductById(),
        APP_ENVIRONMENT
    };
}
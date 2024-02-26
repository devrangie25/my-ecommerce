import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }: any) => {

    const fetchAllProducts = async () => {
        try {
            const products = await locals.pb.collection('products').getFullList({
                sort: 'created',
            });
            return products
        } catch (err) {
            console.log('ERROR', err)
            throw error(404);
        }
    }
    return {
        pb_products: await fetchAllProducts()
    };

}) satisfies PageServerLoad;
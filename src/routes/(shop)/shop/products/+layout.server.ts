import type { LayoutServerLoad } from './$types';
import { APP_ENVIRONMENT } from '$env/static/private'
import { error } from '@sveltejs/kit';

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
        APP_ENVIRONMENT,
        pb_products: await fetchAllProducts()
    };

}) satisfies LayoutServerLoad;

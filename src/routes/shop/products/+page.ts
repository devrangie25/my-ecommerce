import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ fetch }) => {

    const fetchAllProducts = async () => {
        try {
            const products = await fetch('https://fakestoreapi.com/products')
            return await products.json()
        } catch (err) {
            console.log('ERROR', err)
            throw error(404);
        }
    }
    return {
        products: await fetchAllProducts()
    };
}) satisfies PageLoad;
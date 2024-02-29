import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ fetch }) => {

    const fetchCountries = async() => {
        try {
            const countries = await fetch('https://restcountries.com/v3.1/all?fields=name')
            return countries.json()
        } catch (err) {
            console.log('err', err)
            throw error(404);
        }
    }
    return {
        countries: await fetchCountries()
    };
}) satisfies PageLoad;

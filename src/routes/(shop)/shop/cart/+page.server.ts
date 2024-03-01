import type { PageServerLoad } from './$types';
import { APP_ENVIRONMENT } from '$env/static/private'

export const load = (async () => {
    return {
        APP_ENVIRONMENT
    };
}) satisfies PageServerLoad;
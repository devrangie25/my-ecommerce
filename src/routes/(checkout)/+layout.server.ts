import type { LayoutServerLoad } from './$types';
import { APP_ENVIRONMENT } from '$env/static/private'

export const load = (async () => {
    return { APP_ENVIRONMENT };
}) satisfies LayoutServerLoad;
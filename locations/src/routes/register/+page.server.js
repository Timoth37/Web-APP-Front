import { redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, url }) {
    const error = url.searchParams.get('error') === 'true';
    return {error}
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const body = await api.post('users/register', {
            username: data.get('username'),
            password: data.get('password')
        });
        if (body.status===400) {
            throw redirect(307, '/register?error=true');
        }
        throw redirect(307, '/login');
    }
};
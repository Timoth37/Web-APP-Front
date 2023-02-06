import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, url }) {
    if(cookies.get('jwt')) {
        throw redirect(307,'/locations')
    }
    const error = url.searchParams.get('error') === 'true';
    return {error}
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const body = await api.post('users/login', {
                username: data.get('username'),
                password: data.get('password')
        });
        if (body.status===401) {
            throw redirect(307, '/login?error=true');
        }
        const value = body.jwt;
        cookies.set('jwt', value, {maxAge: 3600});
        throw redirect(307, '/locations');
    }
};
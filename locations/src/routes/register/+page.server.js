import { redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

//Check the url to return the presence of an error or not
/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const error = url.searchParams.get('error') === 'true';
    return {error}
}

//Try to register with credentials, redirect to register with an error if username exists
//Redirect to login page to log in if registration succeeded
/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request }) => {
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
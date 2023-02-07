import {redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

//If the cookie exist, throw to location page
//Check if a message had to be displayed in the page
/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, url }) {
    if(cookies.get('jwt')) {
        throw redirect(307,'/locations')
    }
    const message = url.searchParams.get('message');
    return {message}
}


//Try to log in with credentials, redirect to log in with an error message if not succeed
//Store the token in cookies and redirect to locations if correct
/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const body = await api.post('users/login', {
                username: data.get('username'),
                password: data.get('password')
        });
        if (body.status===401) {
            throw redirect(307, '/login?message=wrongID');
        }
        const value = body.jwt;
        cookies.set('jwt', value, {maxAge: 3600});
        throw redirect(307, '/locations');
    }
};
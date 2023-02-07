const base = 'http://localhost:3000';

//Fetches the data from the API with the right parameters, return the data received from the API
async function send({ method, path, data, token }) {
    const opts = { method, headers: {} };
    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }
    if (token) {
        opts.headers['Authorization'] = `Bearer ${token}`;
    }
    const res = await fetch(`${base}/${path}`, opts);
    if (res.ok || res.status === 422) {
        return  res.json()
    }else{
        return  res;
    }
}

//Call the send function with the GET parameters
export function get(path, token) {
    return send({ method: 'GET', path, token });
}
//Call the send function with the DELETE parameters
export function del(path, token) {
    return send({ method: 'DELETE', path, token });
}
//Call the send function with the POST parameters
export function post(path, data, token) {
    return send({ method: 'POST', path, data, token });
}
//Call the send function with the PATCH parameters
export function patch(path, data, token) {
    return send({ method: 'PATCH', path, data, token });
}
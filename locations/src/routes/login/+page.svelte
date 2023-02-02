<script>
    import {redirect} from "@sveltejs/kit";
    let username = '';
    let password = '';

    async function handleSubmit() {
        const tokenResponse = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const token = await tokenResponse.json();
        if (token.error) {
            throw redirect(303,'/login')
        } else {
            sessionStorage.setItem("token", token.token);
        }
        const userResponse = await fetch('http://localhost:3000/users/me', {
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${sessionStorage.getItem('token')}`},
        });
        const user = await userResponse.json();
        sessionStorage.setItem("role", user.role)
        window.location.href = '/locations';
    }
</script>

<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <link href="/loginstyle.css" type="text/css" rel="stylesheet"/>
</head>
<body>
    <div class="form">
        <div class="header">
            <h2>Login</h2>
        </div>

        <form class="login-form" on:submit|preventDefault={handleSubmit}>
            <input type="text" name="username" placeholder="username" bind:value={username}/>
            <input type="password" name="password" placeholder="password" bind:value={password}/>
            <button type="submit">Login</button>
        </form>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
    </div>
</body>
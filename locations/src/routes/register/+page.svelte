<script>
    import {redirect} from "@sveltejs/kit";
    let username = '';
    let password = '';

    async function handleSubmit() {
        const response = await fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response;
        if (data.error) {
            throw redirect(303,'/register')
        } else {
            window.location.href = '/login';
        }
    }
</script>

<head>
    <meta charset="UTF-8">
    <title>Register Page</title>
    <link href="/registerstyle.css" type="text/css" rel="stylesheet"/>
</head>
<body>
    <div class="form">
        <div class="header">
            <h2>Register</h2>
        </div>
        <form class="login-form" on:submit|preventDefault={handleSubmit}>
            <input type="text" name="username" placeholder="username" bind:value={username}/>
            <input type="password" name="password" placeholder="password" bind:value={password}/>
            <button type="submit">Register</button>
        </form>
        <p class="message">Already Registered ? <a href="login">Login</a></p>
    </div>
</body>
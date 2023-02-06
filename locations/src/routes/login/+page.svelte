<script>
    import { enhance } from '$app/forms';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <link href="/authstyle.css" type="text/css" rel="stylesheet"/>
</head>
<body>
    {#if data.error==='mustLogin'}
        <div class="mustLogin">
            <p>To access locations, please login !</p>
        </div>
    {/if}
    <div class="form">
        <div class="header">
            <h2>Login</h2>
        </div>
        {#if data.error==='wrongID'}
            <p class="error">Wrong username or/and password.<br/>Please register if you haven't done yet !</p>
        {/if}
        <form class="login-form" use:enhance method="POST">
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">Login</button>
        </form>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
    </div>
</body>
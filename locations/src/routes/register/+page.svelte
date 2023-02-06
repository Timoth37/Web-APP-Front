<script>
   import {enhance} from "$app/forms";
   /** @type {import('./$types').PageData} */
   export let data;
</script>

<head>
    <meta charset="UTF-8">
    <title>Register Page</title>
    <link href="/authstyle.css" type="text/css" rel="stylesheet"/>
</head>
<body>
    <div class="form">
        <div class="header">
            <h2>Register</h2>
        </div>
        {#if data.error}
            <p class="error">This username may be taken.<br/>Please register with another one!</p>
        {/if}
        <form class="login-form" use:enhance method="POST">
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">Register</button>
        </form>
        <p class="message">Already Registered ? <a href="login">Login</a></p>
    </div>
</body>
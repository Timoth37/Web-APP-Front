<script>
   import {enhance} from "$app/forms";
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
        <form class="login-form" use:enhance method="POST">
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">Register</button>
        </form>
        <p class="message">Already Registered ? <a href="login">Login</a></p>
    </div>
</body>
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
</head>
<body>
    <div class="form">
        <div class="header">
            <h2>Login</h2>
        </div>

        <form class="login-form" action="j_security_check" method="post">
            <input type="text" name="j_username" placeholder="username"/>
            <input type="password" name="j_password" placeholder="password"/>
            <button type="submit">login</button>
        </form>
        <p class="message">Not registered? <a href="register">Create an account</a></p>
    </div>
</body>


<style>
    body{
        background: #2F4952;
    }

    .header{
        text-align: center;
        align-items: center;
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        color: #000000;
        font-weight: bolder;
        font-size: 40px;
    }

    .form {
        margin: 0 auto 0 auto;
        border-radius: 5px;
        padding: 1px 45px 45px 45px;
        background: #EAEBEC;
        max-width: 360px;
        text-align: center;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3), 0 5px 5px 0 rgba(0, 0, 0, 0.3);
    }
    .form input {
        font-family: "Roboto", sans-serif;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
    }


    .form button {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        background: #444444;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        cursor: pointer;
    }
    .form button:hover,.form button:active,.form button:focus {
        background: #111111;
    }
    .form .message {
        margin: 15px 0 0;
        color: #b3b3b3;
        font-size: 15px;
    }
    .form .message a {
        color: #444444;
        text-decoration: none;
    }

    .form .message a:hover {
        color: #111111;
    }

</style>
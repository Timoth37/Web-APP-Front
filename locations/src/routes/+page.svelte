<script>
    import CardLocations from "../components/CardLocations.svelte";
</script>

<body>
    <div class="auth">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>

    <div class="card-emplacement">
        <CardLocations></CardLocations>
    </div>

</body>

<style>
    body{
        background: #2F4952;
    }

    .auth{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 20px;
    }

    a{
        text-decoration: none;
        margin: 10px;
        color: #FFFFFF;
    }

    a:hover{
        color: #999999;
    }
</style>

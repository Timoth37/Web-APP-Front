<script>
</script>

<body>
    <h1 class="up">Front End Exercise with SvelteKit</h1>
    <nav class="menu">
        <a href="/locations">Play with locations</a>
    </nav>
    <h1 class="down">Web Application Course at ESILV</h1>
</body>

<style>
    body{
        background: #2F4952;
        vertical-align: center;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    h1{
        line-height: 40px;
        margin: auto;
        font-size: 20px;
        color: #999999;
    }
    .up{
        margin-top: 20vh;
    }

    nav{
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 40px;
        font-weight: bold;
        background: black;
        width: auto;
        margin: 5vh auto;
        border-radius: 10px;
    }

    nav a{
        line-height: 20vh;
        padding: 0 5vh;
        text-decoration: none;
        color: #FFFFFF;
    }

    nav a:hover{
        color: #999999;
    }


</style>

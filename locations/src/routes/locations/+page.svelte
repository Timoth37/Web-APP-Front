<script>
    import {enhance} from "$app/forms";
    import Location from "./Location.svelte";
    import CreateForm from "./CreateForm.svelte";
    /** @type {import('./$types').PageData} */
    export let data;

    //Make the add Form displayed in the window if the add button is clicked
    function onAddFormActive() {
        data.addFormIsActive = !data.addFormIsActive;
    }
</script>


<body>
    <div class="menu">
        <form use:enhance method="POST" action="?/logout">
            <button type="submit">Logout</button>
        </form>
    </div>
    {#if data.isAdmin}
        <div class="addLocation">
                <button on:click={onAddFormActive}>{data.addFormIsActive ? '-':'+'}</button>
            {#if data.addFormIsActive}
                <CreateForm></CreateForm>
            {/if}
        </div>
    {/if}
    <div class="location-list">
        {#each data.locations as location (location._id)}
            <Location location="{location}" isAdmin="{data.isAdmin}" data="{data}"></Location>
        {/each}
    </div>
</body>

<style>
    body{
        background: #2F4952;
        align-items: center;
        align-content: center;
    }

    .menu{
        width: 30%;
        margin: 0 auto;
    }

    .menu button{
        border: none;
        border-radius: 10px;
        background: black;
        width: 100%;
        font-size: 20px;
        padding: 10px 10px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .menu button:hover{
        background: #222222;
        cursor: pointer;
    }

    .addLocation{
        margin: auto;
        text-align: center;
    }

    .addLocation button{
        border-radius: 30px;
        border: none;
        background: black;
        color: #EAEBEC;
        width: 60px;
        height: 60px;
        cursor: pointer;
        margin-top: 20px;
        font-size: 30px;
        font-weight: bold;
    }

    .addLocation button:hover{
        background: #111111;
    }

</style>

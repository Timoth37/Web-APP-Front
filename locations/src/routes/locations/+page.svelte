<script>
    import {enhance} from "$app/forms";
    import Location from "./Location.svelte";
    import CreateForm from "./CreateForm.svelte";
    /** @type {import('./$types').PageData} */
    export let data;
    let locations = data.locations;
    const isAdmin = data.isAdmin;
    let addFormIsActive;
    let addButtonText ="+";

    let customElement;
    const setCustomElement = el => {
        customElement = el;
        customElement.addEventListener('delete', event => {
            locations = locations.filter(location => location._id !== event._id);
        });
    };

    function removeLocation(id){
    }

    function addLocation(location){
        locations.unshift(location);
        locations=locations;
        onAddFormActive();
    }

    function onAddFormActive() {
        addFormIsActive = !addFormIsActive;
        if(addFormIsActive)
            addButtonText="-";
        else
            addButtonText="+"
    }
</script>


<body>
    <div class="menu">
        <form use:enhance method="POST" action="?/logout">
            <button type="submit">Logout</button>
        </form>
    </div>
    {#if isAdmin}
        <div class="addLocation">
            <button on:click={onAddFormActive}>{addButtonText}</button>
            {#if addFormIsActive}
                <CreateForm onAdd="{addLocation}"></CreateForm>
            {/if}
        </div>
    {/if}
    <div class="location-list">
        {#each locations as location (location._id)}
            <Location location="{location}" isAdmin="{isAdmin}" data="{data}" onDelete={removeLocation}></Location>
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

    nav a:hover{
        color: #999999;
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

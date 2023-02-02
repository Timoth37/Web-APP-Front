<script>
    import Location from "../../components/Location/Location.svelte";
    import CreateForm from "../../components/CreateForm/CreateForm.svelte";
    import { onMount } from "svelte";
    let locations = [];
    let addFormActive;
    let addButtonText ="+";
    let userRole="admin";

    onMount(async () => {
        const token = sessionStorage.getItem("token")
        if(!token){
            window.location.href = '/login';
        }else{
            const response = await fetch("http://localhost:3000/locations",{
                headers: {'Authorization': `Bearer ${token}`}
            });
            locations =await response.json();
            locations = locations.reverse()
        }
    });

    function removeLocation(id){
        locations = locations.filter(location => location._id !== id);
    }

    function addLocation(location){
        locations.unshift(location);
        locations=locations;
        console.log(locations[0])
        onAddFormActive();
    }

    function onAddFormActive() {
        addFormActive = !addFormActive;
        if(addFormActive)
            addButtonText="-";
        else
            addButtonText="+"
    }

    async function logout(){
        sessionStorage.setItem("token", "")
        window.location.href = '/login';
    }
</script>


<body>
    <nav class="menu">
        <a href="/login" on:click={logout}>Logout</a>
    </nav>
    {#if userRole==='admin'}
        <div class="addLocation">
            <button on:click={onAddFormActive}>{addButtonText}</button>
            {#if addFormActive}
                <CreateForm onAdd="{addLocation}"></CreateForm>
            {/if}
        </div>
    {/if}
    <div class="location-list">
        {#each locations as location (location._id)}
            <Location location="{location}" onDelete={removeLocation}></Location>
        {/each}
    </div>
</body>

<style>
    body{
        background: #2F4952;
        align-items: center;
        align-content: center;
    }


    nav{
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 20px;
        background: black;
        width: 30%;
        margin: 0 auto;
        border-radius: 10px;
    }

    nav a{
        text-decoration: none;
        margin: 10px;
        color: #FFFFFF;
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

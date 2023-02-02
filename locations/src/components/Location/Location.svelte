<script>
    let active;
    export let location;
    export let onDelete;
    let userRole ='admin';
    let buttonDisabled=false;
    function onDeploy() {
        active = !active;
    }
    const deleteLocation = async (id) =>{
        await fetch(`http://localhost:3000/locations/${id}`, {
            headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`},
            method: 'DELETE'
        })
        onDelete(location._id)
    }
    const modifyLocation = async(id) =>{
        await fetch(`http://localhost:3000/locations/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${sessionStorage.getItem('token')}`},
            body: JSON.stringify(location)
        });
    }

    function handleDisabled(){
        buttonDisabled = !(
            location.filmName
            && location.filmType
            && location.filmDirectorName
            && location.filmProducerName
            && location.year
            && location.startDate
            && location.endDate
            && location.address
            && location.geolocation.coordinates[0]
            && location.geolocation.coordinates[1]
            && location.district
            && location.sourceLocationId)
    }
</script>

<div class="location-item">
    <a on:click={onDeploy}>
        <h3>{location.address}</h3>
    </a>
    {#if active}
    <div class="film-infos">
        <div class="field">
            <p class="title">District : </p>
            <input name="district" bind:value={location.district} on:input={handleDisabled}>
        </div>
        <div class="field">
            <p class="title">Source Location ID : </p>
            <input name="sourceLocationId" bind:value={location.sourceLocationId} on:input={handleDisabled}>
        </div>
        <div class="field">
            <p class="title">Film Name : </p>
            <input name="filmName" bind:value={location.filmName} on:input={handleDisabled}>
        </div>
        <div class="field">
            <p class="title">Film Type: </p>
            <input name="filmType" bind:value={location.filmType} on:input={handleDisabled}>
        </div>
        <div class="field">
            <p class="title">Film Producer: </p>
            <input name="filmProducerName" bind:value={location.filmProducerName} on:input={handleDisabled}>
        </div>
        <div class="field">
            <p class="title">Film Director: </p>
            <input name="filmDirectorName" bind:value={location.filmDirectorName} on:input={handleDisabled}>
        </div>
        <div class="field">
            <p class="title">Start Date: </p>
            <input name="startDate" bind:value={location.startDate} on:input={handleDisabled}>
        </div>
        <div class="field">
            <p class="title">End Date: </p>
            <input name="endDate" bind:value={location.endDate} on:input={handleDisabled}>
        </div>
        <div class="field">
            <p class="title">Year: </p>
            <input name="year" bind:value={location.year} on:input={handleDisabled}>
        </div>
    </div>
        {#if userRole==='admin'}
            <div class="buttons">
                <button class="delete" on:click={deleteLocation(location._id)}>Delete</button>
                <button class="modify" on:click={modifyLocation(location._id)} disabled="{buttonDisabled}">Modify</button>
            </div>
        {/if}
    {/if}
</div>


<style>
    .location-item a{
        text-decoration: none;
        color: #444444;
        font-size: 14px;
    }


    .location-item{
        background: #EAEBEC;
        text-align: center;
        width: 60%;
        margin: 10px auto;
        cursor: pointer;
        border-radius: 5px;
    }

    .location-item h3{
        margin: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        text-transform: capitalize;
        padding: 10px;
    }

    .location-item h3:hover{
        background: #999999;
    }

    .field{
        display: flex;
        flex-direction: row;
        font-size: 14px;
        background: #f2f2f2;
    }
    .field:hover{
        background: #EAEBEC;
    }
    .field p{
        margin: 20px 5px 20px 0;
        padding-left: 5px;
        font-family: "Roboto", sans-serif;
        text-align: left;
        color: black;
    }

    .field .title{
        border-radius: 5px;
        width: 100px;
    }

    .field input{
        width: 90%;
        border: none;
        background: #f2f2f2;
    }

    .field input:hover{
        background: #EAEBEC;
    }

    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .buttons button{
        border-radius: 5px;
        border: 0;
        color: #FFFFFF;
        margin: 10px;
        width: 70px;
        height: 30px;
        cursor: pointer;
    }

    .buttons .delete{
        background: darkred;
    }
    .buttons .delete:hover{
        background: red;
    }

    .buttons .modify{
        background: #444444;
    }
    .buttons .modify:hover{
        background: #000000;
    }

    .buttons .modify:disabled{
        background: #CCCCCC;
        cursor: auto;
    }
</style>
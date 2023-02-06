<script>
    import {enhance} from "$app/forms";
    let active;
    export let location;
    export let isAdmin;
    let buttonDisabled=false;

    function onDeploy() {
        active = !active;
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

<body>
    <a on:click={onDeploy}>
        <h3>{location.address}</h3>
    </a>
    {#if active}
        <form use:enhance method="POST" action="?/updateLocation&id={location._id}">
            <div class="film-infos">
                <div class="field">
                    <p class="title">District : </p>
                    <input name="district"
                           type="number"
                           bind:value={location.district}
                           on:input={handleDisabled}
                           disabled="{!isAdmin}">
                </div>
                <div class="field">
                    <p class="title">Source Location ID : </p>
                    <input name="sourceLocationId"
                           bind:value={location.sourceLocationId}
                           on:input={handleDisabled}
                           disabled="{!isAdmin}">
                </div>
                <div class="field">
                    <p class="title">Film Name : </p>
                    <input name="filmName"
                           bind:value={location.filmName}
                           on:input={handleDisabled}
                           disabled="{!isAdmin}">
                </div>
                <div class="field">
                    <p class="title">Film Type: </p>
                    <input name="filmType"
                           bind:value={location.filmType}
                           on:input={handleDisabled}
                           disabled="{!isAdmin}">
                </div>
                <div class="field">
                    <p class="title">Film Producer: </p>
                    <input name="filmProducerName"
                           bind:value={location.filmProducerName}
                           on:input={handleDisabled}
                           disabled="{!isAdmin}">
                </div>
                <div class="field">
                    <p class="title">Film Director: </p>
                    <input name="filmDirectorName"
                           bind:value={location.filmDirectorName}
                           on:input={handleDisabled}
                           disabled="{!isAdmin}">
                </div>
                <div class="field">
                    <p class="title">Start Date: </p>
                    <input name="startDate"
                           bind:value={location.startDate}
                           on:input={handleDisabled}
                           disabled="{!isAdmin}">
                </div>
                <div class="field">
                    <p class="title">End Date: </p>
                    <input name="endDate"
                           bind:value={location.endDate}
                           on:input={handleDisabled}
                           disabled="{!isAdmin}">
                </div>
                <div class="field">
                    <p class="title">Year: </p>
                    <input name="year" type="number"
                           bind:value={location.year}
                           on:input={handleDisabled}
                           disabled="{!isAdmin}">
                </div>
                {#if isAdmin}
                    <button class="modify" disabled="{buttonDisabled}">Modify</button>
                {/if}
            </div>
        </form>
        {#if isAdmin}
            <form use:enhance method="POST" action="?/deleteLocation&id={location._id}">
                <button class="delete" type="submit">Delete</button>
            </form>
        {/if}
    {/if}
</body>


<style>
    a{
        text-decoration: none;
        color: #444444;
        font-size: 14px;
    }


    body{
        background: #EAEBEC;
        text-align: center;
        width: 60%;
        margin: 10px auto;
        cursor: pointer;
        border-radius: 5px;
    }

    h3{
        margin: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        text-transform: capitalize;
        padding: 10px;
    }

    h3:hover{
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

    button{
        border-radius: 5px;
        border: 0;
        color: #FFFFFF;
        margin: 10px;
        width: 70px;
        height: 30px;
        cursor: pointer;
    }

    .delete{
        background: darkred;
    }
    .delete:hover{
        background: red;
    }

    .modify{
        background: #444444;
    }
    .modify:hover{
        background: #000000;
    }

    .modify:disabled{
        background: #CCCCCC;
        cursor: auto;
    }
</style>
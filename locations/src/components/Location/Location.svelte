<script>
    export let location;
    let active = false;

    function onDeploy() {
        active = !active;
    }

    function onDelete(){

    }
</script>

<div class="location-item">
    <a on:click={onDeploy}>
        <h3>{location.address}</h3>
    </a>
    {#if active}
    <div class="film-infos">
        <div class="field">
            <p class="title">Title : </p>
            <p class="value">{location.filmName}</p>
        </div>
        <div class="field">
            <p class="title">Film Type: </p>
            <p class="value">{location.filmType}</p>
        </div>
        <div class="field">
            <p class="title">Film Producer: </p>
            <p class="value">{location.filmProducerName}</p>
        </div>
        <div class="field">
            <p class="title">Film Director: </p>
            <p class="value">{location.filmDirectorName}</p>
        </div>
        <div class="field">
            <p class="title">Year: </p>
            <p class="value">{location.year}</p>
        </div>
    </div>
    <div class="buttons">
        <button class="delete" on:click={onDelete}>Delete</button>
        <button class="modify">Modify</button>
    </div>
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
</style>
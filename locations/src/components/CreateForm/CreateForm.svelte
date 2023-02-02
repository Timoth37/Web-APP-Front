<script>
    import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte'
    export let onAdd;
    let buttonDisabled =true;
    let location = {
        filmType: "",
        filmProducerName: "",
        endDate: "",
        filmName: "",
        district: "",
        geolocation: {
            coordinates: ["",""],
            type: "Point",
        },
        sourceLocationId: "",
        filmDirectorName: "",
        address: "",
        startDate: "",
        year: "",
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

    const addLocation = async () =>{
        onAdd(location)
        await fetch(`http://localhost:3000/locations`, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`},
            method: 'POST',
            body: JSON.stringify(location)
        })
    }
</script>
<div class="card">
    <div class="header">
        <div class="icon">
            <MdLocationOn />
        </div>
        <input placeholder="Address ex: 1 rue de la Paix" bind:value={location.address} on:input={handleDisabled}>
    </div>
    <div class="film-infos">
        <div class="name-infos">
            <div class="field">
                <p class="title">Film Name: </p>
                <input placeholder="ex: Le roi Lion" class="value" bind:value={location.filmName} on:input={handleDisabled}>
            </div>
        </div>
        <div class="secondary-infos">
            <div class="left-infos">
                <div class="field">
                    <p class="title">District : </p>
                    <input placeholder="ex: 75019" type="number" bind:value={location.district} on:input={handleDisabled}>
                </div>
                <div class="field">
                    <p class="title">Latitude : </p>
                    <input placeholder="ex: 1.356895" type="number" bind:value={location.geolocation.coordinates[0]} on:input={handleDisabled}>
                </div>
                <div class="field">
                    <p class="title">Longitude : </p>
                    <input placeholder="ex: -3.569856" type="number" bind:value={location.geolocation.coordinates[1]} on:input={handleDisabled}>
                </div>
                <div class="field">
                    <p class="title">Source Location ID : </p>
                    <input placeholder="ex: 2020-434" bind:value={location.sourceLocationId} on:input={handleDisabled}>
                </div>
                <div class="field">
                    <p class="title">Film Type: </p>
                    <input placeholder="ex: Téléfilm" bind:value={location.filmType} on:input={handleDisabled}>
                </div>
            </div>
            <div class="right-infos">
                <div class="field">
                    <p class="title">Film Producer: </p>
                    <input placeholder="ex: Jean Dupond" bind:value={location.filmProducerName} on:input={handleDisabled}>
                </div>
                <div class="field">
                    <p class="title">Film Director: </p>
                    <input placeholder="ex: Jérôme Blat" bind:value={location.filmDirectorName} on:input={handleDisabled}>
                </div>
                <div class="field">
                    <p class="title">Start Date: </p>
                    <input name="startDate" type="date" bind:value={location.startDate} on:input={handleDisabled}>
                </div>
                <div class="field">
                    <p class="title">End Date: </p>
                    <input name="endDate" type="date" bind:value={location.endDate} on:input={handleDisabled}>
                </div>
                <div class="field">
                    <p class="title">Year: </p>
                    <input placeholder="ex: 2023" type="number" bind:value={location.year} on:input={handleDisabled}>
                </div>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button type="reset" class="add" on:click={addLocation} disabled="{buttonDisabled}">Add</button>
    </div>
</div>

<style>
    .card{
        margin: 30px auto;
        width: 60%;
        height: auto;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3), 0 5px 5px 0 rgba(0, 0, 0, 0.3);
    }

    .header{
        display: flex;
        flex-direction: row;
        background: #999999;
        color: #FFFFFF;
        font-size: 20px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        justify-content: space-around;
    }

    .header ::placeholder{
        color: white;
        opacity: 0.5;
    }

    .film-infos ::placeholder{
        color: #111111;
        opacity: 0.25;
    }

    .icon{
        justify-self: center;
        height: 60px;
        padding-left: 5px;
    }

    .film-infos{
        display: flex;
        flex-direction: column;
    }

    .secondary-infos{
        display: flex;
        flex-direction: row;
    }

    .right-infos, .left-infos{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .field{
        display: flex;
        flex-direction: row;
        margin: 1px;
        font-size: 14px;
        background: #f2f2f2;
        border-radius: 5px;
        height: 60px;
    }

    .field:hover{
        background: #EAEBEC;
    }

    .field p{
        margin: 20px 5px 20px 0;
        text-align: left;
        padding-left: 5px;
        font-family: "Roboto", sans-serif;
    }

    .field .title{
        border-radius: 5px;
        color: black;
        width: 170px;
    }

    .field .value{
        color: #444444;
    }

    input{
        width: 90%;
        border: none;
        background: #f2f2f2;
        border-radius: 5px;
    }

    .header input{
        background: #999999;
    }

    .header input:hover{
        background: #999999;
    }

    input:hover{
        background: #EAEBEC;
    }

    input:focus{
        outline: none;
    }

    .buttons button{
        border-radius: 5px;
        border: 0;
        color: #FFFFFF;
        margin: 10px;
        width: 40%;
        height: 30px;
        cursor: pointer;
        background: #444444;
    }

    .buttons button:hover{
        background: #000000;
    }

    .buttons button:disabled{
        background: #CCCCCC;
        cursor: auto;
    }

</style>
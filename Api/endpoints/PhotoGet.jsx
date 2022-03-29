

export const PhotoGet = () => {


    function handleSubmit(event) {
        event.preventDefault();

        fetch("https://dogsapi.origamid.dev/json/api/photo")

        .then(response => {
            console.log(response)
            return response.json()
        })

        .then(body => console.log(body))


    }


return <form onSubmit={handleSubmit} action="">
<input type="text" />

<button>Enviar</button>


</form>



}
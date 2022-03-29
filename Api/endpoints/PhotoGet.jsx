import {Input} from "../../Components/Globals/Input/Input"
import {useState} from "React"


export const PhotoGet = () => {
    const [getPhoto, setGetPhoto] = useState('')
    


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
<Input 
type="text"
id="photoGet"
value={getPhoto}
onChange={setGetPhoto}

   />

<button>Enviar</button>


</form>



}
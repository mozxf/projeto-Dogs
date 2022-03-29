import {useState} from "react"

export const PhotoPost = () => {
const [token, setToken] = useState("") 
const [nome, setNome] = useState("") 
const [peso, setPeso] = useState("") 
const [idade, setIdade] = useState("") 
const [img, setImg] = useState("") 


function handleSubmit(e) {

e.preventDefault();



const formData = new FormData()

formData.append('img', img)
formData.append('nome', nome)
formData.append('peso', peso)
formData.append('idade', idade)

const options = {
    method: "POST",
    headers: {
        Authorization: 'Bearer ' + token
    },
    body: formData 
}

fetch("https://dogsapi.origamid.dev/json/api/photo", options)
.then(response =>  {

console.log(response)
return response.json()
})

.then(body => console.log(body))



}


return <form onSubmit={handleSubmit}>

    <input type="text" 
    value={token} 
    onChange={({target}) => setToken(target.value)}
    placeholder="token" 
    />

    <input type="text" 
    value={nome} 
    onChange={({target}) => setNome(target.value)}
    placeholder="nome" 
    />

    <input type="text" 
    value={peso} 
    onChange={({target}) => setPeso(target.value)}
    placeholder="peso" 
    />

    <input type="text" 
    value={idade} 
    onChange={({target}) => setIdade(target.value)}
    placeholder="idade" 
    />

    <input type="file" 
    onChange={({target}) => setImg(target.files[0])}
    />

    

    

    <button>Enviar</button>

     </form>

}



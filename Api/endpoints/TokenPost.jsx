import {useState} from "react"

export const TokenPost = () => {
const [username, setUsername] = useState("") 
const [password, setPassword] = useState("") 


function handleSubmit(e) {

e.preventDefault();

const post = {username, password}

const options = {
    method: "POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(post)
}

fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", options)
.then(response =>  {

console.log(response)
return response.json()
})

.then(body => console.log(body))



}


return <form onSubmit={handleSubmit}>

    <input type="text" 
    value={username} 
    onChange={({target}) => setUsername(target.value)}
    placeholder="username" 
    />

    

    <input type="password" 
    value={password} 
    onChange={({target}) => setPassword(target.value)}
    placeholder="password" 
    />

    <button>Enviar</button>

     </form>

}
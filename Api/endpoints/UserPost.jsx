import {useState} from "react"

export const UserPost = () => {
const [username, setUsername] = useState("") 
const [email, setEmail] = useState("") 
const [password, setPassword] = useState("") 


function handleSubmit(e) {

e.preventDefault();

const post = {username, email, password}

const options = {
    method: "POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(post)
}

fetch("https://dogsapi.origamid.dev/json/api/user", options)
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

    <input type="email" 
    value={email} 
    onChange={({target}) => setEmail(target.value)}
    placeholder="email" 
    />

    <input type="password" 
    value={password} 
    onChange={({target}) => setPassword(target.value)}
    placeholder="password" 
    />

    <button>Enviar</button>

     </form>

}
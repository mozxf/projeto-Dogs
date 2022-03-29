import {useState} from "react"
import { Input } from "../../Components/Globals/Input/Input";
import { Button } from "../../Components/Globals/Button/Button";

export const UserPost = ({className}) => {
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


return <form className={className} onSubmit={handleSubmit}>

    <Input 
    type="text" 
    value={username} 
    onChange={({target}) => setUsername(target.value)}
    placeholder="Dog"
    label='Username' 
    />

    <Input 
    type="email" 
    value={email} 
    onChange={({target}) => setEmail(target.value)}
    placeholder="dog@email.com"
    label='Email' 
    />

    <Input 
    type="password" 
    value={password} 
    onChange={({target}) => setPassword(target.value)}
    placeholder="dog123*"
    label='Password'
    id='password' 
    />

    <Button type='button'>Register</Button>

     </form>

}
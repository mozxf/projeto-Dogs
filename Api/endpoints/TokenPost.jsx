import {useState} from "react"
import { Input } from "../../Components/Globals/Input/Input";
import { Button } from "../../Components/Globals/Button/Button";

export const TokenPost = ({className}) => {
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


return <form className={className} onSubmit={handleSubmit}>

    

    <Input 
    id={'user'}
    label='Username'
    value={username}
    onChange={({target}) => setUsername(target.value)}
    placeholder='Username'
    type='text'  />

    <Input 
    id='password'
    label='Password'
    value={password}
    onChange={({target}) => setPassword(target.value)}
    placeholder='Password'
    type='password'  />


    <Button type='button'>Enviar</Button>

     </form>

}
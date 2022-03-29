import styles from "./Input.module.scss";
import {useState} from 'react'

export const Input = ({label, type, id, value, onChange, placeholder}) => {
    const [view, setView] = useState(false)
    const [show, setShow] = useState(type)

function handleClick() {
    setView((view) => !view)
    
    if(!view) {
        setShow('text')
    }
    else {
        setShow(type)
    }


}






return (<div className={styles.inputWrapper}>

<label htmlFor={id} >{label}</label>
<input className={styles.input} value ={value} onChange={onChange} type={show} id={id} placeholder={placeholder}  />
{id === 'password' && <img className={styles.showPassword} 
src={view ? '/src/Assets/eyeOpened.png' : '/src/Assets/eyeClosed.png'}
onClick ={handleClick}
/>}
</div>)


}
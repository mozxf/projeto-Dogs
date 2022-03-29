import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

export const Button = ({children, onClick, type, href}) => {

 
if(type === 'button') {
return (<button className={styles.button} onClick={onClick} >{children}</button>)
}

if(type === 'link') {
    return (
        <Link className={styles.button} to={href} >{children}</Link>
    )
}

else return null
}
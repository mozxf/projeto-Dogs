import {Link} from "react-router-dom"
import styles from "./Header.module.scss"

export const Header = () => {



return (

<header className={styles.header}>
    <nav className={styles.container + " container"}>
    <Link className={styles.link}  to='/'><img src="/src/Assets/dogs.svg" alt="" /></Link>
    <Link className={styles.link} to='/login'>Login / Create <img src="/src/Assets/usuario.svg" alt="" /></Link>
    </nav>
</header>)

}
import {UserPost} from "../../Api/endpoints/UserPost";
import { Button } from "../Globals/Button/Button";
import styles from "./Create.module.scss"

export const Create = () => {

    return  (<>
    <h1 className={styles.loginTitle}>Register</h1>

        <UserPost className={styles.loginForm} />
      

</> ) 
}
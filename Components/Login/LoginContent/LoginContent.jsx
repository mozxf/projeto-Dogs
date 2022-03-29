import { Button } from "../../Globals/Button/Button";
import { TokenPost } from "../../../Api/endpoints/TokenPost";
import styles from "./LoginContent.module.scss"


export const LoginContent = () => {


return  <>
    <h1 className={styles.loginTitle}>Login</h1>

    <TokenPost className={styles.loginForm} />

    <a className={styles.lostPassword} href="">Forgot password?</a>
    <div>
    <h2 className={styles.registerTitle}>Register</h2>
    <p className={styles.registerText}>Don't have an account yet? Sign up!
    </p>
    <Button type='link' href="/login/create">Register</Button>
</div>

</>

}
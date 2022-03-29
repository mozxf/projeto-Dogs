import styles from "./Login.module.scss";
import { Input } from "../Globals/Input/Input";
import {useState} from "react";

export const Login = () => {
const [user, setUser] = useState('');
const [password, setPassword] = useState('');



return (
    <main className={styles.login}>
        
        <section className={styles.loginSection}>
            
            <div className={styles.wrapperForm}>
                <h1>Login</h1>
                <form className={styles.loginForm} action="">
                    
                    <Input 
                    id='user' 
                    label='User' 
                    type='text'
                    value={user}
                    onChange={setUser}
                      />
                
                    <Input 
                    id='password' 
                    label='Password' 
                    type='password'
                    value={password}
                    onChange={setPassword}
                      />
                      
                    <button className={styles.formButton}>Login</button>
                </form>
                <a className={styles.lostPassword} href="">Forgot password?</a>
                <div>
                    <h2 className={styles.registerTitle}>Register</h2>
                    <p className={styles.registerText}>Don't have an account yet? Sign up!
                    </p>
                <a className={styles.registerButton} href="">Register</a>
                </div>
                
            </div>
        </section>  
    
    </main>)

}
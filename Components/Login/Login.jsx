import styles from "./Login.module.scss";
import { Route, Routes } from "react-router-dom";
import { Create } from "../Create/create";
import { LoginContent } from "./LoginContent/LoginContent";


export const Login = () => {



return (
    <main className={styles.login}>
        
        <section className={styles.loginSection}>
        <div className={styles.wrapperForm}>
            
        <Routes>
            <Route path="/" element={<LoginContent /> } />
            <Route path="create" element={<Create />}  />
        </Routes> 
            </div>
        </section> 

        
    
    </main>)

}
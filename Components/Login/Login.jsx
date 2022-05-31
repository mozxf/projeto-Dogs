import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../src/Utilities/UserContext';
import { Create } from '../Create/create';
import styles from './Login.module.scss';
import { LoginContent } from './LoginContent/LoginContent';

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login) {
    return <Navigate to={'/account'} />;
  }

  return (
    <main className={styles.login}>
      <section className={styles.loginSection}>
        <div className={styles.wrapperForm}>
          <Routes>
            <Route path='/' element={<LoginContent />} />
            <Route path='create' element={<Create />} />
          </Routes>
        </div>
      </section>
    </main>
  );
};

import { Button } from '../../Globals/Button/Button';
import { Title } from '../../Globals/Title/Title';
import styles from './LoginContent.module.scss';
import { LoginForm } from './LoginForm';

export const LoginContent = () => {
  return (
    <>
      <Title>Login</Title>

      <LoginForm className={styles.loginForm} />

      <a className={styles.lostPassword} href=''>
        Forgot password?
      </a>
      <div>
        <h2 className={styles.registerTitle}>Register</h2>
        <p className={styles.registerText}>
          Don't have an account yet? Sign up!
        </p>
        <Button type='link' href='/login/create'>
          Sign-up
        </Button>
      </div>
    </>
  );
};

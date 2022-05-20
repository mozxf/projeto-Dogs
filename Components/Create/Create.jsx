import styles from './Create.module.scss';
import { CreateUserForm } from './CreateUserForm';

export const Create = () => {
  return (
    <>
      <h1 className={styles.loginTitle}>Register</h1>

      <CreateUserForm className={styles.loginForm} />
    </>
  );
};

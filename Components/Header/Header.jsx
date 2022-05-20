import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../src/UserContext';
import styles from './Header.module.scss';

export const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={styles.container + ' container'}>
        <Link className={styles.link} to='/'>
          <img src='/src/Assets/dogs.svg' alt='' />
        </Link>
        {data && data.username ? (
          <Link className={styles.link} to='/account'>
            {data.username} <button onClick={userLogout}>Logout</button>{' '}
            <img src='/src/Assets/usuario.svg' alt='' />
          </Link>
        ) : (
          <Link className={styles.link} to='/login'>
            Login / Create <img src='/src/Assets/usuario.svg' alt='' />
          </Link>
        )}
      </nav>
    </header>
  );
};

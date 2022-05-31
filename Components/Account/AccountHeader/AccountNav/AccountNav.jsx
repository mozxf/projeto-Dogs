import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../../src/Utilities/UserContext/';
import { useContext, useState } from 'react';
import { Feed, Adicionar, Estatisticas, Sair } from '/src/compSvg/index';
import styles from './AccountNav.module.scss';

export const AccountNav = () => {
  const [mobile, setMobile] = useState(null);

  const { userLogout } = useContext(UserContext);
  return (
    <nav className={styles.navMenu}>
      <NavLink to={'/account'} end>
        <Feed className={styles.icon} />
        {mobile && 'Feed'}
      </NavLink>
      <NavLink to={'/account/statistics'}>
        <Estatisticas className={styles.icon} />
        {mobile && 'Statistics'}
      </NavLink>
      <NavLink to={'/account/post'}>
        <Adicionar className={styles.icon} />
        {mobile && 'Add Photo'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair className={styles.icon} />
        {mobile && 'Log out'}
      </button>
    </nav>
  );
};

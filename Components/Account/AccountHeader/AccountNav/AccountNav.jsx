import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../../src/Utilities/UserContext/';
import { useContext, useState } from 'react';
import { Feed, Adicionar, Estatisticas, Sair } from '/src/compSvg/index';
import styles from './AccountNav.module.scss';

export const AccountNav = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <nav className={styles.navMenu}>
      <NavLink to={'/account'} end>
        <Feed className={styles.icon} />
      </NavLink>
      <NavLink to={'/account/statistics'}>
        <Estatisticas className={styles.icon} />
      </NavLink>
      <NavLink to={'/account/post'}>
        <Adicionar className={styles.icon} />
      </NavLink>
      <button onClick={userLogout}>
        <Sair className={styles.icon} />
      </button>
    </nav>
  );
};

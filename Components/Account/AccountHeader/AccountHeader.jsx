import { Title } from '../../Globals/Title/Title';
import styles from './AccountHeader.module.scss';
import { AccountNav } from './AccountNav/AccountNav';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const AccountHeader = () => {
  const location = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/account':
        setTitle('My account');
        break;

      case '/account/statistics':
        setTitle('Statistics');
        break;

      case '/account/post':
        setTitle('Post Photo');
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <Title> {title}</Title>
      <AccountNav />
    </header>
  );
};

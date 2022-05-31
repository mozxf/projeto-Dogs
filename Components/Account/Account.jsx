import { Routes, Route } from 'react-router-dom';
import styles from './Account.module.scss';
import { Feed } from './Feed/Feed';
import { AccountHeader } from './AccountHeader/AccountHeader';
import { UserPhotoPhost } from './UserPhotoPost/UserPhotoPost';
import { UserStatistics } from './UserStatistics/UserStatistics';

export const Account = () => {
  return (
    <section className={`container + ${styles.container}`}>
      <AccountHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/post' element={<UserPhotoPhost />} />
        <Route path='/statistics' element={<UserStatistics />} />
      </Routes>
    </section>
  );
};

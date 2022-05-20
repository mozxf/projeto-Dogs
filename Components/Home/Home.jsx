import { useEffect, useState } from 'react';
import { photosGet } from '../../Api/endpoints/photosGet';
import styles from './Home.module.scss';

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const { url } = photosGet();
      const response = await fetch(url);

      const json = await response.json();
      setData(json);
    }
    getData();
  }, []);

  console.log(data);

  if (data)
    return (
      <ul className={styles.photosList}>
        {data.map((item) => {
          return (
            <li className={styles.photosWrapper} key={item.id}>
              <img className={styles.dogPhoto} src={item.src} alt='' />
              <span className={styles.photoViews}>{item.acessos}</span>
            </li>
          );
        })}
      </ul>
    );
  else return null;
};

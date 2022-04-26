import { useEffect, useState } from 'react';
import styles from './Home.module.scss';

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://dogsapi.origamid.dev/json/api/photo'
      );

      const json = await response.json();

      setData(json);
    }
    getData();
  }, []);

  console.log(data);

  if (data)
    return (
      <section className={styles.photosWrapper}>
        {data.map((item) => {
          return <img className={styles.dogPhoto} src={item.src} alt='' />;
        })}
      </section>
    );
  else return null;
};

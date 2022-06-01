import { Input } from '../../Globals/Input/Input';
import { Button } from '../../Globals/Button/Button';
import { useForm } from '../../../src/Hooks/useForm';
import { useFetch } from '../../../src/Hooks/useFetch';
import { useState } from 'react';

import { userPhotoPost } from '../../../Api/endpoints/userPhotoPost';
import styles from './UserPhotoPost.module.scss';

export const UserPhotoPhost = () => {
  const name = useForm('text');
  const weight = useForm('text');
  const age = useForm('text');
  const [img, setImg] = useState();
  const { loading, data, error, request } = useFetch();

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const { url, options } = userPhotoPost(
      img.raw,
      name.value,
      weight.value,
      age.value,
      token
    );

    const { response, json } = await request(url, options);
    console.log(response, json);
  }
  if (img && img.preview) console.log(img.preview);

  return (
    <section className={styles.photoPostSection}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label='Name' {...name} />
        <Input label='Weight' type='number' {...weight} />
        <Input label='Age' type='number' {...age} />
        <input type='file' id='img' onChange={handleImgChange} />
        <Button className={styles.button} type='button'>
          Post
        </Button>
      </form>

      {img && img.preview && (
        <div
          className={styles.imagePreview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
};

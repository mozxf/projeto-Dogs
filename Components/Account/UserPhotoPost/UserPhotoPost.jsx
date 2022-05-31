import { Input } from '../../Globals/Input/Input';
import { Button } from '../../Globals/Button/Button';
import { useForm } from '../../../src/Hooks/useForm';
import styles from './UserPhotoPost.module.scss';

export const UserPhotoPhost = () => {
  const name = useForm('text');
  const weight = useForm('text');
  const age = useForm('text');

  function handleImgChange() {}

  return (
    <form className={styles.form}>
      <Input label='Name' {...name} />
      <Input label='Weight' {...weight} />
      <Input label='Age' {...age} />
      <input type='file' id='img' onChange={handleImgChange} />
      <Button className={styles.button} type='button'>
        Post
      </Button>
    </form>
  );
};

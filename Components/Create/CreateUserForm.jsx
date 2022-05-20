import { userPost } from '../../Api/endpoints/userPost';
import { useForm } from '../../src/Hooks/useForm';
import { Button } from '../Globals/Button/Button';
import { Input } from '../Globals/Input/Input';

export const CreateUserForm = ({ className }) => {
  const username = useForm('text');
  const email = useForm('email');
  const password = useForm('password');

  const { url, options } = userPost(
    username.value,
    email.value,
    password.value
  );

  function handleSubmit(e) {
    e.preventDefault();

    const response = awaitfetch(url, options);

    console.log(response);
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Input {...username} type='text' placeholder='Dog' label='Username' />

      <Input
        type='email'
        {...email}
        placeholder='dog@email.com'
        label='Email'
      />

      <Input
        {...password}
        type='password'
        placeholder='dog123*'
        label='Password'
        id='password'
      />

      <Button type='button'>Register</Button>
    </form>
  );
};

import { userPost } from '../../Api/endpoints/userPost';
import { useFetch } from '../../src/Hooks/useFetch';
import { useForm } from '../../src/Hooks/useForm';
import { Button } from '../Globals/Button/Button';
import { Input } from '../Globals/Input/Input';

export const CreateUserForm = ({ className }) => {
  const username = useForm('text');
  const email = useForm('email');
  const password = useForm('password');

  const { loading, request } = useFetch();

  const { url, options } = userPost(
    username.value,
    email.value,
    password.value
  );

  async function handleSubmit(e) {
    e.preventDefault();

    const { response, json } = await request(url, options);
    console.log(response, json);
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
        placeholder='dog123'
        label='Password'
        id='password'
      />

      {loading ? (
        <Button disabled type='button'>
          Loading...
        </Button>
      ) : (
        <Button
          disabled={!username.value || !email.value || !password.value}
          type='button'
        >
          Register
        </Button>
      )}
    </form>
  );
};

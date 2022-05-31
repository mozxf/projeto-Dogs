import { useContext } from 'react';
import { useForm } from '../../../src/Hooks/useForm';
import { UserContext } from '../../../src/Utilities/UserContext';
import { Button } from '../../Globals/Button/Button';
import { Input } from '../../Globals/Input/Input';

export const LoginForm = ({ className }) => {
  const username = useForm('text');
  const password = useForm('password');
  const { userLogin, loading, error } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    userLogin(username.value, password.value);
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Input
        {...username}
        id={'user'}
        label='Username'
        placeholder='Username'
        type='text'
      />

      <Input
        {...password}
        id='password'
        label='Password'
        placeholder='Password'
        type='password'
      />

      {loading ? (
        <Button type='button' disabled>
          {' '}
          ...Loading{' '}
        </Button>
      ) : (
        <Button type='button'>Enviar</Button>
      )}
      {error && error}
    </form>
  );
};

import { useState } from 'React';
import { Input } from '../../Components/Globals/Input/Input';
import { API_URL } from '../api-url';

export const PhotoGet = () => {
  const [getPhoto, setGetPhoto] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${API_URL}/api/photo`)
      .then((response) => {
        console.log(response);
        return response.json();
      })

      .then((body) => console.log(body));
  }

  return (
    <form onSubmit={handleSubmit} action=''>
      <Input
        type='text'
        id='photoGet'
        value={getPhoto}
        onChange={setGetPhoto}
      />

      <button>Enviar</button>
    </form>
  );
};

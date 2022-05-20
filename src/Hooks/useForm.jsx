import { useState } from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Invalid email!',
  },
};

export const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate() {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Field cannot be empty!');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
    } else {
      setError(true);
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);
    if (error) {
      validate(target.value);
    }
  }

  return {
    value,
    error,
    onChange,
    onBlur: () => validate(value),
  };
};

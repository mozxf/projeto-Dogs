import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tokenPost } from '../Api/endpoints/tokenPost';
import { validateToken } from '../Api/endpoints/tokenValidate';
import { userGet } from '../Api/endpoints/userGet';

const UserContext = createContext();

const UserStorage = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = validateToken(token);

          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
          navigate('/account');
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function getUser(token) {
    const { url, options } = userGet(token);

    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = tokenPost(username, password);
      const response = await fetch(url, options);
      const { token } = await response.json();
      if (!response.ok) throw new Error('Error: Invalid credentials!');
      setLoading(false);
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <UserContext.Provider
      value={{ userLogin, getUser, data, loading, login, error, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };

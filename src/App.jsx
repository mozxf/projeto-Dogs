import './App.css';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Account } from '../Components/Account/Account';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { Home } from '../Components/Home/Home';
import { Login } from '../Components/Login/Login';
import { UserStorage } from './Utilities/UserContext';
import { ProtectedRoute } from './Utilities/ProtectedRoute';
function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login/*' element={<Login />} />
          <Route
            path='account/*'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;

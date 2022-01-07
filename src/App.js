import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Login from './pages/login';
import SignUp from './pages/signup';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import useAuthListener from './hooks/useAuthListener';
import UserContext from './context/user';

export default function App() {
  const { user }  = useAuthListener();

  return (
    <UserContext.Provider value ={{ user }}>
      
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />}  />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />}  />
      <Route path={ROUTES.HOME} element={<Home />}  />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </UserContext.Provider>
  );
}

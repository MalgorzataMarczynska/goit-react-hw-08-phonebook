import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { FallingLines } from 'react-loader-spinner';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
const HomePage = lazy(() => import('../pages/Home/Home.js'));
const RegisterPage = lazy(() => import('../pages/Register/Register.js'));
const LoginPage = lazy(() => import('../pages/Login/Login.js'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts.js'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <FallingLines
      color="#3f51b5"
      width="50"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

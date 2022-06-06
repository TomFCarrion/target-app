import React from 'react';

import routesPaths from 'constants/routesPaths';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SignupPage from 'pages/SingupPage/SingupPage';

const routes = [
  {
    path: routesPaths.index,
    component: <HomePage />,
    exact: true,
    private: true
  },
  {
    path: routesPaths.login,
    component: <LoginPage />
  },
  {
    path: routesPaths.signUp,
    component: <SignupPage />
  },
];

export default routes;

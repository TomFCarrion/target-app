import React from 'react';
import { Redirect } from 'react-router-dom';

import { login } from 'state/actions/userActions';
import { useDispatch, useSession } from 'hooks';
import LoginForm from 'components/User/LoginForm';
import routes from 'constants/routesPaths';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const loginRequest = useDispatch(login);
  const { authenticated } = useSession();

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <LoginForm onSubmit={loginRequest} />
    </div>
  );
};

export default LoginPage;

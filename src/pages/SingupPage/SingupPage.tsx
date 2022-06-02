import React from 'react';
import { Redirect } from 'react-router-dom';

import { signUp } from 'state/actions/userActions';
import { useDispatch, useSession } from 'hooks';
import SignupForm from 'components/User/SignupForm';
import routes from 'constants/routesPaths';
import testIds from 'constants/testIds';
import styles from './SingupPage.module.scss';

const SingupPage = () => {
  const loginRequest = useDispatch(signUp);
  const { authenticated } = useSession();

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className={styles.container} data-testid={testIds.LOGIN_PAGE}>
      <h1>Sing Up</h1>
      <SignupForm onSubmit={loginRequest} />
    </div>
  );
};

export default SingupPage;
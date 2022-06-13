import React from 'react';
import { Redirect } from 'react-router-dom';
import { signUp } from 'state/actions/userActions';
import { useDispatch, useSession } from 'hooks';
import SignupForm from 'components/User/SignupForm';
import routes from 'constants/routesPaths';
import testIds from 'constants/testIds';
import styles from './SingupPage.module.scss';
import RightSection from 'components/Common/RightSection';

const SingupPage = () => {
  const loginRequest = useDispatch(signUp);
  const { authenticated } = useSession();

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left} data-testid={testIds.LOGIN_PAGE}>
        <h1>SIGN UP</h1>
        <SignupForm onSubmit={loginRequest} />
      </div>
      <RightSection/>
    </div>
  );
};

export default SingupPage;

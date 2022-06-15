import React from 'react';
import { Redirect } from 'react-router-dom';
import logo from 'utils/logo.png';
import Button from 'components/Common/Button';
import { login } from 'state/actions/userActions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSession } from 'hooks';
import LoginForm from 'components/User/LoginForm';
import routes from 'constants/routesPaths';
import testIds from 'constants/testIds';
import styles from './LoginPage.module.scss';
import RightSection from 'components/Common/RightSection';

const LoginPage = () => {
  const loginRequest = useDispatch(login);
  const { authenticated } = useSession();

  const history = useHistory();

  const handleRedirect = () => {
    history.push('/sign-up');
  };

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left} data-testid={testIds.LOGIN_PAGE}>
        <img width={'100px'} src={logo} />

        <h1 className={styles.title}>Target MVD</h1>
        <h2 className={styles.subTitle}>Find people near you & Connect</h2>
        <p className={styles.text}>
          Create a target wherever on the map, specify your interest: Travel,
          Dating, Music, etc and start conecting with others who share your
          interest.
        </p>
        <LoginForm onSubmit={loginRequest} />
        <Button
          onClick={() => {}}
          title="Forgot Your password?"
          type='text-bold'
          disabled={false}
        ></Button>
        <Button
          onClick={() => {}}
          title="CONNECT WITH FACEBOOK"
          type='text'
          disabled={false}
        ></Button>
        <Button onClick={handleRedirect} disabled={false} type={'secondary'} title="SIGN UP"/>
      </div>
       <RightSection/>
    </div>
  );
};

export default LoginPage;

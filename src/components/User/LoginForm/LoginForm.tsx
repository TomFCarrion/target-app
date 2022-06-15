import React, { memo } from 'react';
import { Formik } from 'formik';

import Input from 'components/Common/Input';
import Button from 'components/Common/Button';
import loginValidator from 'validators/loginValidator';
import { PENDING, REJECTED } from 'constants/actionStatus';
import { login } from 'state/actions/userActions';
import { useStatus } from 'hooks';

export interface LoginFormFields {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (values: LoginFormFields) => void,
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const initialValues: LoginFormFields = {
    email: '',
    password: '',
  };

  const { status, error } = useStatus(login);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginValidator}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          {status === REJECTED && (
            <strong className="login-error">
              {error}
            </strong>
          )}
          <div>
            <Input
              name="email"
              value={values.email}
              error={errors.email}
              onChange={handleChange}
              placeholder="email"
              label="Email"
              className="login-form-input"
            />
          </div>
          <div>
            <Input
              name="password"
              value={values.password}
              error={errors.password}
              onChange={handleChange}
              type="password"
              placeholder="********"
              label="Contraseña"
              className="login-form-input"
            />
          </div>
          <Button
            onClick={handleSubmit}
            disabled={status === PENDING}
            title="Login"
            type='default'
          />
        </form>
      )}
    </Formik>
  );
};

export default memo(LoginForm);

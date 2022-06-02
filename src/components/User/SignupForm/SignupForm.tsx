import React, { memo } from 'react';
import { Field, Formik } from 'formik';

import Input from 'components/Common/Input';
import Button from 'components/Common/Button';
import Dropdown from 'components/Common/Dropdown';
import signupValidator from 'validators/loginValidator';
import { PENDING, REJECTED } from 'constants/actionStatus';
import { signUp } from 'state/actions/userActions';
import { useStatus } from 'hooks';

export interface SignupFormFields {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  gender: string;
}

export interface SignupFormProps {
  onSubmit: (values: SignupFormFields) => void,
}

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const initialValues: SignupFormFields = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '', 
    gender: '',
 };

 const options = ['female','male','other'];

  const { status, error } = useStatus(signUp);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signupValidator}
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
              name="username"
              value={values.username}
              error={errors.username}
              onChange={handleChange}
              placeholder="username"
              label="Name"
              className="login-form-input"
            />
          </div>
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
              label="Password"
              className="login-form-input"
            />
          </div>
          <div>
            <Input
              name="password_confirmation"
              value={ values.password_confirmation } 
              error={ errors.password_confirmation }
              onChange={handleChange}
              type="password"
              placeholder="********"
              label="Confirm Password"
              className="login-form-input"
            />
          </div>
          <div>
            <Dropdown
              name="gender"
              label="Select"
              placeholder="Select your gender"
              error={ errors.gender}
              className="login-form-dropdown"
              options={ options }
            />
          </div>
          <Button
            onClick={handleSubmit}
            disabled={status === PENDING}
            title="sign up"
            className="login-button"
          />
        </form>
      )}
    </Formik>
  );
};

export default memo(SignupForm);

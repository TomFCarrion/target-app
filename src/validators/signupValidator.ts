import { object, string } from 'yup';

const signupValidator = object().shape({
  username: string().required('You must enter an username'),
  email: string().required('You must enter an email'),
  password: string().required('You must enter a password'),
  password_confirmation: string().required('You must re-enter the password'),
  gender: string().required('You must select a gender')
});

export default signupValidator;



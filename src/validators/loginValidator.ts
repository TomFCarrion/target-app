import { object, string } from 'yup';

const loginValidator = object().shape({
  email: string().required('You must enter an email'),
  password: string().required('You must enter a password')
});

export default loginValidator;

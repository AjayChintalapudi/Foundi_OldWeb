import * as Yup from 'yup';

export const EmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[a-z][a-z0-9]*@[a-z]+\.[a-z]{2,}$/)
    .required('Email is required'),
});

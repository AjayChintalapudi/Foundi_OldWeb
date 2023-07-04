import * as Yup from 'yup';

export const EmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
});

export const PassWordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/,
      'Password must have 6 charcaters, 1 special charcater,1 capital'
    ),
});

export const FullNameValidationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
});

export const SnoCodeValidationSchema = Yup.object().shape({
  snoCode: Yup.string().required('Sno Code Required'),
});

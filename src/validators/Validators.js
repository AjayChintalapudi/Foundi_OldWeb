import * as Yup from 'yup';

export const emailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
});

export const passWordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/,
      'Password must have 6 charcaters, 1 special charcater,1 capital'
    ),
});

export const fullNameValidationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
});

// SnoCodeValidationSchema

export const snoCodeValidationSchema = Yup.object().shape({
  snoCode: Yup.string().required('Sno Code Required'),
});

// FirstName Validation Schema
export const firstNameValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter the First Name'),
});

// LastName Validation Schema
export const lastNameValidationSchema = Yup.object().shape({
  lastName: Yup.string().required('Enter the Last Name'),
});

// PhoneNumber Validation Schema
export const phoneNumberValidationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\d+$/, 'Only numbers are allowed')
    .required('Enter the Phone Number'),
});

// Door And Address Validation Schema
export const doorAndAddressValidationSchema = Yup.object().shape({
  doorAndAddress: Yup.string().required('Enter the DoorNo And Address'),
});

// City Validation Schema

export const cityValidationSchema = Yup.object().shape({
  city: Yup.string().required('Enter the City'),
});

// ZipCode Validation Schema

export const zipCodeValidationSchema = Yup.object().shape({
  zipCode: Yup.string()
    .matches(/^\d+$/, 'Only numbers are allowed')
    .required('Enter the Zip Number'),
});

// State And Country Validation Schema

export const stateAndCountryValidationSchema = Yup.object().shape({
  stateAndCountry: Yup.string().required('Enter State And Country'),
});

// CardHolder Name Validation Schema

export const cardHolderNameValidationSchema = Yup.object().shape({
  cardHolderName: Yup.string().required('Enter the  Card Name'),
});

// Debit And Credit Validation Schema

export const debitAndCreditValidationSchema = Yup.object().shape({
  debitAndCredit: Yup.string()
    .matches(/^\d+$/, 'Only numbers are allowed')
    .required('Enter the Card Number'),
});

// Expiry Data Validation Schema

export const monthAndYearValidationSchema = Yup.object().shape({
  expiryDate: Yup.string()
    .matches(/^\d+\/\d+$/, 'Enter the field in the format "number/number"')
    .required('Enter the expiry date '),
});

// Cvv Validation Schema

export const cvvValidationSchema = Yup.object().shape({
  cvv: Yup.string()
    .matches(/^\d+$/, 'Only numbers are allowed')
    .required('Enter the Cvv Number'),
});

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

// SnoCodeValidationSchema

export const SnoCodeValidationSchema = Yup.object().shape({
  snoCode: Yup.string().required('Sno Code Required'),
});

// FirstName Validation Schema
export const FirstNameValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter the First Name'),
});

// LastName Validation Schema
export const LastNameValidationSchema = Yup.object().shape({
  lastName: Yup.string().required('Enter the Last Name'),
});

// PhoneNumber Validation Schema
export const PhoneNumberValidationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\d+$/, 'Only numbers are allowed')
    .required('Enter the Phone Number'),
});

// Door And Address Validation Schema
export const DoorAndAddressValidationSchema = Yup.object().shape({
  doorAndAddress: Yup.string().required('Enter the DoorNo And Address'),
});

// City Validation Schema

export const CityValidationSchema = Yup.object().shape({
  city: Yup.string().required('Enter the City'),
});

// ZipCode Validation Schema

export const ZipCodeValidationSchema = Yup.object().shape({
  zipCode: Yup.string()
    .matches(/^\d+$/, 'Only numbers are allowed')
    .required('Enter the Zip Number'),
});

// State And Country Validation Schema

export const StateAndCountryValidationSchema = Yup.object().shape({
  stateAndCountry: Yup.string().required('Enter State And Country'),
});

// CardHolder Name Validation Schema

export const CardHolderNameValidationSchema = Yup.object().shape({
  cardHolderName: Yup.string().required('Enter the  Card Name'),
});

// Debit And Credit Validation Schema

export const DebitAndCreditValidationSchema = Yup.object().shape({
  debitAndCredit: Yup.string()
    .matches(/^\d+$/, 'Only numbers are allowed')
    .required('Enter the Card Number'),
});

// Expiry Data Validation Schema

export const MonthAndYearValidationSchema = Yup.object().shape({
  expiryDate: Yup.string()
    .matches(/^\d+\/\d+$/, 'Enter the field in the format "number/number"')
    .required('Enter the expiry date '),
});

// Cvv Validation Schema

export const CvvValidationSchema = Yup.object().shape({
  cvv: Yup.string()
    .matches(/^\d+$/, 'Only numbers are allowed')
    .required('Enter the Cvv Number'),
});

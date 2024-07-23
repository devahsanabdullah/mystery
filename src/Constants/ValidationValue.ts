import * as Yup from 'yup';

export const initalValueRegister = {
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
};

export const userSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'First name must be at least 3 characters.')
    .required('Required'),
  lastName: Yup.string()
    .min(3, 'Last name must be at least 3 characters.')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .matches(/^(?!.*@[^,]*,)/, 'Email cannot contain commas')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], ' Passwords must match ')
    .required('Confirm Password is required'),
  userName: Yup.string()
    .min(3, 'User name must be at least 3 characters.')
    .required('Required'),
  phone: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Phone number is not valid')
    .required('Phone number is required'),
});
export const initalValuelogin = {
  email: '',
  password: '',
};
export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .matches(/^(?!.*@[^,]*,)/, 'Email cannot contain commas')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

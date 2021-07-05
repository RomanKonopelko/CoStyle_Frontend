import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .max(8, 'Password should be of maximum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string('Enter your password')
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm Password is required'),
  name: yup
    .string()
    .min(1, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
});

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert('Hello');
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            InputProps={{
              endAdornment: (
                <Icon color="action" position="start">
                  <EmailIcon />
                </Icon>
              ),
            }}
            id="email"
            name="email"
            label="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>

        <div>
          {' '}
          <TextField
            InputProps={{
              endAdornment: (
                <Icon color="action" position="start">
                  <LockIcon />
                </Icon>
              ),
            }}
            id="password"
            name="password"
            label="Пароль"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <div>
          <Button color="primary" variant="contained" type="submit">
            Вход
          </Button>
        </div>

        <div>
          <Button color="default" variant="contained">
            Регистрация
          </Button>
        </div>
      </form>
    </div>
  );
}
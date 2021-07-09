import React from 'react';
import { useDispatch } from 'react-redux';
import { OperationsAuth } from '../../redux/auth';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import './loginForm.scss';
import headerLogo from '../../images/header-logo.png';

import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .max(12, 'Password should be of maximum 12 characters length')
    .required('Password is required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const { email, password } = values;
      // console.log(email, password);
      dispatch(OperationsAuth.LoginUser({ email, password }));
    },
  });

  return (
    <div className="loginForm">
      <form onSubmit={formik.handleSubmit}>
        <div className="logo">
          <img className="img" src={headerLogo} alt="logo" />
          <h1 className="title">Wallet</h1>
        </div>
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
        <NavLink to={routes.register}>
          <div>
            <Button color="default" variant="contained">
              Регистрация
            </Button>
          </div>
        </NavLink>
      </form>
    </div>
  );
}

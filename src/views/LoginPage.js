import React, { useState } from 'react';

import { OperationsAuth } from '../redux/auth';
import { useDispatch } from 'react-redux';
import s from './views.module.css';

export default function RegisterView() {
  const [user, setUser] = useState({ email: '', password: '' });
  const { email, password } = user;

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const disputch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    disputch(OperationsAuth.LoginUser({ email, password }));
    reset();
  };

  const reset = () => {
    setUser({ email: '', password: '' });
  };

  return (
    <div className={s.container}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import { OperationsAuth } from '../redux/auth';

import { useDispatch } from 'react-redux';
import s from './views.module.css';

export default function RegisterView() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = user;

  const disputch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setUser(prevState => ({ ...prevState, [name]: value }));
        break;
      case 'email':
        setUser(prevState => ({ ...prevState, [name]: value }));
        break;
      case 'password':
        setUser(prevState => ({ ...prevState, [name]: value }));
        break;
      default:
        console.log("There aren't such data");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    disputch(OperationsAuth.registerUser({ name, email, password }));
    reset();
  };

  const reset = () => {
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Registraion</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './RegisterForm.css'

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="registerForm" onSubmit={registerUser}>

      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div>
        <label className='registerInputLabel' htmlFor="username">
          Username:
          <input
            className='registerInput'
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label className='registerInputLabel' htmlFor="password">
          Password:
          <input
            className='registerInput'
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      <div>
        <input className="registerButton" type="submit" name="submit" value="Register" />
      </div>

    </form>
  );
}

export default RegisterForm;

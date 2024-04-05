import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './LoginForm.css'

function LoginForm() {

  const dispatch = useDispatch();

  const errors = useSelector(store => store.errors);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  };
  
  return (
    <form className="loginForm" onSubmit={login}>

      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}

      <div>
        <label className='loginInputLabel' htmlFor="username">
          Email *
          <input
            className='loginInput'
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label className='loginInputLabel' htmlFor="password">
          Password *
          <input
            className='loginInput' 
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      <div>
        <input className="loginButton" type="submit" name="submit" value="Log In" />
      </div>

    </form>
  );
}

export default LoginForm;

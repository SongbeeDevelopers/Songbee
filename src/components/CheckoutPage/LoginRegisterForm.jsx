import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './LoginRegisterForm.css'


function LoginRegisterForm( {handleClose} ) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault()
    if (errors.loginMessage) { dispatch( {type: 'CLEAR_LOGIN_ERROR'} ) }
    if (errors.registrationMessage) { dispatch( {type: 'CLEAR_REGISTRATION_ERROR'} ) }

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
          handleClose: handleClose
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  };

  const registerUser = (e) => {
    e.preventDefault()
    if (errors.loginMessage) { dispatch( {type: 'CLEAR_LOGIN_ERROR'} ) }
    if (errors.registrationMessage) { dispatch( {type: 'CLEAR_REGISTRATION_ERROR'} ) }

    if (username && password) {
      dispatch({
          type: 'REGISTER',
          payload: {
          username: username,
          password: password,
          handleClose: handleClose
          },
      });
    } else {
      dispatch({ type: 'REGISTRATION_FAILED'})
    }
  };
    

  return (
      <form className="registerForm" onSubmit={registerUser}>

      {/* error messages */}
      {errors.registrationMessage && (
          <h3 className="alert" role="alert">
              {errors.registrationMessage}
          </h3>
      )}
      {errors.loginMessage && (
          <h3 className="alert" role="alert">
              {errors.loginMessage}
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
        <button
          className="loginButton"
          onClick={login}
        >
          Log In
        </button>
      </div>      

      <div>
        <button 
          className="registerButton"
          onClick={registerUser}
        >
          Register
        </button>
      </div>

    </form>
  )
}

export default LoginRegisterForm

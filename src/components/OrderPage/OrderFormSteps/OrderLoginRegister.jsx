import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../LoginRegisterForm/LoginRegisterForm.css'

function OrderLoginRegister() {
  
  const dispatch = useDispatch();

  // state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);

  const login = (event) => {
    event.preventDefault()

    // error messages
    if (errors.loginMessage) { dispatch( {type: 'CLEAR_LOGIN_ERROR'} ) }
    if (errors.registrationMessage) { dispatch( {type: 'CLEAR_REGISTRATION_ERROR'} ) }

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  };

  const registerUser = (event) => {
    event.preventDefault()

    // error messages
    if (errors.loginMessage) { dispatch( {type: 'CLEAR_LOGIN_ERROR'} ) }
    if (errors.registrationMessage) { dispatch( {type: 'CLEAR_REGISTRATION_ERROR'} ) }

    if (username && password) {
      dispatch({
          type: 'REGISTER',
          payload: {
          username: username,
          password: password
          },
      });
    } else {
      dispatch({ type: 'REGISTRATION_FAILED'})
    }
  };
    

  return (
      <div className="loginRegisterForm">

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
          Email:
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
          className="loginRegSubmit"
          onClick={() => login(event)}
        >
          Log In
        </button>
      </div>      

      <div>
        <button 
          className="loginRegSubmit"
          onClick={() => registerUser(event)}
        >
          Register
        </button>
      </div>

    </div>
  )
}

export default OrderLoginRegister
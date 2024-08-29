import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from "@mui/material";

import '../../LoginRegisterForm/LoginRegisterForm.css'

function OrderLoginRegister() {
  
  const dispatch = useDispatch();

  // state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const data = useSelector(store => store.requestData)

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
            value={data.email}
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
      <Button onClick={login} sx={{ ml: '25%', mt: '20px', height: 35, width: 150, backgroundColor: "#feaf17", color: "black" }}>
        LOG IN
      </Button>
      </div>      

      <div>
      <Button onClick={registerUser} sx={{ ml: '25%', mt: '20px', height: 35, width: 150, backgroundColor: "#feaf17", color: "black" }}>
        REGISTER
      </Button>
      </div>

    </div>
  )
}

export default OrderLoginRegister

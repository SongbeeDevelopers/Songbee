import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { Button } from "@mui/material";
import { motion } from "framer-motion";

import '../LoginRegisterForm/LoginRegisterForm.css'

function OrderLoginRegister({ routeVariants }) {
  
  const dispatch = useDispatch();
  const history = useHistory();

  // state
  const errors = useSelector(store => store.errors);
  const data = useSelector(store => store.requestData);
  const user = useSelector(store => store.user)
  const [username, setUsername] = useState(data.email);
  const [password, setPassword] = useState('');

  console.log("data", data)

  // if(user.id){
  //   dispatch({
  //     type: "CREATE_SONG_REQUEST",
  //     payload: {
  //       history: history,
  //       data: data,
  //     },
  //   });
  // }

  const login = (event) => {
    event.preventDefault()

    // error messages
    if (errors.loginMessage) { dispatch( {type: 'CLEAR_LOGIN_ERROR'} ) }
    if (errors.registrationMessage) { dispatch( {type: 'CLEAR_REGISTRATION_ERROR'} ) }

    if (username && password) {
      dispatch({
        type: 'LOGIN_AT_CHECKOUT',
        payload: {
          userData: {
            username: username,
            password: password
          },
          requestData: {
            history: history,
            data: data,
          }
        }
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
          type: 'REGISTER_AT_CHECKOUT',
          payload: {
            userData: {
              username: username,
              password: password
            },
            requestData: {
              history: history,
              data: data,
            }
          }
      });
    } else {
      dispatch({ type: 'REGISTRATION_FAILED'})
    }
  };
    

  return (
    <motion.div
    className="reqFormPage"
    variants={routeVariants}
    initial="initial"
    animate="final"
  >
    <h1>Login or Register to Continue to Checkout</h1>
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
    </motion.div>
  )
}

export default OrderLoginRegister

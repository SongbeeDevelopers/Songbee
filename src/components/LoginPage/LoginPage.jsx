import React from 'react';
import { useHistory } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';

import { motion } from 'framer-motion';

import './LoginPage.css'


function LoginPage({ routeVariants }) {

  const history = useHistory();

  return (
    <motion.div
      className='container'
      variants={routeVariants}
      initial='initial'
      animate='final'
    >
      <h1 className='loginHeader'>Songbee Account Login</h1>

      <LoginForm />

      <button
        type="button"
        className="loginRegButton"
        onClick={() => {history.push('/register')}}
      >
        Register
      </button>
    </motion.div>
  );
}

export default LoginPage;

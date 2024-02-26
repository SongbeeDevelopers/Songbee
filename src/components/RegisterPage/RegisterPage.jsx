import React from 'react';
import { useHistory } from 'react-router-dom';

import RegisterForm from './RegisterForm/RegisterForm';

import { motion } from 'framer-motion';

import './RegisterPage.css';


function RegisterPage({ routeVariants }) {

  const history = useHistory();

  return (
    <motion.div
      variants={routeVariants}
      initial='initial'
      animate='final'
    >
      <h1 className='registerHeader'>Register User</h1>

      <RegisterForm />

      <button
        type="button"
        className="regLoginButton"
        onClick={() => {
          history.push('/login');
        }}
      >Login</button>
    </motion.div>
  );
}

export default RegisterPage;

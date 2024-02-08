import React from 'react';
import { useHistory } from 'react-router-dom';

import RegisterForm from '../RegisterForm/RegisterForm';

import './RegisterPage.css';


function RegisterPage() {

  const history = useHistory();

  return (
    <div>
      <h1 className='registerHeader'>Register User</h1>

      <RegisterForm />

      <button
        type="button"
        className="regLoginButton"
        onClick={() => {
          history.push('/login');
        }}
      >Login</button>
    </div>
  );
}

export default RegisterPage;

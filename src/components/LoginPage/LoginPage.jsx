import React from 'react';
import { useHistory } from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm';

import './LoginPage.css'


function LoginPage() {

  const history = useHistory();

  return (
    <div>
      <h1 className='loginHeader'>Songbee Account Login</h1>

      <LoginForm />

      <button
        type="button"
        className="loginRegButton"
        onClick={() => {history.push('/registration')}}
      >
        Register
      </button>
    </div>
  );
}

export default LoginPage;

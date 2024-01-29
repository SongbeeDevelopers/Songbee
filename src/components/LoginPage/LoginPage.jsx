import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import './LoginPage.css'

function LoginPage() {
  const history = useHistory();

  return (
    <div className='loginContainer'>

      <h1 className='loginHeader'>Songbee Account Login</h1>

      <LoginForm />

      <button
        type="button"
        className="regButton"
        onClick={() => {history.push('/registration')}}
      >
        Register
      </button>

    </div>
  );
}

export default LoginPage;

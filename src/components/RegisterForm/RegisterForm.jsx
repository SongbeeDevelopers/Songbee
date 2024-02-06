import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import './RegisterForm.css'


function RegisterForm() {

  // hooks
  const dispatch = useDispatch();

  // local state for inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [newsletterOptIn, setNewsletterOptIn] = useState(false)

  // global state
  const errors = useSelector((store) => store.errors);

  // checkbox logic
  const handleCheckbox = (selection) => {
    if (selection === 'terms') {
      setAgreeToTerms(!agreeToTerms)
    }
    if (selection === 'newsletter') {
      setNewsletterOptIn(!newsletterOptIn)
    }
  }

  // submission logic
  const registerUser = (event) => {
    event.preventDefault();
    // adds email to mailchimp list
    if (newsletterOptIn === true) {
      dispatch({
        type: 'ADD_EMAIL',
        payload: { email_address: username}
      })
    }
    // registers user to database
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  };


  return (
    <form className="registerForm" onSubmit={registerUser}>

      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
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
        <input
          value={agreeToTerms}
          onClick={() => handleCheckbox('terms')}
          type='checkbox'
          name='agreeToTerms'
          required
        ></input>
        <label for="agreeToTerms">
          By creating an account, I agree to this website's privacy policy and terms of service
        </label>
      </div>

      <div>
        <input
          value={newsletterOptIn}
          onClick={() => handleCheckbox('newsletter')}
          type='checkbox'
          name='newsletterOptIn'
        ></input>
        <label for="newsletterOptIn">
          I consent to receive marketing emails.
        </label>
      </div>

      <div>
        <input className="registerButton" type="submit" name="submit" value="Register" />
      </div>

    </form>

  );
}

export default RegisterForm;

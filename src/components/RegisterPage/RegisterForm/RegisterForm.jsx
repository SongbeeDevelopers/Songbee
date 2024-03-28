import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import './RegisterForm.css'


function RegisterForm() {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [newsletterOptIn, setNewsletterOptIn] = useState(false)
  const [invalidEmailMsg, setInvalidEmailMsg] = useState('')

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

    // highlights email req if not passed
    if (password.length < 8) {
      let warning = document.getElementById("register-warning")
      warning.classList.add("register-warning")
    }

    // invalid email message
    if (!validator.isEmail(username)) {
      setInvalidEmailMsg('Please enter a valid email address.')
    } else {
      setInvalidEmailMsg('')
    }
    
    // registers user to database
    if (password.length >= 8 && validator.isEmail(username)) {
      dispatch({
        type: 'REGISTER',
        payload: {
          username: username,
          password: password,
        },
      });
    }
  };


  return (
    <form className="registerForm" onSubmit={registerUser}>

      {/* error message */}
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      {/* email input */}
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
        {invalidEmailMsg && <p className='register-verification register-warning'>{invalidEmailMsg}</p>}
      </div>

      {/* password input */}
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
        {/* error message */}
        <p id="register-warning" className='register-verification'>Password must be at least 8 characters.</p>
      </div>

      {/* terms checkbox */}
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

      {/* newsletter checkbox */}
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

      {/* submit button */}
      <div>
        <input className="registerButton" type="submit" name="submit" value="Register" />
      </div>

    </form>

  );
}

export default RegisterForm;

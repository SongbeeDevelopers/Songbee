import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import HeroSection from './Hero';
// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
     <HeroSection/>
    </div>
  );
}

export default LandingPage;

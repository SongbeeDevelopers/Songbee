import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComponentRouter from './ComponentRouter.jsx';
import LocationProvider from './LocationProvider.jsx';

import './App.css';


function App() {

  const dispatch = useDispatch();

  // fetch user on launch
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
        <Header />
        <div className='container'>
          <LocationProvider>
            <ComponentRouter />
          </LocationProvider>
        </div>
        <Footer />
    </Router>
  );
}

export default App;

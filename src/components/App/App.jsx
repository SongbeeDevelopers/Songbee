import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

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
          <LocationProvider>
            <ComponentRouter />
          </LocationProvider>
    </Router>
  );
}

export default App;

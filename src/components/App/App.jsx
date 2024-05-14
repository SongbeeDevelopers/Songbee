import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import ComponentRouter from './ComponentRouter.jsx';
import LocationProvider from './LocationProvider.jsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Poppins from "../../../public/Poppins.ttf"
import './App.css';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FEAF17'
      },
      secondary: {
        main: '#fff4df'
      }
    },
    typography: {
      fontFamily: 'Poppins, Arial'
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-display: swap;
            src: local('Poppins'), local('Poppins-Regular'), url(${Poppins}), format('ttf);
          }
        `
      }
    }
  })

  const dispatch = useDispatch();

  // fetch user on launch
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <LocationProvider>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ComponentRouter />
          </LocalizationProvider>
        </ThemeProvider>
      </LocationProvider>
    </Router>
  );
}

export default App;

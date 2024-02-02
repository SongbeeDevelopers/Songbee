import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import UserPage from '../UserPage/UserPage';
import AdminPage from '../AdminPage/AdminPage';

import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import LandingPage from '../LandingPage/LandingPage';

import OrderPage from '../OrderPage/OrderPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import SongRequestPage from '../SongRequestPage/SongRequestPage';
import UserDetails from '../UserDetails/UserDetailsPage';

import FAQ from '../FAQ/FAQ';
import AboutPage from '../AboutPage/AboutPage'; // needed?
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import QualityGuarantee from '../QualityGuarantee/QualityGuarantee';
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>

        <Header />
        
        <Switch>

          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          <Route
            exact
            path="/home"
          >
            <LandingPage />
          </Route>


          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
           
          </ProtectedRoute>


          <ProtectedRoute
            exact
            path="/order"
          >
            <OrderPage />
          </ProtectedRoute>


          <ProtectedRoute
            exact
            path="/checkout"
          >
            <CheckoutPage />
          </ProtectedRoute>
          
          <Route
          exact
          path="/details/:id"
          >
            <UserDetails />
          </Route> 

          
          <Route
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/requestform/:id"
          >
            <SongRequestPage />
          </Route>


          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>


          <Route
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/terms"
          >
            <TermsAndConditions />
          </Route>


          <Route
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/faq"
          >
            <FAQ />
          </Route>


          <Route
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/guarantee"
          >
            <QualityGuarantee />
          </Route>


          <Route
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/privacy"
          >
            <PrivacyPolicy />
          </Route>


          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />  
            }
          </Route>


          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />    
            }
          </Route>


          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/admin"
          >
            <AdminPage />
          </ProtectedRoute>


          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;

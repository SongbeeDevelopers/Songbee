import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import QualityGuarantee from '../QualityGuarantee/QualityGuarantee';
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';


function ComponentRouter() {

    const location = useLocation()
    console.log(location)

    const user = useSelector(store => store.user);

    const routeVariants = {
        initial: {
            opacity: 0
        },
        final: {
            opacity: 1
        }
    }


    return (
        <Switch location={location} key={location.key}>
            {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
            <Redirect exact from="/" to="/home" />

            <Route exact path="/home">
              <LandingPage routeVariants={routeVariants} />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
              Visiting localhost:5173/user will show the UserPage if the user is logged in.
              If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
              Even though it seems like they are different pages, the user is always on localhost:5173/user */}
            <ProtectedRoute exact path="/user">
              <UserPage routeVariants={routeVariants} />
            </ProtectedRoute>

            <Route exact path="/order">
              <OrderPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/checkout">
              <CheckoutPage routeVariants={routeVariants} />
            </Route>
            
            <Route exact path="/details/:id">
              <UserDetails routeVariants={routeVariants} />
            </Route>
            
            <Route exact path="/requestform/:id">
              <SongRequestPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/terms">
              <TermsAndConditions routeVariants={routeVariants} />
            </Route>

            <Route exact path="/faq">
              <FAQ routeVariants={routeVariants} />
            </Route>

            <Route exact path="/guarantee">
              <QualityGuarantee routeVariants={routeVariants} />
            </Route>

            <Route exact path="/privacy">
              <PrivacyPolicy routeVariants={routeVariants} />
            </Route>

            <Route exact path="/login">
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the login page
                <LoginPage routeVariants={routeVariants} />  
              }
            </Route>

            <Route exact path="/registration">
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the registration page
                <RegisterPage routeVariants={routeVariants} />    
              }
            </Route>

            {/* this needs to be further protected */}
            <ProtectedRoute exact path="/admin">
              <AdminPage routeVariants={routeVariants} />
            </ProtectedRoute>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
    )
}

export default ComponentRouter
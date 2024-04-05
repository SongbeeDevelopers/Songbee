import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

// login/reg
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

// home
import LandingPage from '../LandingPage/LandingPage';

// order process
import OrderPage from '../OrderPage/OrderPage';
import SongRequestPage from '../SongRequestPage/SongRequestPage';
import NewOrderPage from '../OrderPage/NewOrderPage';
import CreationPage from '../CreationPage/CreationPage';

// user functionality
import UserPage from '../UserPage/UserPage';
import AdminPage from '../AdminPage/AdminPage';
import EditRequestPage from '../EditRequestPage/EditRequestPage';
import UserDetails from '../UserPage/UserPageTabs/UserDetailsTab/UserDetailsPage';

// information pages
import FaqPage from '../InfoPages/FaqPage';
import FaqPageSbJR from '../InfoPages/FaqPageSbJR'
import PrivacyPolicyPage from '../InfoPages/PrivacyPolicyPage';
import QualityGuaranteePage from '../InfoPages/QualityGuaranteePage';
import TermsAndConditionsPage from '../InfoPages/TermsAndConditionsPage';

// artist pages
import JoinArtistPage from '../JoinArtistPage/JoinArtistPage';
import ArtistCommunity from '../JoinArtistPage/ArtistCommunity';
import ArtistProcess from '../JoinArtistPage/ArtistProcess';
import MichaelBioPage from '../ArtistBioPages/MichaelBioPage';
import BerchBioPage from '../ArtistBioPages/BerchBioPage';
import PerrinBioPage from '../ArtistBioPages/PerrinBioPage';

// 404
import NotFound from '../NotFoundPage/NotFoundPage';


import ArtistRequests from '../ArtistRequests/ArtistRequests';
import JrEditRequestPage from '../EditRequestPage/JrEditRequest';

// jr pages
import JrLandingPage from '../JrLandingPage/JrLandingPage';
import JrCheckoutPage from '../JrRequestPage/JrRequestPage';


function ComponentRouter() {

    const location = useLocation()

    const user = useSelector(store => store.user);

    // styling for route fade-ins 
    const routeVariants = {
        initial: {
            opacity: 0
        },
        final: {
            opacity: 1
        }
    }
    const landingVariants = {
      initial: {
        opacity: 0,
        y: "50px",
      },
      final: {
        opacity: 1,
        y: "0px",
        transition: {
          duration: 0.5,
          delay: 0.25,
        },
      },
    };
    

    return (
        <Switch location={location} key={location.key}>
            {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
            <Redirect exact from="/" to="/home" />

            <Route exact path="/home">
              <LandingPage routeVariants={landingVariants} />
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

            <Route exact path="/neworder">
              <NewOrderPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/jrcheckout">
              <JrCheckoutPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/join-artist">
              <JoinArtistPage routeVariants={routeVariants} />
            </Route>


            <Route exact path="/artist-requests">
              <ArtistRequests routeVariants={routeVariants} />
            </Route>
            
            
            <Route exact path="/requestform/:id">
              <SongRequestPage routeVariants={routeVariants} />
            </Route>

            <ProtectedRoute exact path="/request/edit/:id">
              <EditRequestPage routeVariants={routeVariants} />
            </ProtectedRoute>

            <ProtectedRoute exact path="/jr-request/edit/:id">
              <JrEditRequestPage routeVariants={routeVariants} />
            </ProtectedRoute>

            <ProtectedRoute exact path="/details/:id">
              <UserDetails routeVariants={routeVariants} />
            </ProtectedRoute>

            <Route exact path="/terms">
              <TermsAndConditionsPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/faq">
              <FaqPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/faqSbJR">
              <FaqPageSbJR routeVariants={routeVariants} />
            </Route>

            <Route exact path="/songbeejr">
              <JrLandingPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/artist-community">
              <ArtistCommunity routeVariants={routeVariants} />
            </Route>

            <Route exact path="/michaelBio">
              <MichaelBioPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/BerchBio">
              <BerchBioPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/PerrinBio">
              <PerrinBioPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/artist-process">
              <ArtistProcess routeVariants={routeVariants} />
            </Route>

            <Route exact path="/guarantee">
              <QualityGuaranteePage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/privacy">
              <PrivacyPolicyPage routeVariants={routeVariants} />
            </Route>

            <Route exact path="/created/:delivery_days/:extra_verse/:streaming">
              <CreationPage routeVariants={routeVariants} />
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
              <NotFound />
            </Route>
          </Switch>
    )
}

export default ComponentRouter

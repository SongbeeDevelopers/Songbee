import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import Banner from '../Banner/Banner'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
import FinalQuestions from '../OrderPage/FinalQuestions';

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
import JrHeader from '../JrHeader/JrHeader';
import JrFooter from '../JrFooter/JrFooter'
import LearningPacksPage from '../LearningPacksPage/LearningPacksPage';



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
    <>
      {location.pathname === "/home" && <Banner />}

      {/* shows main header on main routes */}
      {location.pathname === "/home" && <Header />}
      {location.pathname === "/user" && <Header />}
      {location.pathname === "/admin" && <Header />}
      {location.pathname === "/login" && <Header />}
      {location.pathname === "/register" && <Header />}
      {location.pathname === "/order" && <Header />}
      {location.pathname === "/neworder" && <Header />}
      {location.pathname === "/requestform/:id" && <Header />}
      {location.pathname === "/request/edit/:id" && <Header />}
      {location.pathname === "/details/:id" && <Header />}
      {location.pathname === "/created/:delivery_days/:extra_verse/:streaming" && <Header />}
      {location.pathname === "/artist-community" && <Header />}
      {location.pathname === "/join-artist" && <Header />}
      {location.pathname === "/artist-requests" && <Header />}
      {location.pathname === "/artist-process" && <Header />}
      {location.pathname === "/faq" && <Header />}
      {location.pathname === "/terms" && <Header />}
      {location.pathname === "/guarantee" && <Header />}
      {location.pathname === "/privacy" && <Header />}

      {/* shows jr header on jr routes */}
      {location.pathname === "/songbeejr" && <JrHeader /> }
      {location.pathname === "/jrcheckout" && <JrHeader /> }
      {location.pathname === "/jr-request/edit/:id" && <JrHeader /> }
      {location.pathname === "/faqSbJR" && <JrHeader /> }
      
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
  

        <ProtectedRoute exact path="/user" allowedUserClasses={[1, 2, 3]}>
          <UserPage routeVariants={routeVariants} />
        </ProtectedRoute>

        <Route exact path="/order">
          <OrderPage routeVariants={routeVariants} />
        </Route>

        <Route exact path="/neworder">
          <NewOrderPage routeVariants={routeVariants} />
        </Route>

        <Route exact path="/finalquestions">
          <FinalQuestions routeVariants={routeVariants} />
        </Route>

        <Route exact path="/jrcheckout">
          <JrCheckoutPage routeVariants={routeVariants} />
        </Route>

        <Route exact path="/join-artist">
          <JoinArtistPage routeVariants={routeVariants} />
        </Route>


        <ProtectedRoute exact path="/artist-requests" allowedUserClasses={[2, 3]} >
          <ArtistRequests routeVariants={routeVariants} />
        </ProtectedRoute>


        <Route exact path="/requestform/:id">
          <SongRequestPage routeVariants={routeVariants} />
        </Route>

        <ProtectedRoute exact path="/request/edit/:id" allowedUserClasses={[1, 2, 3]} >
          <EditRequestPage routeVariants={routeVariants} />
        </ProtectedRoute>

        <ProtectedRoute exact path="/jr-request/edit/:id" allowedUserClasses={[1, 2, 3]}>
          <JrEditRequestPage routeVariants={routeVariants} />
        </ProtectedRoute>

        <ProtectedRoute exact path="/details/:id" allowedUserClasses={[2, 3]}>
          <UserDetails routeVariants={routeVariants} />
        </ProtectedRoute>

        <Route exact path="/terms" >
          <TermsAndConditionsPage routeVariants={routeVariants} />
        </Route>

        <Route exact path="/faq">
          <FaqPage routeVariants={routeVariants} />
        </Route>

        <Route exact path="/faqSbJR">
          <FaqPageSbJR routeVariants={routeVariants} />
        </Route>


        <Route exact path="/learning-packs">
              <LearningPacksPage routeVariants={routeVariants} />
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
        <ProtectedRoute exact path="/admin" allowedUserClasses={[3]}>
          <AdminPage routeVariants={routeVariants} />
        </ProtectedRoute>

        {/* If none of the other routes matched, we will show a 404. */}
        <Route>
          <NotFound />
        </Route>
      </Switch>

      {/* shows main footer on main routes */}
      {location.pathname === "/home" && <Footer />}
      {location.pathname === "/user" && <Footer />}
      {location.pathname === "/admin" && <Footer />}
      {location.pathname === "/login" && <Footer />}
      {location.pathname === "/register" && <Footer />}
      {location.pathname === "/order" && <Footer />}
      {location.pathname === "/neworder" && <Footer />}
      {location.pathname === "/requestform/:id" && <Footer />}
      {location.pathname === "/request/edit/:id" && <Footer />}
      {location.pathname === "/details/:id" && <Footer />}
      {location.pathname === "/created/:delivery_days/:extra_verse/:streaming" && <Footer />}
      {location.pathname === "/artist-community" && <Footer />}
      {location.pathname === "/join-artist" && <Footer />}
      {location.pathname === "/artist-requests" && <Footer />}
      {location.pathname === "/artist-process" && <Footer />}
      {location.pathname === "/faq" && <Footer />}
      {location.pathname === "/terms" && <Footer />}
      {location.pathname === "/guarantee" && <Footer />}
      {location.pathname === "/privacy" && <Footer />}
      
      {/* shows jr footer on jr routes */}
      {location.pathname === "/songbeejr" && <JrFooter /> }
      {location.pathname === "/jrcheckout" && <JrFooter /> }
      {location.pathname === "/jr-request/edit/:id" && <JrFooter /> }
      {location.pathname === "/faqSbJR" && <JrFooter /> }
    </>
  )

}

export default ComponentRouter
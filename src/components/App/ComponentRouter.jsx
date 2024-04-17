import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// login/reg
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

// home
import LandingPage from "../LandingPage/LandingPage";

// order process
import OrderPage from "../OrderPage/OrderPage";
import SongRequestPage from "../SongRequestPage/SongRequestPage";
import NewOrderPage from "../OrderPage/NewOrderPage";
import CreationPage from "../CreationPage/CreationPage";
import FinalQuestions from "../OrderPage/FinalQuestions";

// user functionality
import CustomerPortal from "../CustomerPortal/CustomerPortal";
import AdminPage from "../AdminPage/AdminPage";
import EditRequestPage from "../EditRequestPage/EditRequestPage";
import RequestDetails from "../RequestDetails/RequestDetails"

// information pages
import FaqPage from "../InfoPages/FaqPage";
import FaqPageSbJR from "../InfoPages/FaqPageSbJR";
import PrivacyPolicyPage from "../InfoPages/PrivacyPolicyPage";
import QualityGuaranteePage from "../InfoPages/QualityGuaranteePage";
import TermsAndConditionsPage from "../InfoPages/TermsAndConditionsPage";

// artist pages
import ArtistPortal from "../ArtistPortal/ArtistPortal"
import JoinArtistPage from "../JoinArtistPage/JoinArtistPage";
import ArtistCommunity from "../JoinArtistPage/ArtistCommunity";
import ArtistProcess from "../JoinArtistPage/ArtistProcess";
import ArtistBioPage from '../ArtistBioPages/ArtistBioPage';

// 404
import NotFound from "../NotFoundPage/NotFoundPage";

import ArtistRequests from "../ArtistRequests/ArtistRequests";
import JrEditRequestPage from "../EditRequestPage/JrEditRequest";

// jr pages
import JrLandingPage from "../JrLandingPage/JrLandingPage";
import JrCheckoutPage from "../JrRequestPage/JrRequestPage";
import JrHeader from "../JrHeader/JrHeader";
import JrFooter from "../JrFooter/JrFooter";
import LearningPacksPage from "../LearningPacksPage/PacksPage";
import LearningPacksHeader from "../Header/LearningPacksHeader";
import LearningPackView from "../LearningPackView/PackView";

function ComponentRouter() {
  const location = useLocation();
  const user = useSelector((store) => store.user);

  // styling for route fade-ins
  const routeVariants = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
    },
  };
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

// /:id NOT WORKING!!!
  return (
    <>
      {location.pathname === "/home"  && <Banner />}

      {/* shows main header on main routes */}
      {
        (location.pathname === "/home" || 
        // accounts
        location.pathname === "/user" ||
        location.pathname === "/artist" ||
        location.pathname === "/admin" ||
        // login/reg
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        // order
        location.pathname === "/order" ||
        location.pathname === "/neworder" ||
        location.pathname === "/requestform/:id" ||
        location.pathname === "/details/:id" ||
        location.pathname === "/created/:delivery_days/:extra_verse/:streaming" ||
        // artists
        location.pathname === "/artist-community" ||
        location.pathname === "/join-artist" ||
        location.pathname === "/artist-requests" ||
        location.pathname === "/artist-process" ||
        // info
        location.pathname === "/faq" ||
        location.pathname === "/terms" ||
        location.pathname === "/guarantee" ||
        location.pathname === "/privacy"
        ) && <Header />
      }

      {/* shows jr header on jr routes */}
      {
        (location.pathname === "/songbeejr" ||
        location.pathname === "/jrcheckout" ||
        location.pathname === "/jr-request/edit/:id" ||
        location.pathname === "/faqSbJR"
        ) && <JrHeader />
      }
      
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
          <CustomerPortal routeVariants={routeVariants} />
        </ProtectedRoute>

        <Route exact path="/order">
          <OrderPage routeVariants={routeVariants} />
        </Route>

        <Route exact path="/neworder">
          <NewOrderPage routeVariants={routeVariants} />
        </Route>

        <Route exact path="/finalquestions/:id">
          <FinalQuestions routeVariants={routeVariants} />
        </Route>

        <Route exact path="/jrcheckout">
          <JrCheckoutPage routeVariants={routeVariants} />
        </Route>

        <Route exact path="/join-artist">
          <JoinArtistPage routeVariants={routeVariants} />
        </Route>


        <ProtectedRoute exact path="/artist-requests" allowedUserClasses={[2, 3]}>
          <ArtistRequests routeVariants={routeVariants} />
        </ProtectedRoute>

        <Route exact path="/requestform/:id">
          <SongRequestPage routeVariants={routeVariants} />
        </Route>

        <ProtectedRoute
          exact
          path="/request/edit/:id"
          allowedUserClasses={[1, 2, 3]}
        >
          <EditRequestPage routeVariants={routeVariants} />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/jr-request/edit/:id"
          allowedUserClasses={[1, 2, 3]}
        >
          <JrEditRequestPage routeVariants={routeVariants} />
        </ProtectedRoute>

        <ProtectedRoute exact path="/details/:id" allowedUserClasses={[1, 2, 3]}>
          <RequestDetails routeVariants={routeVariants} />
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

        <Route exact path="/learning-packs">
          <LearningPacksHeader />
          <LearningPacksPage routeVariants={routeVariants} />
        </Route>

        <Route exact path="/learning-packs/:slug">
          <LearningPacksHeader />
          <LearningPackView routeVariants={routeVariants} />
        </Route>

        <Route exact path="/songbeejr">
          <JrLandingPage routeVariants={routeVariants} />
        </Route>

        <Route exact path="/artists">
          <ArtistCommunity routeVariants={routeVariants} />
        </Route>

        <Route exact path="/ArtistBioPage/:id">
          <ArtistBioPage routeVariants={routeVariants} />
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
          {user.id ? (
            // If the user is already logged in,
            // redirect to the /user page
            <Redirect to="/user" />
          ) : (
            // Otherwise, show the login page
            <LoginPage routeVariants={routeVariants} />
          )}
        </Route>

        <Route exact path="/register">
          {user.id ? (
            // If the user is already logged in, 
            // redirect them to the /user page
            <Redirect to="/user" />
          ) : (
            // Otherwise, show the registration page
            <RegisterPage routeVariants={routeVariants} />
          )}
        </Route>

        {/* this needs to be further protected */}
        <ProtectedRoute exact path="/admin" allowedUserClasses={[3]}>
          <AdminPage routeVariants={routeVariants} />
        </ProtectedRoute>

        <ProtectedRoute exact path="/artist" allowedUserClasses={[2, 3]}>
          <ArtistPortal routeVariants={routeVariants} />
        </ProtectedRoute>
        
        <Route exact path="/artists">
          <ArtistBioPage routeVariants={routeVariants} />
        </Route>

        {/* If none of the other routes matched, we will show a 404. */}
        <Route>
          <NotFound />
        </Route>
      </Switch>

      {/* shows main footer on main routes */}
      {
        (location.pathname === "/home" || 
        // accounts
        location.pathname === "/user" ||
        location.pathname === "/artist" ||
        location.pathname === "/admin" ||
        // login/reg
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        // order
        location.pathname === "/order" ||
        location.pathname === "/neworder" ||
        location.pathname === "/requestform/:id" ||
        location.pathname === "/details/:id" ||
        location.pathname === "/created/:delivery_days/:extra_verse/:streaming" ||
        // artists
        location.pathname === "/artist-community" ||
        location.pathname === "/join-artist" ||
        location.pathname === "/artist-requests" ||
        location.pathname === "/artist-process" ||
        // info
        location.pathname === "/faq" ||
        location.pathname === "/terms" ||
        location.pathname === "/guarantee" ||
        location.pathname === "/privacy"
        ) && <Footer />
      }
      
      {/* shows jr footer on jr routes */}
      {
        (location.pathname === "/songbeejr" ||
        location.pathname === "/jrcheckout" ||
        location.pathname === "/jr-request/edit/:id" ||
        location.pathname === "/faqSbJR"
        ) && <JrFooter />
      }
    </>
  );
}

export default ComponentRouter;

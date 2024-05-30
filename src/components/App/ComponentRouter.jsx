import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

// utility
import ProtectedRoute from "./ProtectedRoute";
import MainRoute from "./MainRoute"
import JrRoute from "./JrRoute";
import ScrollToTop from "./ScrollToTop";
import ScrollToAnchor from "./ScrollToAnchor"

// login/reg
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

// home
import LandingPage from "../LandingPage/LandingPage";

// order process
import OrderPage from "../OrderPage/OrderPage";
import CreationPage from "../CreationPage/CreationPage";
import FinalQuestions from "../FinalQuestions/FinalQuestions";

// user functionality
import CustomerPortal from "../UserPortals/CustomerPortal/CustomerPortal";
import AdminPortal from "../UserPortals/AdminPortal/AdminPortal";
import ArtistPortal from "../UserPortals/ArtistPortal/ArtistPortal"
import RequestDetails from "../RequestDetails/RequestDetails"

// information pages
import FaqPage from "../InfoPages/FaqPage";
import FaqPageSbJR from "../InfoPages/FaqPageSbJR";
import PrivacyPolicyPage from "../InfoPages/PrivacyPolicyPage";
import QualityGuaranteePage from "../InfoPages/QualityGuaranteePage";
import TermsAndConditionsPage from "../InfoPages/TermsAndConditionsPage";

// artist pages
import ArtistCommunity from "../ArtistPages/ArtistCommunity/ArtistCommunity";
import ArtistBioPage from '../ArtistPages/ArtistBioPage/ArtistBioPage';
import JoinArtistPage from "../JoinArtistPage/JoinArtistPage";
import ArtistProcess from "../JoinArtistPage/ArtistProcess";

// 404
import NotFound from "../NotFoundPage/NotFoundPage";

// jr pages
import JrLandingPage from "../JrLandingPage/JrLandingPage";
import JrEditRequestPage from "../EditRequestPage/JrEditRequest";
import JrCheckoutPage from "../JrRequestPage/JrRequestPage";
import LearningPacksPage from "../LearningPacksPage/LearningPacksPage";
import LearningPackView from "../LearningPackView/PackView";
import SchoolsInspiration from "../SchoolsAndGroups/SchoolsAndGroups";
import WhySongbee from "../WhySongbee/WhySongbee";
import WhatsIncluded from "../WhatsIncludedSchools/WhatsIncluded";
import DiveIntoBenefits from "../JrBenefits/JrBenefits";
import ChatPage from "../ChatComponents/ChatPage";
import CancelPage from "../CancelPage/CancelPage";
import JrCancelPage from "../CancelPage/JrCancelPage";


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


  return (
    <>

      {/* causes every route to start at top of page */}
      <ScrollToTop />
      <ScrollToAnchor />


      {/* all routes below */}
      <Switch location={location} key={location.key}>

        {/* ~~~~~~~~~~ MAIN ROUTES ~~~~~~~~~~~ */}


        <Redirect exact from="/" to="/home" />
        <MainRoute exact path="/home">
          <LandingPage routeVariants={landingVariants} />
        </MainRoute>


        {/* login/reg */}
        <MainRoute exact path="/login">
          {user.id ? (
            // If the user is already logged in, redirect to the /user page
            <Redirect to="/user" />
          ) : (
            // Otherwise, show the login page
            <LoginPage routeVariants={routeVariants} />
          )}
        </MainRoute>

        <MainRoute path="/chatpage/:id">
          <ChatPage />
        </MainRoute>

        <MainRoute exact path="/register">
          {user.id ? (
            // If the user is already logged in, redirect them to the /user page
            <Redirect to="/user" />
          ) : (
            // Otherwise, show the registration page
            <RegisterPage routeVariants={routeVariants} />
          )}
        </MainRoute>


        {/* account pages */}
        <ProtectedRoute exact path="/user" allowedUserClasses={[1, 2, 3]}>
          <MainRoute>
            <CustomerPortal routeVariants={routeVariants} />
          </MainRoute>
        </ProtectedRoute>

        <ProtectedRoute exact path="/artist" allowedUserClasses={[2, 3]}>
          <MainRoute>
            <ArtistPortal routeVariants={routeVariants} />
          </MainRoute>
        </ProtectedRoute>

        <ProtectedRoute exact path="/admin" allowedUserClasses={[3]}>
          <MainRoute>
            <AdminPortal routeVariants={routeVariants} />
          </MainRoute>
        </ProtectedRoute>

        <ProtectedRoute exact path="/details/:id" allowedUserClasses={[1, 2, 3]}>
          <MainRoute>
            <RequestDetails routeVariants={routeVariants} />
          </MainRoute>
        </ProtectedRoute>

        <ProtectedRoute exact path="/cancel/:id" allowedUserClasses={[1, 2, 3]}>
          <MainRoute>
            <CancelPage routeVariants={routeVariants} />
          </MainRoute>
        </ProtectedRoute>

        <ProtectedRoute exact path="/jrcancel/:id" allowedUserClasses={[1, 2, 3]}>
          <MainRoute>
            <JrCancelPage routeVariants={routeVariants} />
          </MainRoute>
        </ProtectedRoute>


        {/* info pages */}
        <MainRoute exact path="/faq">
          <FaqPage routeVariants={routeVariants} />
        </MainRoute>

        <MainRoute exact path="/guarantee">
          <QualityGuaranteePage routeVariants={routeVariants} />
        </MainRoute>

        <MainRoute exact path="/privacy">
          <PrivacyPolicyPage routeVariants={routeVariants} />
        </MainRoute>

        <MainRoute exact path="/terms">
          <TermsAndConditionsPage routeVariants={routeVariants} />
        </MainRoute>


        {/* artists pages */}
        <MainRoute exact path="/join-artist">
          <JoinArtistPage routeVariants={routeVariants} />
        </MainRoute>

        <MainRoute exact path="/artist-process">
          <ArtistProcess routeVariants={routeVariants} />
        </MainRoute>

        <MainRoute exact path="/artists">
          <ArtistCommunity routeVariants={routeVariants} />
        </MainRoute>

        <MainRoute exact path="/ArtistBioPage/:id">
          <ArtistBioPage routeVariants={routeVariants} />
        </MainRoute>

        {/* order process */}
        <MainRoute exact path="/order">
          <OrderPage routeVariants={routeVariants} />
        </MainRoute>

        <MainRoute exact path="/finalquestions/:id">
          <FinalQuestions routeVariants={routeVariants} />
        </MainRoute>

        <MainRoute exact path="/created/">
          <CreationPage routeVariants={routeVariants} />
        </MainRoute>



        {/* ~~~~~~~~~~ JUNIOR ROUTES ~~~~~~~~~~~ */}

        <JrRoute exact path="/benefits">
          <DiveIntoBenefits routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/songbeejr">
          <JrLandingPage routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/jrcheckout">
          <JrCheckoutPage routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/schools">
          <SchoolsInspiration routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/why-songbee">
          <WhySongbee routeVariants={routeVariants} />
        </JrRoute>

        <ProtectedRoute exact path="/jr-request/edit/:id" allowedUserClasses={[1, 2, 3]}>
          <JrRoute>
            <JrEditRequestPage routeVariants={routeVariants} />
          </JrRoute>
        </ProtectedRoute>

        <JrRoute exact path="/jr-faq">
          <FaqPageSbJR routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/learning-packs">
          <LearningPacksPage routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/learning-packs/:id">
          <LearningPackView routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/whats-included">
          <WhatsIncluded routeVariants={routeVariants} />
        </JrRoute>

        {/* If none of the other routes matched, we will show a 404. */}
        <MainRoute>
          <NotFound />
        </MainRoute>
      </Switch>
    </>
  );
}

export default ComponentRouter;

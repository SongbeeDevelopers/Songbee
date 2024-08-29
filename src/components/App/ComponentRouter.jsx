import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Switch, useLocation } from "react-router-dom";

// utility
import ProtectedRoute from "./ProtectedRoute";
import MainRoute from "./MainRoute"
import JrRoute from "./JrRoute";
import ScrollToTop from "./ScrollToTop";
import ScrollToAnchor from "./ScrollToAnchor"

// login/reg
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import OrderLoginRegister from "../OrderLoginRegister/OrderLoginRegister";

// home
import LandingPage from "../LandingPage/LandingPage";

// order process
import OrderPage from "../OrderPage/OrderPage";
import CreationPage from "../CreationPage/CreationPage";
import JrCreationPage from "../CreationPage/JrCreationPage";
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
import SubscriptionDetails from "../SubscriptionDetails/SubscriptionDetails"
import JuniorGifting from "../JuniorGifting/JuniorGifting";


function ComponentRouter() {

  const location = useLocation();

  const user = useSelector((store) => store.user);

  const redirectPath = (user) => {
    if (user.id) {
      if (user.class === 2) {
        return "/artist"
      } else if (user.class === 3) {
        return "/admin"
      } else {
        return "/user";
      }
    }
    return null;
  };

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

      <Switch location={location} key={location.key}>

        {/* ~~~~~~~~~~ MAIN ROUTES ~~~~~~~~~~~ */}
        <Redirect exact from="/" to="/home" />
        <MainRoute exact path="/home">
          <LandingPage routeVariants={landingVariants} />
        </MainRoute>

        {/* login/reg */}
        <MainRoute exact path="/login">

          {user.id ? (
            // If the user is already logged in, redirect to the correct portal
            <Redirect to={redirectPath(user)} />
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
            <Redirect to={redirectPath(user)} />
          ) : (
            // Otherwise, show the registration page
            <RegisterPage routeVariants={routeVariants} />
          )}
        </MainRoute>

        <MainRoute exact path="/logout">
          <LandingPage routeVariants={routeVariants} />
        </MainRoute>

        <MainRoute exact path="/orderlogin">
          <OrderLoginRegister routeVariants={routeVariants} />
        </MainRoute>

        {/* account pages */}
        <ProtectedRoute exact path="/user" allowedUserClasses={[1, 2, 3]}>
          <MainRoute>
            <CustomerPortal routeVariants={routeVariants} />
          </MainRoute>
        </ProtectedRoute>

        <ProtectedRoute exact path="/artist" allowedUserClasses={[2]}>
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

        <ProtectedRoute exact path="/create/:id" allowedUserClasses={[1, 2, 3]}>
          <MainRoute>
            <CreationPage routeVariants={routeVariants} />
          </MainRoute>
        </ProtectedRoute>

        <ProtectedRoute exact path="/jrcreate/:id" allowedUserClasses={[1, 2, 3]}>
          <JrRoute>
            <JrCreationPage routeVariants={routeVariants} />
          </JrRoute>
        </ProtectedRoute>

        <ProtectedRoute exact path="/cancel/:id" allowedUserClasses={[1, 2, 3]}>
          <MainRoute>
            <CancelPage routeVariants={routeVariants} />
          </MainRoute>
        </ProtectedRoute>

        <ProtectedRoute exact path="/jrcancel/:id" allowedUserClasses={[1, 2, 3]}>
          <JrRoute>
            <JrCancelPage routeVariants={routeVariants} />
          </JrRoute>
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

        {/* home */}
        <JrRoute exact path="/songbeejr">
          <JrLandingPage routeVariants={routeVariants} />
        </JrRoute>

        {/* checkout */}
        <JrRoute exact path="/jrcheckout">
          <JrCheckoutPage routeVariants={routeVariants} />
        </JrRoute>

        {/* LPs */}
        <JrRoute exact path="/learning-packs">
          <LearningPacksPage routeVariants={routeVariants} />
        </JrRoute>
        <JrRoute exact path="/learning-packs/:id">
          <LearningPackView routeVariants={routeVariants} />
        </JrRoute>

        {/* schools */}
        <JrRoute exact path="/schools">
          <SchoolsInspiration routeVariants={routeVariants} />
        </JrRoute>

        {/* info */}
        <JrRoute exact path="/benefits">
          <DiveIntoBenefits routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/why-songbee">
          <WhySongbee routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/whats-included">
          <WhatsIncluded routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/jr-faq">
          <FaqPageSbJR routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/subscription/:id">
          <SubscriptionDetails routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/gifting">
          <JuniorGifting routeVariants={routeVariants} />
        </JrRoute>


        {/* ~~~~~~~~~~ 404 ~~~~~~~~~~ */}
        <MainRoute>
          <NotFound />
        </MainRoute>

      </Switch>
    </>
  );
}

export default ComponentRouter;

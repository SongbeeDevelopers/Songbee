import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Switch, useLocation } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import MainRoute from "./MainRoute"
import JrRoute from "./JrRoute";

import Banner from "../Banner/Banner";

// login/reg
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

// home
import LandingPage from "../LandingPage/LandingPage";

// order process
import OrderPage from "../OrderPage/OrderPage";
import CreationPage from "../CreationPage/CreationPage";
import FinalQuestions from "../OrderPage/FinalQuestions";

// user functionality
import CustomerPortal from "../CustomerPortal/CustomerPortal";
import AdminPortal from "../AdminPortal/AdminPortal";
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

// jr pages
import JrLandingPage from "../JrLandingPage/JrLandingPage";
import JrEditRequestPage from "../EditRequestPage/JrEditRequest";
import JrCheckoutPage from "../JrRequestPage/JrRequestPage";
import LearningPacksPage from "../LearningPacksPage/PacksPage";
import LearningPacksHeader from "../Header/LearningPacksHeader";
import LearningPackView from "../LearningPackView/PackView";
import SchoolsInspirationHeader from "../Header/SchoolsInspirationHeader";
import SchoolsInspiration from "../SchoolsInspiration/SchoolsInspiration";
import WhySongbee from "../WhySongbee/WhySongbee";
import WhatsIncluded from "../WhatsIncludedSchoolsInspiration/WhatsIncluded";
import DiveIntoBenefits from "../SiDiveInBenefits/DiveIntoBenefits";
import ScrollToTop from "./ScrollToTop";
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
        location.pathname === "/requestform/:id" ||
        location.pathname === "/details/:id" ||
        location.pathname === "/created/:delivery_days/:extra_verse/:streaming" ||
        // artists
        location.pathname === "/artists" ||
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
      <ScrollToTop />


      <Switch location={location} key={location.key}>


        {/* ~~~~~~~~~~ MAIN ROUTES ~~~~~~~~~~~ */}


        {/* home page */}
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


        <Route exact path="/whatsIncluded">
          <WhatsIncluded routeVariants={routeVariants} />
        </Route>

        <Route exact path="/join-artist">
          <JoinArtistPage routeVariants={routeVariants} />
        </Route>

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



        <Route exact path="/si-benefits">
          <DiveIntoBenefits routeVariants={routeVariants} />
        </Route>
       

       
        {/* 👆 redundant 👇 */}
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

        <MainRoute exact path="/created/:delivery_days/:extra_verse/:streaming">
          <CreationPage routeVariants={routeVariants} />
        </MainRoute>



        {/* ~~~~~~~~~~ JUNIOR ROUTES ~~~~~~~~~~~ */}


        <JrRoute exact path="/songbeejr">
          <JrLandingPage routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/jrcheckout">
          <JrCheckoutPage routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/schools-inspiration">
          <SchoolsInspirationHeader />
          <SchoolsInspiration routeVariants={routeVariants} ></SchoolsInspiration>
        </JrRoute>

        <JrRoute exact path="/why-songbee">
          <WhySongbee routeVariants={routeVariants} />
        </JrRoute>

        <ProtectedRoute exact path="/jr-request/edit/:id" allowedUserClasses={[1, 2, 3]}>
          <JrRoute>
            <JrEditRequestPage routeVariants={routeVariants} />
          </JrRoute>
        </ProtectedRoute>

        <JrRoute exact path="/faqSbJR">
          <FaqPageSbJR routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/learning-packs">
          <LearningPacksHeader />
          <LearningPacksPage routeVariants={routeVariants} />
        </JrRoute>

        <JrRoute exact path="/learning-packs/:slug">
          <LearningPacksHeader />
          <LearningPackView routeVariants={routeVariants} />
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

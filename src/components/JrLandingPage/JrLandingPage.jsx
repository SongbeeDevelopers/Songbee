import React from "react";

import { motion } from "framer-motion";

import "./JrLandingPage.css";

import JrHeroSection from "./JrLandingSections/JrHeroSection";
import JrJoinSection from "./JrLandingSections/JrJoinSection";
import JrWorksSection from "./JrLandingSections/JrWorksSection";
import JrBenefitsSection from "./JrLandingSections/JrBenefitsSection";
import WhyJuniorSection from "./JrLandingSections/WhyJuniorSection"
import JrLearningPacksSection from "./JrLandingSections/JrLearningPacksSection";
import JrOfferSection from "./JrLandingSections/JrMoreThanMusic";
import JrGuessworkSection from "./JrLandingSections/JrGuessworkSection";
import JrReviewsSection from "./JrLandingSections/JrReviewsSection";
import JrNewsletterSection from "./JrLandingSections/JrNewsletterSection";


function SBjrLandingPage({ routeVariants }) {

   return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <JrHeroSection />
      {/* <JrJoinSection /> */}
      <JrBenefitsSection />
      <JrWorksSection />
      <WhyJuniorSection />
      <JrLearningPacksSection />
      <JrOfferSection />
      <JrGuessworkSection />
      <JrReviewsSection />
      {/* <JrFaqNewsletterSection /> */}
    </motion.div>
   )
    
    
}


export default SBjrLandingPage;
import React from "react";

import { motion } from "framer-motion";

import "./JrLandingPage.css";

import JrHeroSection from "./JrLandingSections/JrHeroSection";
import JrJoinSection from "./JrLandingSections/JrJoinSection";
import JrWorksSection from "./JrLandingSections/JrWorksSection";
import JrBenefitsSection from "./JrLandingSections/JrBenefitsSection";
import JrShopByAgeSection from "./JrLandingSections/JrShopByAgeSection";
import JrOfferSection from "./JrLandingSections/JrOfferSection";
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
      <JrJoinSection />
      <JrWorksSection />
      <JrBenefitsSection />
      <JrShopByAgeSection />
      <JrOfferSection />
      {/* <JrGuessworkSection /> */}
      <JrReviewsSection />
      {/* <JrNewsletterSection /> */}
    </motion.div>
   )
    
    
}


export default SBjrLandingPage;
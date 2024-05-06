import React from "react";

import { motion } from "framer-motion";

import "./JrLandingPage.css";

import JrHeroSection from "./JrLandingSections/1-JrHeroSection";
import JrJoinSection from "./JrLandingSections/2-JrJoinSection";
import JrWorksSection from "./JrLandingSections/4-JrWorksSection";
import JrBenefitsSection from "./JrLandingSections/3-JrBenefitsSection";
import WhyJuniorSection from "./JrLandingSections/5-JrWhySection"
import JrLearningPacksSection from "./JrLandingSections/6-JrLearningPacksSection";
import JrOfferSection from "./JrLandingSections/7-JrMoreThanMusic";
import JrGuessworkSection from "./JrLandingSections/8-JrGuessworkSection";
import JrReviewsSection from "./JrLandingSections/10-JrReviewsSection";
import JrNewsletterSection from "./JrLandingSections/9-JrNewsletterSection";
import FaqPageSbJR from '../InfoPages/FaqPageSbJR'


function SBjrLandingPage({ routeVariants }) {

   return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="junior"
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
      <FaqPageSbJR />
      <JrNewsletterSection />
    </motion.div>
   )
    
    
}


export default SBjrLandingPage;
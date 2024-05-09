import React from "react";

import { motion } from "framer-motion";

import JrHeroSection from "./JrLandingSections/1-JrHeroSection";
import EveryAgeSection from "./JrLandingSections/2-EveryAgeSection";
import JrWorksSection from "./JrLandingSections/4-JrWorksSection";
import JrBenefitsSection from "./JrLandingSections/3-JrBenefitsSection";
import WhyJuniorSection from "./JrLandingSections/5-JrWhySection"
import JrLearningPacksSection from "./JrLandingSections/6-JrLearningPacksSection";
import JrOfferSection from "./JrLandingSections/7-JrMoreThanMusic";
import JrGuessworkSection from "./JrLandingSections/8-JrGuessworkSection";
import JrReviewsSection from "./JrLandingSections/10-JrReviewsSection";
import JrNewsletterSection from "./JrLandingSections/9-JrNewsletterSection"
import FaqPageSbJR from '../InfoPages/FaqPageSbJR'

import "./JrLandingPage.css";


function SBjrLandingPage({ routeVariants }) {

   return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="junior"
    >
      <JrHeroSection />
      <EveryAgeSection />
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
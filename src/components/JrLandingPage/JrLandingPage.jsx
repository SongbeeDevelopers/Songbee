import React from "react";

import { motion } from "framer-motion";

import "./JrLandingPage.css";

import JrHeroSection from "./JrLandingSections/JrHeroSection";
import JrJoinSection from "./JrLandingSections/JrJoinSection";
import JrWorksSection from "./JrLandingSections/JrWorksSection";
import JrBenefitsSection from "./JrLandingSections/JrBenefitsSection";
import JrShopByAgeSection from "./JrLandingSections/JrShopByAgeSection";
import JrOfferSection from "./JrLandingSections/JrOfferSection";


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
    </motion.div>
   )
    
    
}


export default SBjrLandingPage;
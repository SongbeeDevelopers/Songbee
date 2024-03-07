import React from "react";

import { motion } from "framer-motion";

import "./SBjrLandingPage.css";

import HeroSectionJR from "./HeroSection/HeroSectionJR";
import HowSongbeeJrWorks from "./HowSongbeeJrWorks/HowSongbeeJrWorksSection";
import BenefitsSection from "./BenefitsSection/BenefitsSection";
import ShopByAge from "./ShopByAge/ShopByAge";



function SBjrLandingPage({ routeVariants }) {
   return (

    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
    
    <div className="container">
        <HeroSectionJR />
        <HowSongbeeJrWorks />
         {/* <ShopByAge /> */}
    </div>
    <BenefitsSection />


    </motion.div>
   )
    
    
}


export default SBjrLandingPage;
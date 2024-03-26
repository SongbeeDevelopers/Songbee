import React from "react";

import { motion } from "framer-motion";

import HeroSection from "./LandingPageSections/HeroSection";
import HowSongBeeWorksSection from "./LandingPageSections/HowSongbeeWorksSection";
import TestimonialsSection from "./LandingPageSections/TestimonialsSection";
import SampleSongsSection from "./LandingPageSections/SampleSongsSection";
import GuaranteeSection from "./LandingPageSections/GuaranteeSection";

import "./LandingPage.css";


function LandingPage({ routeVariants }) {

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      
      <div className="container">
        <HeroSection />
        <HowSongBeeWorksSection />
      </div>
      
      <TestimonialsSection />
      {/* <SampleSongsSection /> */}

      <div className="guarantee-container">
        <GuaranteeSection />
      </div>

    </motion.div>
  );
}

export default LandingPage;

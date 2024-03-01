import React from "react";

import { motion } from "framer-motion";

import "./LandingPage.css";

import HeroSection from "./LandingPageSections/HeroSection";
import HowSongBeeWorksSection from "./LandingPageSections/HowSongbeeWorksSection";
import TestimonialsSection from "./LandingPageSections/TestimonialsSection";
import SampleSongsSection from "./SampleSongsSection/SampleSongsSection";
import GuaranteeSection from "./GuaranteeSection/GuaranteeSection";


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
      <SampleSongsSection />

      <div className="guarantee-container">
        <GuaranteeSection />
      </div>

    </motion.div>
  );
}

export default LandingPage;

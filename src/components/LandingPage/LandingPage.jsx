import React from "react";

import { motion } from "framer-motion";

import HeroSection from "./LandingPageSections/1-HeroSection";
import HowSongBeeWorksSection from "./LandingPageSections/2-HowSongbeeWorksSection";
import TestimonialsSection from "./LandingPageSections/3-TestimonialsSection";
import SampleSongsSection from "./LandingPageSections/4-SampleSongsSection";
import GuaranteeSection from "./LandingPageSections/6-GuaranteeSection";

import "./LandingPage.css";
import SongsForEveryOccasion from "./LandingPageSections/5-SongsForEveryOccasion";


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
        <SongsForEveryOccasion />
        <GuaranteeSection />
      </div>

    </motion.div>
  );
}

export default LandingPage;

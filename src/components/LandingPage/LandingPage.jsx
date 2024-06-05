import React from "react";

import { motion } from "framer-motion";

import HeroSection from "./LandingPageSections/1-HeroSection";
import HowSongBeeWorksSection from "./LandingPageSections/2-HowSongbeeWorksSection";
import TestimonialsSection from "./LandingPageSections/3-TestimonialsSection";
import SampleSongsSection from "./LandingPageSections/4-SampleSongsSection";
import GuaranteeSection from "./LandingPageSections/6-GuaranteeSection";
import SongsForEveryOccasion from "./LandingPageSections/5-EveryOccasionSection";
import NewsletterSection from "./LandingPageSections/7-NewsletterSection";
import Banner from "../Banner/Banner"

import "./LandingPage.css";


function LandingPage({ routeVariants }) {

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      {/* <Banner /> */}
      <div className="container" id="hero-container">
        <HeroSection />
        <HowSongBeeWorksSection />
      </div>
      
      <TestimonialsSection />
      {/* <SampleSongsSection /> */}

      <div className="guarantee-container">
        <SongsForEveryOccasion />
        <GuaranteeSection />
        <NewsletterSection />
      </div>

    </motion.div>
  );
}

export default LandingPage;

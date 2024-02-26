import React from "react";

import { motion } from "framer-motion";

import "./LandingPage.css";

import HeroSection from "./Hero";
import HowSongBeeWorks from "./HowSongBeeWorks";
import TestimonialSection from "./Testimonials";
import SampleSongs from "./SampleSongs";
import Guarantee from "./GuaranteeSection/GuaranteeSection";


function LandingPage({ routeVariants }) {

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div className="container">
        <HeroSection />
        <HowSongBeeWorks />
      </div>
      <TestimonialSection />
      <SampleSongs />
      <div className="guarantee-container">
        <Guarantee />
      </div>
    </motion.div>

  );
}

export default LandingPage;

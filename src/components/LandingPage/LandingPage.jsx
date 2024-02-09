import React from "react";

import { motion } from "framer-motion";

import "./LandingPage.css";

import HeroSection from "./Hero";
import HowSongBeeWorks from "./HowSongBeeWorks";
import TestimonialSection from "./Testimonials";
import SampleSongs from "./SampleSongs";
import Guarantee from "./Guarantee";


function LandingPage({ routeVariants }) {

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <HeroSection />
      <HowSongBeeWorks />
      <TestimonialSection />
      <SampleSongs />
      <Guarantee/>
    </motion.div>

  );
}

export default LandingPage;

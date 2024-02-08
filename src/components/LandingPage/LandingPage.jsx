import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { motion } from "framer-motion";

import "./LandingPage.css";

import HeroSection from "./Hero";
import HowSongBeeWorks from "./HowSongBeeWorks";
import TestimonialSection from "./Testimonials";
import SampleSongs from "./SampleSongs";
import Guarantee from "./Guarantee";
import FaqSection from "./Faq";




function LandingPage({ routeVariants }) {

  const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };


  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
    <HeroSection />
    <HowSongBeeWorks />
    <TestimonialSection />
    <SampleSongs />
    <Guarantee/>
    {/* <FaqSection/> */}
    </motion.div>

  );
}

export default LandingPage;

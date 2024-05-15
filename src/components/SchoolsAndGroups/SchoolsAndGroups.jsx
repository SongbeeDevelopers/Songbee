import React from "react";

import WhatsTheBuzz from "./S&GSections/2-SchoolsPrograms";
import BeeSmart from "./S&GSections/BeeSmart";
import ForAllAges from "./S&GSections/ForAllAges";
import WhyExpertsLoveUs from "./S&GSections/WhyExpertsLoveUs";
import JrFaq from "../JrFaq.jsx/JrFaq";
import SchoolsHero from "./S&GSections/1-SchoolsHero";

import { motion } from "framer-motion";
import "./SchoolsAndGroups.css";


function SchoolsInspiration({ routeVariants }) {
  return (
    <motion.div
      className="si-page"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <SchoolsHero />
      <WhatsTheBuzz />
      <BeeSmart />
      <ForAllAges />
      <WhyExpertsLoveUs />
      <JrFaq />
    </motion.div>
  );
}

export default SchoolsInspiration;

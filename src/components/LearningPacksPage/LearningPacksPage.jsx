import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LPPacks from "./LPSections/3-LPPacks";
import LPWorks from "./LPSections/2-LPWorks";
import PlayToLearn from "./LPSections/4-LPPlayToLearn";
import LPFaq from "./LPSections/5-LPFaq";
import LPHero from "./LPSections/1-LPHero";
import JrNewsletterSection from "../JrLandingPage/JrLandingSections/9-JrNewsletterSection";

import { motion } from "framer-motion";
import "./LearningPacksPage.css";

function LearningPacksPage({ routeVariants }) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'FETCH_LEARNING_PACKS'})
  }, []);

  return (
    <motion.div
      className="learning-packs"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <section className="lp-hero">
        <LPHero />
        <LPWorks />
      </section>
      <LPPacks />
      <PlayToLearn />
      <LPFaq />
      <JrNewsletterSection />
    </motion.div>
  );
}

export default LearningPacksPage;

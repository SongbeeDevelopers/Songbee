import React from "react";
import { motion } from "framer-motion";
import "./LearningPacksPage.css";
import Packs from "./Packs";
import LearningpacksHero from "./PacksHero";
import { Link } from "react-router-dom";
import PlayToLearn from "./PlayToLearn";
import FaqPage from "../InfoPages/FaqPageSbJR";
import JrNewsletterSection from "../JrLandingPage/JrLandingSections/JrNewsletterSection";
import JrFooter from "../JrFooter/JrFooter";

function LearningPacksPage({ routeVariants }) {
  return (
    <motion.div
      className="learning-packs"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <section className="lp-hero">
        <div
          className="lp-cta"
          style={{ backgroundImage: `url('/junior/baby-learningpacks.jpg'  )` }}
        >
          <div className="lp-white-overlay"></div>

          <div className="lp-hero-text">
            <h1>Learning Packs</h1>
            <p>Support Your Child’s Development</p>
            <button className="jr-landing-btn">Get Started</button>
          </div>
        </div>

        <div className="lp-orange-overlay"></div>
        <LearningpacksHero />

        <div className="lp-title">
          <h2>The Learning Packs</h2>
          <div className="lp-links">
            <Link href="/learning-packs#0_12_months">0-12 months</Link>
            <Link href="/learning-packs#1_year">1 Year</Link>
            <Link href="/learning-packs#2_year">2 Year</Link>
            <Link href="/learning-packs#3_year">3 Year</Link>
            <Link href="/learning-packs#4_year">4 Year</Link>
          </div>
        </div>
      </section>

      <Packs />
      <PlayToLearn/>
      <FaqPage/>
      <JrNewsletterSection/>
      <JrFooter/>
    </motion.div>
  );
}

export default LearningPacksPage;
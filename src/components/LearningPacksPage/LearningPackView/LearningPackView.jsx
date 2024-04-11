import React from "react";
import { useParams } from "react-router-dom";
import { Learningpacks } from "../Data";
import { motion } from "framer-motion";

function LearningPackView({ routeVariants }) {
  const { slug } = useParams();
  const learningPack = Learningpacks.flatMap((obj) => obj.items).filter(
    (item) => item.slug === slug
  )[0];
  return (
    <motion.div
      className="learning-packs"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <section className="pack-view-hero">
        <div className="pack-view-img">
          <img src={learningPack?.imageUrl} alt="" />
        </div>
        <div className="pack-view-content">
          <h1>{learningPack?.name} Learning Pack</h1>
          <p className="pv-age">{learningPack?.age} old</p>
          <p className="pv-pricing">{learningPack?.pricing.split("/")[0]}</p>
          <p className="pv-delivery"> {learningPack?.delivery}</p>
          <button className="jr-landing-btn pv-button">Get Started</button>
          <p className="pv-skip">Skip a month | Cancel any time</p>
          <div className="lp-dots pack-view-dots"></div>
          <div className="pv-about">
            <h2>About</h2>
            <p>{learningPack?.about}</p>
          </div>
          <h2>What is included?</h2>
          <ul className="pv-included">
            {learningPack?.included.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <img src="/junior/YellowLine.png" alt="" className="yellowLine" />
    </motion.div>
  );
}

export default LearningPackView;

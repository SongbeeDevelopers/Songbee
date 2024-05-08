import React from "react";

import { motion } from 'framer-motion';

import qualityGuarantee from "../../../public/data/qualityGuarantee";

import './InfoPages.css'


function QualityGuarantee({ routeVariants }) {

  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div className="info">
        <h1 className="info-title">{qualityGuarantee.title}</h1>

        {qualityGuarantee.details.map((item) => (
          <p>{item}</p>
        ))}

        <br/>
        <p className="info-contact">
          Please contact our team at <a href="mailto:hello@songbee.com">hello@songbee.com</a>!
        </p>
      </div>
    </motion.div>

  );
}

export default QualityGuarantee;

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
      <h1 className="headerP">{qualityGuarantee.title}</h1>

      {qualityGuarantee.details.map((item) => (
        <p>{item}</p>
      ))}

      <p>
        Please contact our team at {" "}
        <a className="mail-guarantee" href="mailto:hello@songbee.com">
          hello@songbee.com
        </a>
        !
      </p>
    </motion.div>

  );
}

export default QualityGuarantee;

import React from 'react';

import { motion } from 'framer-motion';

function QualityGuarantee({ routeVariants }) {
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <p>Quality Guarantee</p>
    </motion.div>
  );
}

export default QualityGuarantee;

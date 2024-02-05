import React from 'react';

import { motion } from 'framer-motion';

function TermsAndConditions({ routeVariants }) {
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <p>Terms And Conditions</p>
    </motion.div>
  );
}

export default TermsAndConditions;

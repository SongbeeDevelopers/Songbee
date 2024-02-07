import React from 'react';

import { motion } from 'framer-motion';

function FAQ({ routeVariants }) {
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <p>FAQ</p>
    </motion.div>
  );
}

export default FAQ;

import React from 'react';
import { motion } from 'framer-motion';
import FaqSection from '../LandingPage/Faq';

function FAQ({ routeVariants }) {
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
<FaqSection/>
    </motion.div>
  );
}

export default FAQ;

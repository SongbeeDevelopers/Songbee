import React from 'react';

import CustomerPortalTabs from './CustomerPortalTabs/_CustomerPortalTabs';

import { motion } from 'framer-motion';
import './CustomerPortal.css';


function CustomerPortal({ routeVariants }) {
  
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h2 className='portal-title'>Customer Portal</h2>
      <br/>
      <CustomerPortalTabs />  
  </motion.div>
  );
}

export default CustomerPortal;

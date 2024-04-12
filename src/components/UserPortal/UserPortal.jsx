import React from 'react';

import UserPortalTabs from './UserPortalTabs/UserPortalTabs';

import { motion } from 'framer-motion';
import './UserPortal.css';


function UserPage({ routeVariants }) {
  
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h2 className='portal-title'>Customer Portal</h2>
      <br/>
      <UserPortalTabs />  
  </motion.div>
  );
}

export default UserPage;

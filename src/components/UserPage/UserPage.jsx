import React from 'react';

import UserPageTabs from './UserPageTabs/UserPageTabs';

import { motion } from 'framer-motion';
import './UserPage.css';


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
      <UserPageTabs />  
  </motion.div>
  );
}

export default UserPage;

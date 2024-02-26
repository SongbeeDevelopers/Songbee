import React from 'react';
import UserPageTabs from './UserPageTabs/UserPageTabs';

import { motion } from 'framer-motion';
import './UserPage.css';


function UserPage({ routeVariants }) {
  
  // In here will source in MUI tabs for profile info, order history and credit balance
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <UserPageTabs />  
  </motion.div>
  );
}

export default UserPage;

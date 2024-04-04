import React from 'react';
import UserPageTabs from './UserPageTabs/UserPageTabs';
import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import './UserPage.css';


function UserPage({ routeVariants }) {

  const user = useSelector(store => store.user)
  
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h2 className='user-welcome'>Welcome {user.email}!</h2>

      <UserPageTabs />  
  </motion.div>
  );
}

export default UserPage;

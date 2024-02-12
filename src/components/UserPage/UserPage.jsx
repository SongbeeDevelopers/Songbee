import React from 'react';
import {useSelector} from 'react-redux';
import UserPageTabs from '../UserPageTabs/UserPageTabs';

import { motion } from 'framer-motion';
import './UserPage.css';


function UserPage({ routeVariants }) {

  const user = useSelector((store) => store.user);
  
  // In here will source in MUI tabs for profile info, order history and credit balance
  return (
    <>
        <motion.div
          className="container"
          variants={routeVariants}
          initial="initial"
          animate="final"
        >
          <UserPageTabs />  
      </motion.div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

import React from 'react';
import { useSelector } from 'react-redux';

import ArtistPageTabs from './ArtistPageTabs/ArtistPageTabs'

import { motion } from 'framer-motion';
import './ArtistPage.css';


function UserPage({ routeVariants }) {

  const user = useSelector(store => store.user)
  
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h2 className='artist-welcome'>Welcome {user.email}!</h2>

      <ArtistPageTabs /> 
  </motion.div>
  );
}

export default UserPage;

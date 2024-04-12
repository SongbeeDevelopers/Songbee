import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ArtistPortalTabs from './ArtistPortalTabs/ArtistPortalTabs'

import { motion } from 'framer-motion';
import './ArtistPortal.css';


function UserPage({ routeVariants }) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'GET_ARTIST_PROFILE'
    })
  }, [])
  
  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h2 className='artist-welcome'>Artist Portal</h2>
      <ArtistPortalTabs /> 
  </motion.div>
  );
}

export default UserPage;

import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ArtistPortalTabs from './ArtistPortalTabs/_ArtistPortalTabs'

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
      <br/>
      <ArtistPortalTabs /> 
  </motion.div>
  );
}

export default UserPage;

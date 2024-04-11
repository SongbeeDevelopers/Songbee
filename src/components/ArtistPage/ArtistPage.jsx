import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ArtistPageTabs from './ArtistPageTabs/ArtistPageTabs'

import { motion } from 'framer-motion';
import './ArtistPage.css';


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
      <ArtistPageTabs /> 
  </motion.div>
  );
}

export default UserPage;

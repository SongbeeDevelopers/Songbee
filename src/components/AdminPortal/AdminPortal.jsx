import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AdminPortalTabs from './AdminPortalTabs/_AdminPortalTabs';

import { motion } from 'framer-motion';
import './AdminPortal.css'


export default function AdminPortal({ routeVariants }) {

  const dispatch = useDispatch();

  // on mount
  useEffect(() => {
    dispatch({ type: "FETCH_ALL_REQUESTS" });
    dispatch({ type: 'FETCH_ALL_USERS' })
    dispatch({ type: 'FETCH_ALL_ARTISTS'})
    dispatch({ type: "FETCH_PENDING_ARTISTS" });
    dispatch({ type: "GET_ARTIST_PENDING" });
    dispatch({ type: 'FETCH_GENRES' })
  }, [])

  return (
    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h2 className='portal-title'>Admin Portal</h2>
      <br />
      <AdminPortalTabs />
    </motion.div>
  );
}

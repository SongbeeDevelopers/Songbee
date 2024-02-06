import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import AdminTable from './AdminTable';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdminUserTable from './AdminUserTable';
import AdminArtistTable from './AdminArtistTable';
import FilterBar from '../FilterBar/FilterBar';

function AdminPage({ routeVariants }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_ALL_REQUESTS" });
    dispatch({ type: "FETCH_ALL_USERS" });
    dispatch({ type: "FETCH_PENDING_ARTISTS"});
    dispatch({
      type: "FETCH_RESULTS",
      payload: {
        type: 'pending',
        query: ''
      }
    });

  }, [])
  const [value, setValue] = React.useState(0);
  const pendingRequests = useSelector(store => store.pendingRequests)
  const completedRequests = useSelector(store => store.completedRequests)
  const users = useSelector(store => store.allUsers)
  const artists = useSelector(store => store.pendingArtists);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
    if (newValue === 0){
      dispatch({
        type: "SET_FILTER_RESULTS",
        payload: pendingRequests
      })
    } else if (newValue === 1){
      dispatch({
        type: "SET_FILTER_RESULTS",
        payload: completedRequests
      })
    } else if (newValue === 2){
      dispatch({
        type: "SET_FILTER_RESULTS",
        payload: users
      })
    } else if (newValue === 3){
      dispatch({
        type: "SET_FILTER_RESULTS",
        payload: artists
      })
    }
  };

  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const results = useSelector(store => store.filterResults);
  

  return (
    <motion.div className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Pending Requests" {...a11yProps(0)} />
          <Tab label="Completed Requests" {...a11yProps(1)} />
          <Tab label="Users" {...a11yProps(2)} />
          <Tab label="Pending Artists" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <FilterBar type='pending'/>
      <AdminTable data={results}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <FilterBar type='completed'/>
      <AdminTable data={results}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <FilterBar type='user'/>
      <AdminUserTable data={results}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <FilterBar type='artist'/>
      <AdminArtistTable data={results}/>
      </CustomTabPanel>
    </Box>
    </motion.div>
  );
}

export default AdminPage;

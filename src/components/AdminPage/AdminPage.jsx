import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { motion } from 'framer-motion';

import AdminTable from './AdminTable';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import AdminArtistTable from './AdminArtistTable';
import AdminUserTable from './AdminUserTable';
import FilterBar from '../FilterBar/FilterBar';


function AdminPage({ routeVariants }) {

  const dispatch = useDispatch();

  // global state
  const users = useSelector(store => store.allUsers)
  const results = useSelector(store => store.filterResults);
  const artists = useSelector(store => store.pendingArtists);
  const pendingRequests = useSelector(store => store.pendingRequests)
  const completedRequests = useSelector(store => store.completedRequests)

  // local state
  const [value, setValue] = React.useState(0);

  // on mount
  useEffect(() => {
    dispatch({ type: "LOAD_ADMIN_PAGE" });
  }, [])

  // handles state
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
    // if (newValue === 0){
    //   dispatch({
    //     type: "SET_FILTER_RESULTS",
    //     payload: pendingRequests
    //   })
    // } else if (newValue === 1){
    //   dispatch({
    //     type: "SET_FILTER_RESULTS",
    //     payload: completedRequests
    //   })
    // } 
    if (newValue === 2){
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

  // tabs layout
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
  
  // tab logic
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  // controls tab switching
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  
  return (
    <motion.div className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Pending Requests" {...a11yProps(0)} />
          <Tab label="Completed Requests" {...a11yProps(1)} />
          <Tab label="Users" {...a11yProps(2)} />
          <Tab label="Pending Artists" {...a11yProps(3)} />
        </Tabs>
        
        {/* AdminTable.jsx used for both pending and completed requests */}
        <CustomTabPanel value={value} index={0}>
          <FilterBar type='pending'/>
          <AdminTable num={0}/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <FilterBar type='completed'/>
          <AdminTable num={1}/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <FilterBar type='user'/>
          <AdminUserTable data={results}/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={3}>
          <FilterBar type='artist'/>
          <AdminArtistTable data={results}/>
        </CustomTabPanel>

    </motion.div>
  );
}

export default AdminPage;

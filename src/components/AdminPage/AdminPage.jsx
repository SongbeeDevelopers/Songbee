import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { motion } from 'framer-motion';

import AdminRequestTable from './AdminRequestTable';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import AdminArtistTable from './AdminArtistTable';
import AdminUserTable from './AdminUserTable';


function AdminPage({ routeVariants }) {

  const dispatch = useDispatch();

  // local state
  const [value, setValue] = React.useState(0);

  // on mount
  useEffect(() => {
    dispatch({ type: "LOAD_ADMIN_PAGE" });
  }, [])

  // handles tabs state
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
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
    if (index === 0) {

    }
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  
  return (
    <motion.div
      className="container"
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
      
      <CustomTabPanel value={value} index={0}>
        <AdminRequestTable num={0}/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <AdminRequestTable num={1}/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <AdminUserTable />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <AdminArtistTable />
      </CustomTabPanel>

    </motion.div>
  );
}

export default AdminPage;

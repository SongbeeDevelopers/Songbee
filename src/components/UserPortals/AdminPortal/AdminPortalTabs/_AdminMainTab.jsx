import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import AdminRequestsTab from './AdminRequestsTab';
import AdminOrderBulletin from "./AdminOrderBulletin";

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import '../AdminPortal.css'


export default function AdminMainTab() {

  const [value, setValue] = useState(0);

  const pendingRequests = useSelector(store => store.pendingRequests)
  const completedRequests = useSelector(store => store.completedRequests)
  const unapprovedRequests = useSelector(store => store.unapprovedRequests)

  // MUI tab structure
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
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
  // end of tab structure


  return (
    <div className="admin-tabs-container">
      <Box display="flex" justifyContent="center" width="100%">
        <Tabs value={value} onChange={handleChange} variant="scrollable" centered>
          <Tab label="Order Bulletin" {...a11yProps(0)} />
          <Tab label="Pending Approval" {...a11yProps(1)} />
          <Tab label="Completed Orders" {...a11yProps(2)} />
          
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <AdminRequestsTab num={0} data={pendingRequests} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <AdminRequestsTab num={1} approved={false} data={unapprovedRequests} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <AdminRequestsTab num={2} approved={true} data={completedRequests} />
      </CustomTabPanel>
    </div>
  )
}

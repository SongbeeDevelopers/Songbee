import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import AdminMainTab from "./_AdminMainTab";
import AdminJuniorTab from "./_AdminJuniorTab";
import AdminArtistsTab from "./_AdminArtistsTab";
import AdminUsersTab from './_AdminUsersTab';
import AdminLearningPacksTab from "./AdminLearningPacksTab";

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import '../AdminPortal.css'


export default function AdminPortalTabs() {

  const [value, setValue] = useState(0);

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
          <Tab label="Songbee" {...a11yProps(0)} />
          <Tab label="SB Junior" {...a11yProps(1)} />
          <Tab label="Artists" {...a11yProps(2)} />
          <Tab label="Accounts" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <AdminMainTab />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <AdminJuniorTab />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <AdminArtistsTab />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <AdminUsersTab />
      </CustomTabPanel>
    </div>
  )
}

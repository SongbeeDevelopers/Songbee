import React from "react";
import { useState } from "react";

import AdminRequestTable from './AdminRequestTable';
import AdminArtistTable from './AdminArtistTable';
import AdminUserTable from './AdminUserTable';
import AdminArtistsPendingEdits from './AdminArtistsPendingEdits';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import '../AdminPortal.css'


export default function AdminPortalTabs() {

  // local state
  const [value, setValue] = useState(0);

  // handles tabs state
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
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

  // tabs logic
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Pending Requests" {...a11yProps(0)} />
        <Tab label="Completed Requests" {...a11yProps(1)} />
        <Tab label="Users" {...a11yProps(2)} />
        <Tab label="Pending Artists" {...a11yProps(3)} />
        <Tab label="Pending Artist Edits" {...a11yProps(4)} />

      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <AdminRequestTable num={0} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <AdminRequestTable num={1} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <AdminUserTable />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <AdminArtistTable />
      </CustomTabPanel>


      <CustomTabPanel value={value} index={4}>
        <AdminArtistsPendingEdits />
      </CustomTabPanel>
    </div>
  )
}

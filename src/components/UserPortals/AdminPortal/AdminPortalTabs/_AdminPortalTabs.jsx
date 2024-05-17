import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import AdminRequestsTab from './AdminRequestsTab';
import AdminArtistApplicationsTab from './AdminArtistApplicationsTab';
import AdminUsersTab from './AdminUsersTab';
import AdminArtistEdits from './AdminArtistEdits';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import '../AdminPortal.css'


export default function AdminPortalTabs() {

  const [value, setValue] = useState(0);

  const pendingRequests = useSelector(store => store.pendingRequests)
  const completedRequests = useSelector(store => store.completedRequests)
  const users = useSelector(store => store.allUsers)
  const artistApplications = useSelector((store) => store.pendingArtists);
  const artistEdits = useSelector((store) => store.pendingEdits);

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
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Pending Orders" {...a11yProps(0)} />
        <Tab label="Completed Orders" {...a11yProps(1)} />
        <Tab label="Users" {...a11yProps(2)} />
        <Tab label="Artist Applications" {...a11yProps(3)} />
        <Tab label="Artist Edits" {...a11yProps(4)} />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <AdminRequestsTab num={0} data={pendingRequests} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <AdminRequestsTab num={1} data={completedRequests} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <AdminUsersTab data={users} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <AdminArtistApplicationsTab data={artistApplications} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <AdminArtistEdits data={artistEdits} />
      </CustomTabPanel>
    </div>
  )
}

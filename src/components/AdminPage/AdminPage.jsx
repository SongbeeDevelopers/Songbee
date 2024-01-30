import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import AdminTable from './AdminTable';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function AdminPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_ALL_REQUESTS" })
  }, [])
  const pendingRequests = useSelector(store => store.pendingRequests)
  const completedRequests = useSelector(store => store.completedRequests)

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
  

  return (
    <div className="container">
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Pending Requests" {...a11yProps(0)} />
          <Tab label="Completed Requests" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <AdminTable data={pendingRequests}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <AdminTable data={completedRequests}/>
      </CustomTabPanel>
    </Box>
    </div>
  );
}

export default AdminPage;

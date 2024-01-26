import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';


// This is for the MUI Tabs
function CustomTabPanel(props) {
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// This will handle the inputs for first name, last name and email using state
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');



  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Order History" {...a11yProps(1)} />
          <Tab label="Credit Balance" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1>Personal info</h1>
        <div>
            <form onSubmit={handleChange}>
                <label htmlFor="firstname">
                    First Name
                    <input
                    type="text"
                    name="firstname"
                    value={firstName}
                    required
                    onChange={(event) => setFirstName(event.target.value)}
                    />
                </label>
                <label htmlFor="lastname">
                    Last Name
                    <input
                    type="text"
                    name="lastname"
                    value={lastName}
                    required
                    onChange={(event) => setLastName(event.target.value)}
                    />
                </label>
                <label htmlFor="email">
                    Email
                    <input
                    type="text"
                    name="email"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
            </form>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
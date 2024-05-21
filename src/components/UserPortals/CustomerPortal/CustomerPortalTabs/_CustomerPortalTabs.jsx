import * as React from "react";
import { useState } from "react";

import CustomerRequestsTab from "./CustomerRequestsTab";
import CustomerProfileTab from "./CustomerProfileTab";
import CustomerCreditTab from "./CustomerCreditTab";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import { useTheme } from '@mui/material/styles';
import '../CustomerPortal.css'


export default function CustomerPortalTabs() {

  const theme = useTheme()
  
  const [value, setValue] = useState(0);

  // tab structure
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
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  // End of tab structure


  return (
    <>
      {/* tab selector */}
      <Box display="flex" justifyContent="center" width="100%">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Orders" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
          <Tab label="Refer a Friend" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* order history tab */}
      <CustomTabPanel value={value} index={0}>
        <CustomerRequestsTab />
      </CustomTabPanel>

      {/* personal info tab */}
      <CustomTabPanel value={value} index={1}>
        <CustomerProfileTab />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <CustomerCreditTab />
      </CustomTabPanel>
    </>
  );
}

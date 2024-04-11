import * as React from "react";
import { useState } from "react";

import UserRequestsTab from "./UserRequestsTab";
import UserProfileTab from "./UserProfileTab";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import '../UserPage.css'


export default function UserTabs() {
  
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
      <Box sx={{ height: "80%"}}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="Order History" {...a11yProps(0)} sx={{ color: "orange" }} />
          <Tab label="User Profile" {...a11yProps(1)} sx={{ color: "orange" }} /> 
        </Tabs>
      </Box>

      {/* order history tab */}
      <CustomTabPanel value={value} index={0}>
        <UserRequestsTab />
      </CustomTabPanel>

      {/* personal info tab */}
      <CustomTabPanel value={value} index={1}>
        <UserProfileTab />
      </CustomTabPanel>
    </>
  );
}

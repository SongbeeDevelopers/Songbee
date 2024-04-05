import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import UserRequestsTab from "./UserRequestsTab";
import UserCreditTab from "./UserCreditTab";
import UserProfileTab from "./UserProfileTab";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import '../UserPage.css'


export default function BasicTabs() {

  const history = useHistory();
  const dispatch = useDispatch();
  
  const [value, setValue] = useState(0);
  
  // grabs artist on mount
  useEffect(() => {
    dispatch({ type: "GET_ARTIST_PROFILE" });
  }, []);

  // This is clicking on the tabs and getting the value for each corresponding tabs
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
  }; // End of tab structure


  return (
    <>
      {/* tab selector */}
      <Box sx={{ height: "80%", borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="tabHeader"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Order History"  {...a11yProps(0)} sx={{ color: "orange" }} />
          <Tab label="Profile"        {...a11yProps(1)} sx={{ color: "orange" }} /> 
          <Tab label="Credit Balance" {...a11yProps(2)} sx={{ color: "orange" }} />
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

      {/* user credit tab */}
      <CustomTabPanel value={value} index={2}>
        <UserCreditTab />
      </CustomTabPanel>
    </>
  );
}

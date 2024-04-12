import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import ArtistProfileTab from "./ArtistProfileTab";
import ArtistSBRequestsTab from "./ArtistSBRequestsTab";
import ArtistSBjrRequestsTab from "./ArtistSBjrRequestsTab";
import ArtistDocuments from "./ArtistDocuments";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import '../ArtistPortal.css'


export default function ArtistTabs() {

  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  // grabs artist on mount
  useEffect(() => {
    dispatch({ type: "GET_ARTIST_PROFILE" });
  }, []);

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
          className="tabHeader"
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Artist Profile" {...a11yProps(0)}  />
          <Tab label="Songbee Requests" {...a11yProps(1)} />
          <Tab label="Junior Requests" {...a11yProps(2)} />
          <Tab label="Documents" {...a11yProps(3)} />
        </Tabs>
      </Box>

      {/* tabs */}
      <CustomTabPanel value={value} index={0}>
        <ArtistProfileTab />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <ArtistSBRequestsTab />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <ArtistSBjrRequestsTab />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <ArtistDocuments />
      </CustomTabPanel>
    </>
  );
}

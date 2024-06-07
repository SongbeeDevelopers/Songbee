import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import ArtistProfileTab from "./ArtistProfileTab";
import ArtistSBRequestsTab from "./ArtistSBRequestsTab";
import ArtistDocuments from "./ArtistDocuments";
import ArtistCompletedRequestsTab from "./ArtistCompletedRequestsTab";
import ArtistMessagesTab from "./ArtistMessagesTab";


import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import '../ArtistPortal.css'


export default function ArtistPortalTabs({artistProfile}) {

  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  // grabs artist on mount
  // const artistProfile = useSelector((store) => store.artistProfile);
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
          className="tabHeader"
          value={value}
          onChange={handleChange}
          variant="scrollable"
        >
          <Tab label="Artist Profile" {...a11yProps(0)}  />
          <Tab label="Incoming Orders" {...a11yProps(1)} />
          <Tab label="Documents" {...a11yProps(2)} />
          <Tab label="Completed Orders" {...a11yProps(3)} />
          <Tab label="Messages" {...a11yProps(4)} />
        </Tabs>
      </Box>

      {/* tabs */}
      <CustomTabPanel value={value} index={0}>
        <ArtistProfileTab artistProfile={artistProfile}/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <ArtistSBRequestsTab artistProfile={artistProfile && artistProfile}/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <ArtistDocuments />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <ArtistCompletedRequestsTab artistId={artistProfile && artistProfile.id}/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <ArtistMessagesTab />
      </CustomTabPanel>
 
    </>
  );
}

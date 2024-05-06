import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import RequestLyricsTab from './RequestDetailsTabs/RequestLyricsTab';
import RequestDetailsTab from './RequestDetailsTabs/RequestDetailsTab';

import PropTypes from "prop-types";
import {
  Box,
  Button,
  Tab,
  Tabs,
  Typography
} from "@mui/material"

import { motion } from 'framer-motion';

import './RequestDetails.css'
import RequestDetailsArtistBio from './RequestDetailsArtistBio';


// This function will display the user's song request with a player so they can review their song
function RequestDetails({ routeVariants, requestId }) {

  // hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();

  // fetches request on mount
  useEffect(() => {
    {
      ID.id ?
        dispatch({
          type: 'FETCH_CURRENT_REQUEST',
          payload: ID.id
        })
        :
        dispatch({
          type: 'FETCH_CURRENT_REQUEST',
          payload: requestId
        })
    }
  }, [ID.id])


  // call to the store to the currentRequest reducer
  const request = useSelector((store) => store.currentRequest);


  // tab structure
  const [value, setValue] = useState(0);

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
    <motion.div
      className='container songDetails'
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      {/* title */}
      <h2>{request.title}</h2>

      {/* details */}
      <p>For {request.recipient}</p>
      {request.occasion && <p>{request.occasion}</p>}
      <p>{request.genre}</p>

      {/* audio file */}
      <audio className='song-details-audio' controls src={request.url} />

      <div className='order-details-tab-container'>
        {/* tab header */}
        <Box sx={{ height: "80%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="Lyrics" {...a11yProps(0)} />
            {/* <Tab label="Details" {...a11yProps(1)} /> */}
            <Tab label="Artist" {...a11yProps(1)} />
          </Tabs>
        </Box>

        {/* tabs */}
        <CustomTabPanel value={value} index={0}>
          <RequestLyricsTab request={request} />
        </CustomTabPanel>

        {/* <CustomTabPanel value={value} index={1}>
          <RequestDetailsTab request={request} />
        </CustomTabPanel> */}

        <CustomTabPanel value={value} index={1}>
          <RequestDetailsArtistBio />
        </CustomTabPanel>
      </div>

      <div className='request-details-addon-container'>
        <h2>Expand On Your Song!</h2>
        <div className='requestdetailsaddons'>
          <div className='requestDetailsaddon'>
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/extraverse_hmt8jd.jpg"></img>
            <p>Add a Verse!</p>
          </div>

          <div className='requestDetailsaddon'>
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/addstreaming_hng5cz.jpg"></img>
            <p>Add Streaming!</p>
          </div>

          <div className='requestDetailsaddon'>
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/backingtrack_m94vwk.jpg"></img>
            <p>Karaoke Version!</p>
          </div>

          <div className='requestDetailsaddon'>
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/commerciallicense_qkxiug.jpg"></img>
            <p>Add Licensing!</p>
          </div>
        </div>
      </div>

      <Button variant="contained"
        onClick={() => history.goBack()}
        sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
      >
        BACK
      </Button>

    </motion.div>
  )
}

export default RequestDetails;

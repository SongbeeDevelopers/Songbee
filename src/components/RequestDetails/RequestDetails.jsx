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

  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();

  useEffect(() => {
    console.log('expecting to get the parmas id of song(s)', ID);
    console.log('expecting to get the requestId of song(s)', requestId);
    { ID.id ?
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
    <motion.div
      className='container'
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div className='songDetails'>
          <img className='bee-deco' src='https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070457/Songbee/bee-button_iwlxrg.png' />
          <h1>{request.title}</h1>
          <img className='bee-deco' src='https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070455/Songbee/bee-button-reversed_faxbyx.png' />
          <img className='song-underline' src='https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076671/Songbee/underline_t5mfyz.png' />
          {/* <p onClick={() => {history.push(`request.artist_id`)}}> By {request.artist_name}</p> */}
          <audio controls src={request.url} />

          <Box sx={{ height: "80%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Lyrics" {...a11yProps(0)} />
              <Tab label="Details" {...a11yProps(1)} />
              <Tab label="Artist" {...a11yProps(2)} />
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <RequestLyricsTab request={request}/>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <RequestDetailsTab request={request}/>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <RequestDetailsArtistBio/>
          </CustomTabPanel>

        <Button variant="contained"
          onClick={() => history.goBack()}
          sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
        >
          BACK
        </Button>

        <p>Add some add-ons!</p>
        <div className='requestdetailsaddons'>
          <div className='requestDetailsaddon'>
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/commerciallicense_qkxiug.jpg"></img>
          </div>

          <div  className='requestDetailsaddon'>
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/backingtrack_m94vwk.jpg"></img>

          </div>

          <div className='requestDetailsaddon'>
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/addstreaming_hng5cz.jpg"></img>

          </div >

          <div className='requestDetailsaddon'>
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/extraverse_hmt8jd.jpg"></img>

          </div >
        </div>

      </div>
    </motion.div>
  )
}

export default RequestDetails;

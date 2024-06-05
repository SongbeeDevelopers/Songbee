import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import RequestLyricsTab from './RequestDetailsTabs/RequestLyricsTab';
// import RequestDetailsTab from './RequestDetailsTabs/RequestDetailsTab';
import RequestDetailsArtistBio from './RequestDetailsArtistBio';

import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  Tab,
  Tabs,
  Typography
} from "@mui/material"

import { motion } from 'framer-motion';

import './RequestDetails.css'



// This function will display the user's song request with a player so they can review their song
function RequestDetails({ routeVariants, requestId }) {

  // hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();

  
  // call to the store to the currentRequest reducer
  const request = useSelector((store) => store.currentRequest);
  const addons = useSelector((store => store.addons))


  // checkbox logic
  const handleCheckbox = (key) => {
    dispatch({
      type: 'SET_ADDON_DATA',
      payload: key
    })
  }
  const prices = {
    extra_verse: 74.99,
    streaming: 49.99,
    backing_track: 29.99,
    license: 199.99
  }
  const [totalPrice, setTotalPrice] = useState(0)
  const handleClick = (value) => {
    if (value === 'streaming'){
      if (addons.streaming === false){
        handleCheckbox("streaming")
        setTotalPrice(totalPrice + prices.streaming)
      }
      else if (addons.streaming === true){
        handleCheckbox("streaming")
        setTotalPrice(totalPrice - prices.streaming)
      }
    }
    if (value === 'extra_verse'){
      if (addons.extra_verse === false){
        handleCheckbox("extra_verse")
        setTotalPrice(totalPrice + prices.extra_verse)
        }
        else if (addons.extra_verse === true){
          handleCheckbox("extra_verse")
          setTotalPrice(totalPrice - prices.extra_verse)
        }
    }
    if (value === 'license'){
      if (addons.license === false){
        handleCheckbox("license")
        setTotalPrice(totalPrice + prices.license)
        }
        else if (addons.license === true){
          handleCheckbox("license")
          setTotalPrice(totalPrice - prices.license)
        }
    }
    if (value === 'backing_track'){
      if (addons.backing_track === false){
        handleCheckbox("backing_track")
        setTotalPrice(totalPrice + prices.backing_track)
        }
        else if (addons.backing_track === true){
          handleCheckbox("backing_track")
          setTotalPrice(totalPrice - prices.backing_track)
        }
    }
  }
 
  const purchaseAddons = () => {
    dispatch({
      type: 'FETCH_ADDON_CHECKOUT',
      payload: {
        data: addons,
        id: request.id
      }
    })
  }

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
    <>
      <motion.div
        className='container songDetails'
        variants={routeVariants}
        initial="initial"
        animate="final"
      >
        {/* Artist image */}
       
         <img className='artist-photo' src={request.photo} alt="Artists images" /> 
        

        {/* audio file */}
        <audio className='song-details-audio' controls src={request.url} />
       

        {/* title */}
        <h2>{request.title}</h2>

        <div className='order-details-tab-container'>
          {/* tab header */}
          <Box sx={{ height: "80%" }}>

        {/* details */}
        <p>For {request.recipient}</p>
        {request.occasion && <p>{request.occasion}</p>}
        <p>{request.genre}</p>

            <Tabs
              value={value}
              onChange={handleChange}
              centered
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab sx={{minWidth: 100,
                        margin: 3,
                        mb: 3,
                        padding: 2,
                        borderRadius: 2, 
                        boxShadow: 1, 
                        bgcolor: 'black',
                        color: ' rgb(229, 173, 99)'}}
                        label="Lyrics" {...a11yProps(0)} />
              {/* <Tab label="Details" {...a11yProps(1)} /> */}
              <Tab  sx={{minWidth: 100, 
                         margin: 3,
                         mb: 3, 
                         padding: 2,
                         borderRadius: 2,
                         boxShadow: 1,
                         bgcolor: 'black',
                         color: ' rgb(229, 173, 99)'}}
                         label="Artist" {...a11yProps(1)} />
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

        <Button variant="contained"
          onClick={() => history.goBack()}
          sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
        > BACK
        </Button>

      </motion.div>

      {/* addons */}
      <div className='request-details-addon-container'>
        <h2>Purchase Add-Ons For Your Song</h2>
        <div className='requestdetailsaddons'>

          {!request.extra_verse &&
            <div className='requestDetailsaddon'>
              <Checkbox
                disableRipple
                checked={addons.extra_verse}
                onClick={() => handleClick('extra_verse')}
                sx={{ position: 'absolute', mt: -2, ml: -2, backgroundColor: '#fff4df' }} />
              <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/extraverse_hmt8jd.jpg"></img>
              <p>Add a Verse!</p>
            </div>
          }

          {!request.streaming &&
            <div className='requestDetailsaddon'>
              <Checkbox
                disableRipple
                checked={addons.streaming}
                onClick={() => handleClick('streaming')}
                sx={{ position: 'absolute', mt: -2, ml: -2, backgroundColor: '#fff4df' }} />
              <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/addstreaming_hng5cz.jpg"></img>
              <p>Add Streaming!</p>
            </div>
          }

          {!request.backing_track &&
            <div className='requestDetailsaddon'>
              <Checkbox
                disableRipple
                checked={addons.backing_track}
                onClick={() => handleClick('backing_track')}
                sx={{ position: 'absolute', mt: -2, ml: -2, backgroundColor: '#fff4df' }} />
              <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/backingtrack_m94vwk.jpg"></img>
              <p>Karaoke Version!</p>
            </div>
          }

          {!request.license &&
            <div className='requestDetailsaddon'>
              <Checkbox
                disableRipple
                checked={addons.license}
                onClick={() => handleClick('license')}
                sx={{ position: 'absolute', mt: -2, ml: -2, backgroundColor: '#fff4df' }} />
              <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/commerciallicense_qkxiug.jpg"></img>
              <p>Add Commercial Licensing!</p>
            </div>
          }
        </div>

        {(addons.backing_track || addons.extra_verse || addons.license || addons.streaming) &&
          <>
            <p>Your Total: ${totalPrice.toFixed(2)}</p>
            <Button variant="contained"
              onClick={purchaseAddons}
              sx={{ height: 35, width: 60, backgroundColor: "#feaf17", color: "black" }}
            > BUY
            </Button>
          </>
        }
      </div>
    </>
  )
}

export default RequestDetails;

import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

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


// This function will display the user's song request with a player so they can review their song
function RequestDetails({ routeVariants }) {

  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();

  // call to the store to the currentRequest reducer
  const request = useSelector((store) => store.currentRequest);

  useEffect(() => {
    console.log('expecting to get the id of song(s)', ID);
    dispatch({
      type: 'FETCH_CURRENT_REQUEST',
      payload: ID.id
    })
  }, [ID.id])

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
        <>
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
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <h2 className='lyricsHeader'>Lyrics:</h2>
            <p>{`${request.lyrics}`}</p>
          </CustomTabPanel>

          {/* personal info tab */}
          <CustomTabPanel value={value} index={1}>
            <>
              <div className='detailsContainer'>
                <h2 className='detailsHeader'>Your Song Details:</h2>
                <div className='detailsRow'>
                  <div className='detailsItem'>
                    <h2>Occasion:</h2>
                    {
                      request.occasion ?
                        <p>{request.occasion}</p>
                        :
                        <p>No Occasion!</p>
                    }
                  </div>
                  <div className='detailsItem2'>
                    <h2>Inspiration:</h2>
                    {request.inspiration ?
                      <p>{request.inspiration}</p>
                      :
                      <p>No inspiration provided. Sad!</p>
                    }
                  </div>
                </div>

                <div className='detailsRow'>
                  <div className='detailsItem'>
                    <h2>Your story:</h2>
                    {
                      request.story1 ?
                        <p>{request.story1}</p>
                        :
                        <p>First story not provided.</p>
                    }
                    {
                      request.story2 ?
                        <p>{request.story2}</p>
                        :
                        <p>Second story not provided.</p>
                    }
                  </div>

                  <div className='detailsItem2'>
                    <h2>The Importance:</h2>
                    {
                      request.important_what ?
                        <p>{request.important_what}</p>
                        :
                        <p>What is important was not described.</p>
                    }
                    {
                      request.important_why ?
                        <p>{request.important_why}</p>
                        :
                        <p>Why it's imporant was not described.</p>
                    }
                  </div>
                </div>

                <div className='detailsRow'>
                  <div className='detailsItem'>
                    <h2>Song Parameters:</h2>
                    {request.genre ?
                      <p>Genre: {request.genre}</p>
                      :
                      <p>No genre provided.</p>
                    }
                    {
                      request.vocal_type ?
                        <p>Vocal type: {request.vocal_type}</p>
                        :
                        <p>No vocal type provided.</p>
                    }
                    {
                      request.vibe ?
                        <p>Vibe: {request.vibe}</p>
                        :
                        <p>No vibe provided.</p>
                    }
                    {
                      request.tempo ?
                        <p>Tempo: {request.tempo}</p>
                        :
                        <p>No tempo provided.</p>
                    }
                  </div>
                  <div className='detailsItem2'>
                    <h2>Additional Details:</h2>
                    {
                      request.additional_info ?
                        <p>{request.additional_info}</p>
                        :
                        <p>Nope!</p>
                    }
                  </div>
                </div>
              </div>
            </>
          </CustomTabPanel>

        </>
        <Button variant="contained"
          onClick={() => history.goBack()}
          sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
        >
          BACK
        </Button>

      </div>
    </motion.div>
  )
}

export default RequestDetails;

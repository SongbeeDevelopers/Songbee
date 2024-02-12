import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion';

import PropTypes from 'prop-types';

import './UserDetails.css';

// This is will display the tabs for "Your Song" and "Your Artist"
// In the "Your Song" tabs will display the lyrics and basic details
// Inside the "Your Artist" tabs, doesn't display any info right now, but
// in the future it will have the selected artist info


// This function will display the user's song request with a player so they can review their song
function UserDetails() {

  const routeVariants = {
    initial: {
        opacity: 0
    },
    final: {
        opacity: 1
    }
}

  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();
  // call to the store to the currentRequest reducer, request = useSelector store.currentRequest
  const request = useSelector((store) => store.currentRequest);
  
  const [value, setValue] = React.useState(0);

  useEffect(() => {
      console.log('expecting to get the id of song(s)', ID);
      dispatch({
          type: 'FETCH_CURRENT_REQUEST',
          payload: ID.id
      })
  }, [ID.id])

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
          <Box sx={{ p: 5 }}>
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
  
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };


  // Using MUI card that has tabs for the lyrics, basic details and artist
  return (
    <motion.div
      className='container'
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Your Song" {...a11yProps(0)} />
        <Tab label="Your Artist" {...a11yProps(1)} />
      </Tabs>

      <CustomTabPanel value={value} index={0}>

        <Box sx={{ minWidth: 400, minHeight: 700}}>
          <Card>
            <CardContent className='cardContainer' sx={{p: "5%"}}>
              <div className='songDetails'>
                <h1>To {request.recipient}, from {request.requester}</h1>

                <Typography sx={{ fontSize: 5 }} variant="h2" gutterBottom>
                  <p className='songTitle'>{request.title}</p> 
                </Typography>

                <Typography variant="h5" component="div"> 
                  <p className='artistTitle'> By {request.artist_name}</p>
                </Typography>
                {request.url && <audio controls src={request.url} ></audio>}

                <div>
                  {request.lyrics && <h2 className='lyricsHeader'>Lyrics:</h2>}
                  {request.lyrics && <p>{request.lyrics}</p>}
                </div>
              </div>

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
                    <p>{request.inspiration}</p>
                  </div>
                </div>

                <div className='detailsRow'>
                  <div className='detailsItem'>
                    <h2>Your story:</h2>
                    <p>{request.story1}</p>
                    <p>{request.story2}</p>
                  </div>

                  <div className='detailsItem2'>
                    <h2>The Importance:</h2>
                    <p>{request.important_what}<br/>
                    {request.important_why}</p>
                  </div>
                </div>

                <div className='detailsRow'>
                  <div className='detailsItem'>
                    <h2>Song Details:</h2>
                    <p>You requested a {request.genre} song with a {request.vocal_type} vocal type, a {request.vibe} vibe, and a {request.tempo} tempo</p>
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

                <CardActions>
                  <button className="back-btn" onClick={() => history.goBack()}>Back</button> 
                </CardActions>
                      <div>
                      </div>
            </CardContent>
          </Card>     
        </Box>
      </CustomTabPanel>
    </motion.div>
  )
}

export default UserDetails;

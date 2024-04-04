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

import '../UserPage.css'

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
  console.log("lyrics", request.lyrics)

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
                {
                  request.recipient && request.requester &&
                  <h1>To {request.recipient}, from {request.requester}</h1>
                }

                {
                  request.title && request.artist_name && request.url && request.lyrics ?
                  <>
                    <Typography sx={{ fontSize: 5 }} variant="h2" gutterBottom>
                      <p className='songTitle'>{request.title}</p> 
                    </Typography>

                    <Typography variant="h5" component="div"> 
                      <p className='artistTitle'> By {request.artist_name}</p>
                    </Typography>
                    {request.url && <audio controls src={request.url} ></audio>}

                    <div>
                      {request.lyrics && <h2 className='lyricsHeader'>Lyrics:</h2>}
                      {request.lyrics && <p>{`${request.lyrics}`}</p>}
                    </div>
                  </>
                  :
                  <p>Song in progress!</p>
                }
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

                <CardActions>
                  <button className="back-btn" onClick={() => history.goBack()}>Back</button> 
                </CardActions>
                      <div>
                      </div>
            </CardContent>
          </Card>     
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ minWidth: 400, minHeight: 700}}>
        <Card>
        <CardContent className='cardContainer' sx={{p: "5%"}}>
          <div className='songDetails'>
          <Typography sx={{ fontSize: 4 }} variant="h2" gutterBottom>
              <p className='songTitle'>Your Artist:</p> 
            </Typography>
            <img src={request.photo} />
            <Typography sx={{ fontSize: 5 }} variant="h2" gutterBottom>
              <p className='songTitle'>{request.artist_name}</p> 
            </Typography>
            <Typography variant="h5" component="div"> 
              <p className='artistTitle'>{request.bio}</p>
            </Typography>
            <Typography variant="h5"> 
            <a href={request.website}>{request.artist_name}'s website</a>
            </Typography>
            <button className="back-btn" onClick={() => history.goBack()}>Back</button> 
          </div>
        </CardContent>
        </Card>
        </Box>
      </CustomTabPanel>
    </motion.div>
  )
}

export default UserDetails;

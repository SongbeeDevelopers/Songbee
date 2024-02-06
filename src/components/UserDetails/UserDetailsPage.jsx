import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './UserDetails.css';

// This is will display the tabs for "Your Song" and "Your Artist"
// In the "Your Song" tabs will display the lyrics and basic details
// Inside the "Your Artist" tabs, doesn't display any info right now, but
// in the future it will have the selected artist info
function CustomTabPanel(props) {
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}; // End of the tab structure


// This function will display the user's song request with a player so they can review 
// their song
function UserDetails() {
    const history = useHistory();
    const dispatch = useDispatch();
    const ID = useParams();
    // call to the store to the currentRequest reducer, request = useSelector store.currentRequest
    const request = useSelector((store) => store.currentRequest);
   

    useEffect(() => {
        console.log('expecting to get the id of song(s)', ID);
        dispatch({
            type: 'FETCH_CURRENT_REQUEST',
            payload: ID.id
        })

    }, [ID.id])

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      event.preventDefault();
      setValue(newValue);
    };

    // Using MUI card that has tabs for the lyrics, basic details and artist
    return (
       <>
        <Box sx={{ minWidth: 400, minHeight: 700, maxHeight: 675}}>
          <Card variant="outlined">

          <CardContent className='cardContainer'>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Your Song" {...a11yProps(0)} />
          <Tab label="Your Artist" {...a11yProps(1)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <h2 className='lyricsHeader'>Lyrics:</h2>
          <p>{request.lyrics}</p>
          <h2 className='detailsHeader'>The Basic Details:</h2>
            <p>Occasion: {request.occasion}</p>
            <p>Genre: {request.genre_id}</p>
            <p>Vibe: {request.vibe}</p>
            <p>Tempo: {request.tempo}</p>
        </CustomTabPanel>

        <audio controls src={request.url} ></audio>
          <Typography sx={{ fontSize: 5 }} variant="h2" gutterBottom>
          <p className='songTitle'>{request.title}</p> 
          </Typography>
          <Typography variant="h5" component="div"> 
            <p className='artistTitle'> By {request.artist}</p>
            <button className="back-btn" onClick={() => history.goBack()}>Go Back 🐝</button> 
          </Typography>
        </CardContent>
        <CardActions>   
        </CardActions>
        </Card>     
      </Box>
      </>
    )


}
// }
export default UserDetails;
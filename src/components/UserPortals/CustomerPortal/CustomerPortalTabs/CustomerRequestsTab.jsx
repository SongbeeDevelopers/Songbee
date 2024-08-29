import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import StartSongButton from '../../../StartSongButton/StartSongButton'

import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@mui/material'

import '../CustomerPortal.css'


// This function will display the user's order history
function CustomerRequests() {

  const dispatch = useDispatch();
  const history = useHistory();

    // retrieves request history on mount
    useEffect(() => {
      dispatch({ type: 'FETCH_USER_REQUESTS' })
      dispatch({ type: 'FETCH_ALL_ARTISTS' })
    }, []);

  const userRequests = useSelector((store) => store.userRequests);
  const artists = useSelector((store => store.allArtists))

  const viewDetails = (req) => {
    dispatch({
      type: 'FETCH_CURRENT_ARTIST',
      payload:  req.artist_id
    })
    dispatch({
      type: 'FETCH_CURRENT_REQUEST',
          payload: req.id
    })
   

    history.push(`/details/${req.id}`);
  };

  const startSong = () => {
    history.push('/order')
  }

  const statusDisplay = (req) => {
    
  }

  function getDueDate(requestDay, deliveryDays) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const due = new Date(requestDay).getTime() + msPerDay * deliveryDays
    const dateSplit = new Date(due).toLocaleString('en-us').split(',')
    return dateSplit[0];
  }

  return (
    <div className='tab-body'>
      {userRequests.length > 0 ?
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Request Date</TableCell>
              <TableCell align="center">Due</TableCell>
              <TableCell align="center">Recipient</TableCell>
              <TableCell align="center">Artist</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userRequests.map((request, i) => (
              <TableRow key={i}>
                {/* req date */}
                <TableCell>
                  {(new Date(request.created_at).toLocaleString('en-us').split(','))[0]}
                </TableCell>

                {/* due date */}
                <TableCell align="center">
                  {getDueDate(request.created_at, request.delivery_days)}
                </TableCell>

                {/* recipient */}
                <TableCell align="center">
                  {request.recipient}
                </TableCell>

                {/* artist */}
                <TableCell align="center">
                  {artists.map((artist) => {
                    if (request.artist_id === artist.id) {
                      return artist.artist_name
                    }
                  })}
                </TableCell>

                {/* status */}
                <TableCell align="center">
                  {request.accepted ? request.isComplete ? `In Progress` : `Complete!` : `Pending Artist Acceptance`}
                </TableCell>

                {/* details */}
                <TableCell align="center">
                  {request.is_complete && request.is_approved ?
                  <Button variant="contained"
                    onClick={() => viewDetails(request)}
                    sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                  >
                    DETAILS
                  </Button>
                  :
                  "Pending Completion"
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        :
        <div className='portal-no-data'>
          <p>You have no orders!</p>
          <StartSongButton />
        </div>
      }
    </div>
  )
}

export default CustomerRequests;

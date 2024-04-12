import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import StartSongButton from '../../StartSongButton/StartSongButton'

import { Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material'

import '../CustomerPortal.css'


// This function will display the user's order history
function CustomerRequests() {

  const dispatch = useDispatch();
  const history = useHistory();

  const userRequests = useSelector((store) => store.userRequests);

  // retrieves request history on mount
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_REQUESTS' })
  }, []);

  const viewDetails = (reqId) => {
    history.push(`/details/${reqId}`);
  };

  const startSong = () => {
    history.push('/order')
  }

  function getDueDate(requestDay, deliveryDays) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const due = new Date(requestDay).getTime() + msPerDay*deliveryDays
    const dateSplit = new Date(due).toLocaleString('en-us').split(',')
    return dateSplit[0];
  }

  return (
    <div className='tab-body'>
        {userRequests.length > 1 ?
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
              {userRequests.map((request, i) =>(
                <TableRow key={i}>
                  <TableCell align="left">{(new Date(request.created_at).toLocaleString('en-us').split(','))[0]}</TableCell>
                  <TableCell align="center">{getDueDate(request.created_at, request.delivery_days)}</TableCell>
                  <TableCell align="center">{request.recipient}</TableCell>
                  <TableCell align="center">{}</TableCell>
                  <TableCell align="center">{request.is_complete ? `Complete!` : `In Progress`}</TableCell>
                  <TableCell align="center"><button onClick={() => viewDetails(request.id)} className='user-portal-details-btn'>Details</button></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        :
        <>
          <p>You have no orders!</p>
          <StartSongButton />
        </>
        }
    </div>
  )
}

export default CustomerRequests;

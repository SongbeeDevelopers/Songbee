import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
export default function JuniorRequests() {

  const dispatch = useDispatch();
  const history = useHistory();

  const userSubscriptions = useSelector((store) => store.userSubscriptions);
  const viewDetails = (reqId) => {
    history.push(`/subscription/${reqId}`);
  };

  const calculateDelivery = (last_delivery, packId) => {
    let subLength
    if(packId <= 6){
      subLength = 2
    }
    else {
      subLength = 3
    }
    const lastDelivery = new Date(last_delivery);
    lastDelivery.setMonth(lastDelivery.getMonth() + subLength)
    return lastDelivery
  }
  const end = new Date()

  return (
    <div className='tab-body'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Request Date</TableCell>
              <TableCell align="center">Recipient</TableCell>
              <TableCell align="center">Current Pack</TableCell>
              <TableCell align="center">Next Pack Delivery</TableCell>
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userSubscriptions.map((sub, i) => {
              if (end >= calculateDelivery(sub.last_delivery, sub.pack_id)){
                dispatch({
                  type: "UPDATE_SUBSCRIPTION_PACK",
                  payload: {id: sub.id, pack: sub.pack_id}
                })
              }
              if (!sub.is_paid){
                dispatch({
                    type: "DELETE_JR_REQUEST",
                    payload: row.id
                })
            }
              return (
              <TableRow key={i}>
                {/* req date */}
                <TableCell>
                  {(new Date(sub.created_at).toLocaleString('en-us').split(','))[0]}
                </TableCell>

                {/* recipient */}
                <TableCell align="center">
                  {sub.name}
                </TableCell>

                <TableCell align="center">
                  {sub.title}
                </TableCell>

                <TableCell align="center">
                {(calculateDelivery(sub.last_delivery, sub.pack_id).toLocaleString('en-us').split(','))[0]}
                </TableCell>

                {/* details */}
                <TableCell align="center">
                  <Button variant="contained"
                    onClick={() => viewDetails(sub.id)}
                    sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                  >
                    DETAILS
                  </Button>
                </TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
    </div>
  )
}

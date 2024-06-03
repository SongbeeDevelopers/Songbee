import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterBar from '../../../FilterBar/FilterBar';
import MessageUserButton from '../../../AdminPortal/AdminPortalTabs/MessageUserButton';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';


export default function AdminSubscriptionsTab({ num, data }) {

  console.log('DATA', data)

  const dispatch = useDispatch()

  // date/time
  const monthDiff = (d1, d2) => {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  
  const end = new Date()

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

  return (
    <div>
      {data.length > 0 ?
        <>
          <FilterBar type={num === 0 ? 'pending' : 'completed'} />

          <div className="admin-tabs-contents">
            <Table sx={{ minWidth: 700 }}>

              {/* table header */}
              <TableHead>
                <TableRow>
                  <TableCell>Creation Date</TableCell>
                  <TableCell align="center">Last Delivery</TableCell>
                  <TableCell align="center">Requester E-Mail</TableCell>
                  <TableCell align="center">Child's Age</TableCell>
                  <TableCell align="center">Current Pack</TableCell>
                  <TableCell align="center">Next Pack Delivered</TableCell>
                  <TableCell align="center">Message</TableCell>
                </TableRow>
              </TableHead>

              {/* table body */}
              <TableBody>
                {data.map((row) => {
                if (end >= calculateDelivery(row.last_delivery, row.pack_id)){
                    dispatch({
                        type: "UPDATE_SUBSCRIPTION_PACK",
                        payload: {id: row.id, pack: row.pack_id}
                    })
                }
                if (!row.is_paid){
                    dispatch({
                        type: "DELETE_JR_REQUEST",
                        payload: row.id
                    })
                }
                 return (
                  <TableRow hover key={row.id}>

                    {/* creation date */}
                    <TableCell>
                      {(new Date(row.created_at).toLocaleString('en-us').split(','))[0]}
                    </TableCell>

                    {/* last delivery */}
                    <TableCell>
                      {(new Date(row.last_delivery).toLocaleString('en-us').split(','))[0]}
                    </TableCell>

                    {/* email */}
                    <TableCell align="center">
                      {row.email}
                    </TableCell>

                    {/* age */}
                    <TableCell align="center">
                      {monthDiff(new Date(row.age), end)} Months
                    </TableCell>

                    {/* current pack */}
                    <TableCell align="center">
                      {row.title}
                    </TableCell>

                    {/* due */}
                    <TableCell align="center">
                    {(calculateDelivery(row.last_delivery, row.pack_id).toLocaleString('en-us').split(','))[0]}
                    </TableCell>

                    <TableCell align='center'>
                    <MessageUserButton userId={row.user_id} />
                  </TableCell>

                  </TableRow>
                )})}
              </TableBody>
            </Table>
          </div>

        </>
        :
        <p className='admin-empty-msg'>There are currently no active subscriptions.</p>
      }
    </div>
  );
}

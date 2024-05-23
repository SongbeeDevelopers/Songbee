import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AdminCompleteDialog from './AdminPortalDialogs/AdminCompleteDialog';
import AdminDetailsDialog from './AdminPortalDialogs/AdminDetailsDialog'
import FilterBar from '../../../FilterBar/FilterBar';
import MessageUserButton from '../../../AdminPortal/AdminPortalTabs/MessageUserButton';

import {
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';


export default function AdminSubscriptionsTab({ num, data }) {

  const dispatch = useDispatch()

  console.log("data:", data)

  // modal state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(false)

  // date/time
  const monthDiff = (d1, d2) => {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  
  const end = new Date()

  // details modal logic
//   const openDetails = (row) => {
//     // grabs genre id from genre in reducer
//     for (let genre of genres) {
//       if (row.genre === genre.name) {
//         row.genre = genre.id
//       }
//     }
//     // sets edit reducer with request data
//     dispatch({ type: 'SET_EDIT_DATA', payload: row })
//     setDetailsOpen(true)
//   }
//   const closeDetails = () => {
//     // clears reducer on close
//     dispatch({ type: 'CLEAR_EDIT_DATA' })
//     setDetailsOpen(false)
//   }

  // same as above, logic for complete dialog
  const openComplete = (row) => {
    dispatch({ type: 'SET_EDIT_DATA', payload: row })
    setCompleteOpen(true)
  }
  const closeComplete = () => {
    dispatch({ type: 'CLEAR_EDIT_DATA' })
    setCompleteOpen(false)
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
                  <TableCell align="center">Requester E-Mail</TableCell>
                  <TableCell align="center">Child's Age</TableCell>
                  <TableCell align="center">Current Pack</TableCell>
                  <TableCell align="center">Next Pack Delivered</TableCell>
                  <TableCell align="center">Message</TableCell>
                </TableRow>
              </TableHead>

              {/* table body */}
              <TableBody>
                {data.map((row) => (
                  <TableRow hover key={row.id}>

                    {/* creation date */}
                    <TableCell>
                      {new Date(row.created_at).toLocaleString('en-us')}
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
                      {3 - monthDiff(new Date(row.created_at), end)} Months
                    </TableCell>

                    <TableCell align='center'>
                    <MessageUserButton userId={row.user_id} />
                  </TableCell>


                  </TableRow>
                ))}
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

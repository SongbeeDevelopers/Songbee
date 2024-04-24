import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AdminCompleteDialog from './AdminPortalDialogs/AdminCompleteDialog';
import AdminDetailsDialog from './AdminPortalDialogs/AdminDetailsDialog'
import FilterBar from '../../FilterBar/FilterBar';

import {
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';


export default function AdminRequestsTab({ num, data }) {

  const dispatch = useDispatch()

  const genres = useSelector(store => store.genres)

  // modal state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(false)

  // date/time
  function getDueDate(requestDay, deliveryDays) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const due = new Date(requestDay).getTime() + msPerDay * deliveryDays
    return new Date(due).toLocaleString('en-us')
  }

  const openDetails = (row) => {
    // grabs genre id from genre in reducer
    for (let genre of genres) {
      if (row.genre === genre.name) {
        row.genre = genre.id
      }
    }
    dispatch({ type: 'SET_EDIT_DATA', payload: row })
    setDetailsOpen(true)
  }


  return (
    <div>
      {data.length > 0 ?
        <>
          <FilterBar type={num === 0 ? 'pending' : 'completed'} />

          <Table sx={{ minWidth: 700 }}>

            {/* table header */}
            <TableHead>
              <TableRow>
                <TableCell>Creation Date</TableCell>
                <TableCell align="center">Requester E-Mail</TableCell>
                <TableCell align="center">Artist</TableCell>
                <TableCell align="center">Due</TableCell>
                <TableCell align="center">View Details</TableCell>
                <TableCell align="center">Completion Form</TableCell>
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

                  {/* artist */}
                  <TableCell align="center">
                    {/* NEED TO FILL THIS */}
                  </TableCell>

                  {/* due */}
                  <TableCell align="center">
                    {getDueDate(row.created_at, row.delivery_days)}
                  </TableCell>

                  {/* details btn */}
                  <TableCell align="center">
                    <Button variant="contained"
                      onClick={() => openDetails(row)}
                      sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                    >
                      DETAILS
                    </Button>

                    {/* details dialog */}
                    <Dialog keepMounted fullWidth maxWidth="md"
                      open={detailsOpen}
                      onClose={() => setDetailsOpen(false)}
                    >
                      <AdminDetailsDialog setDetailsOpen={setDetailsOpen} />
                    </Dialog>
                  </TableCell>

                  {/* complete button */}
                  <TableCell align="center">
                    <Button variant="contained"
                      onClick={() => setCompleteOpen(true)}
                      sx={{ height: 35, width: 95, backgroundColor: "#feaf17", color: "black" }}
                    >
                      COMPLETE
                    </Button>

                    {/* complete dialog */}
                    <Dialog keepMounted fullWidth maxWidth="md"
                      open={completeOpen}
                      onClose={() => setCompleteOpen(false)}
                    >
                      <AdminCompleteDialog request={row} />
                    </Dialog>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
        :
        <p className='admin-empty-msg'>There are currently no requests.</p>
      }
    </div>
  );
}

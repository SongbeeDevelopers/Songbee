import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AdminCompleteDialog from './AdminPortalDialogs/AdminCompleteDialog';
import AdminDetailsDialog from './AdminPortalDialogs/AdminDetailsDialog'
import FilterBar from '../../../FilterBar/FilterBar';

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
  const artists = useSelector(store => store.allArtists)

  // modal state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(false)

  // date/time
  function getDueDate(requestDay, deliveryDays) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const due = new Date(requestDay).getTime() + msPerDay * deliveryDays
    return new Date(due).toLocaleString('en-us')
  }

  // details modal logic
  const openDetails = (row) => {
    // grabs genre id from genre in reducer
    for (let genre of genres) {
      if (row.genre === genre.name) {
        row.genre = genre.id
      }
    }
    // sets edit reducer with request data
    dispatch({ type: 'SET_EDIT_DATA', payload: row })
    setDetailsOpen(true)
  }
  const closeDetails = () => {
    // clears reducer on close
    dispatch({ type: 'CLEAR_EDIT_DATA' })
    setDetailsOpen(false)
  }

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
                      {row.artist_id ?
                        artists.map((artist) => {
                          if (artist.id === row.artist_id) {
                            return artist.artist_name
                          }
                        })
                        :
                        'Unassigned'
                      }
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
                        onClose={closeDetails}
                      >
                        <AdminDetailsDialog setDetailsOpen={setDetailsOpen} />
                      </Dialog>
                    </TableCell>

                    {/* complete button */}
                    <TableCell align="center">
                      <Button variant="contained"
                        onClick={() => openComplete(row)}
                        sx={{ height: 35, width: 95, backgroundColor: "#feaf17", color: "black" }}
                      >
                        COMPLETE
                      </Button>

                      {/* complete dialog */}
                      <Dialog keepMounted fullWidth maxWidth="md"
                        open={completeOpen}
                        onClose={closeComplete}
                      >
                        <AdminCompleteDialog setCompleteOpen={setCompleteOpen} />
                      </Dialog>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </>
        :
        <p className='admin-empty-msg'>There are currently no requests.</p>
      }
    </div>
  );
}

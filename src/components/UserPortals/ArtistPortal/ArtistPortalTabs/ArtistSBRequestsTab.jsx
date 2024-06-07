import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterBar from '../../../FilterBar/FilterBar';
import AdminDetailsDialog from "../../../ArtistRequests/AdminDetailsDialog";
import AdminCompleteDialog from "../../AdminPortal/AdminPortalTabs/AdminPortalDialogs/AdminCompleteDialog";
import AcceptSelector from "./AcceptSelector";

import {
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import '../ArtistPortal.css'

export default function ArtistSBRequestsTab({ artistProfile }) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: "FETCH_ARTIST_REQUESTS",
      payload: artistProfile
    });
  }, [])

  const artistRequests = useSelector(store => store.artistRequests)
  const genres = useSelector(store => store.genres)

  // modal state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(false)

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

  const closeDetails = () => {
    dispatch({ type: 'CLEAR_EDIT_DATA' })
    setDetailsOpen(false)
  }

  const closeComplete = () => {
    dispatch({ type: 'CLEAR_EDIT_DATA' })
    setCompleteOpen(false)
  }


  return (
    <div className="tab-body">
      {artistRequests.length > 0 ?
        <>
          <FilterBar />

          <Table sx={{ minWidth: 700 }}>

            {/* table header */}
            <TableHead>
              <TableRow>
                <TableCell >Accepted?</TableCell>
                <TableCell align="center">Creation Date</TableCell>
                <TableCell align="center">Due</TableCell>
                <TableCell align="center">Requester E-Mail</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">View Details</TableCell>
                <TableCell align="center">Completion Form</TableCell>
              </TableRow>
            </TableHead>

            {/* table body */}
            <TableBody>
              {artistRequests.map((row) => {

                // converts artist genres to more easily check if request matches artists genres
                const artistGenresSimple = artistProfile.genres.map(genre => genre.genre)

                // only show table if request is within artist genres and is not assigned an artist
                if (artistGenresSimple.includes(row.genre) && !artistRequests.artist_id) return (
                  <TableRow hover key={row.id}>
                    {/* accepted */}
                    <TableCell align="center">
                      {row.accepted ?
                        "Accepted"
                        :
                        <AcceptSelector request={row} />
                      }
                    </TableCell>

                    {/* creation date */}
                    <TableCell align="center">
                      {new Date(row.created_at).toLocaleString('en-us')}
                    </TableCell>

                    {/* due */}
                    <TableCell align="center">
                      {getDueDate(row.created_at, row.delivery_days)}
                    </TableCell>

                    {/* email */}
                    <TableCell align="center">
                      {row.email}
                    </TableCell>

                    <TableCell align="center">
                      {row.accepted ? row.is_complete ? row.is_approved ? "Done!" : "Pending Approval" : "Pending Completion" : "Pending Acceptance"}
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
                        onClick={() => setCompleteOpen(true)}
                        sx={{ height: 35, width: 95, backgroundColor: "#feaf17", color: "black" }}
                      >
                        COMPLETE
                      </Button>

                      {/* complete dialog */}
                      <Dialog keepMounted fullWidth maxWidth="md"
                        open={completeOpen}
                        onClose={closeComplete}
                      >
                        <AdminCompleteDialog request={row} />
                      </Dialog>
                    </TableCell>

                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </>
        :
        <p className='admin-empty-msg'>There are currently no requests.</p>
      }
    </div>
  )
}

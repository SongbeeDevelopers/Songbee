import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterBar from '../../../FilterBar/FilterBar';
import MessageUserButton from '../../../AdminPortal/AdminPortalTabs/MessageUserButton';
import AdminArtistDetailsDialog from './AdminPortalDialogs/AdminArtistDetailsDialog'

import {
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"


export default function AdminArtistListTab() {

  const data = useSelector(store => store.allArtists)

  const dispatch = useDispatch()

  const [detailsOpen, setDetailsOpen] = useState(false)

  const openDetails = (artist) => {
    // change genres from an array of objects to an array of genre ids
    const genresSimple = []
    for (let genre of artist.genres) {
      genresSimple.push(genre.id)
    }
    dispatch({ type: 'SET_EDIT_DATA', payload: { ...artist, genres: genresSimple } })
    setDetailsOpen(true)
  }

  const closeDetails = () => {
    dispatch({ type: 'CLEAR_EDIT_DATA' })
    setDetailsOpen(false)
  }

  return (
    <div>
      {data.length > 0 ?
        <>
          <FilterBar type='artist' />
          <div className="admin-tabs-contents">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">

              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Vocal Type</TableCell>
                  <TableCell align="center">Active?</TableCell>
                  <TableCell align="center">Details</TableCell>
                  <TableCell align="center">Message</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((artist) => (
                  <TableRow hover key={artist.id}>
                    <TableCell component="th" scope="row">
                      {artist.name}
                    </TableCell>

                    <TableCell align="center">
                      {artist.email}
                    </TableCell>

                    <TableCell align="center">
                      {artist.vocal_type}
                    </TableCell>

                    <TableCell align="center">
                      {artist.is_active ?
                        <Button className='admin-portal-inputs' variant="contained"
                          onClick={() => dispatch({ type: 'DEACTIVATE_ARTIST', payload: { id: artist.id } })}
                          sx={{ m: 'auto', height: 35, width: 120, backgroundColor: "#feaf17", color: "black" }}
                        >
                          DEACTIVATE
                        </Button>
                        :
                        <Button className='admin-portal-inputs' variant="contained"
                          onClick={() => dispatch({ type: 'ACTIVATE_ARTIST', payload: { id: artist.id } })}

                          sx={{ height: 35, width: 90, backgroundColor: "#feaf17", color: "black" }}
                        >
                          ACTIVATE
                        </Button>
                      }
                    </TableCell>

                    <TableCell align="center">
                      <Button variant="contained"
                        onClick={() => openDetails(artist)}
                        sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                      >
                        DETAILS
                      </Button>
                      <Dialog keepMounted fullWidth maxWidth="md"
                        open={detailsOpen}
                        onClose={closeDetails}
                      >
                        <AdminArtistDetailsDialog setDetailsOpen={setDetailsOpen} />
                      </Dialog>
                    </TableCell>

                    <TableCell align="center">
                      <MessageUserButton userId={artist.user_id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </div>

        </>
        :
        <>
          <FilterBar type='artist' />
          <p className='admin-empty-msg'>There are currently no Artists.</p>
        </>
      }
    </div>

  );
}

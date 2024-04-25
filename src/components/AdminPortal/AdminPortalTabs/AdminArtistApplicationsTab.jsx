import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import FilterBar from "../../FilterBar/FilterBar";
import ArtistAppDetailsDialog from "./AdminPortalDialogs/ArtistAppDetailsDialog"

import {
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"
import Swal from "sweetalert2";


export default function AdminArtistTable({ data }) {

  const dispatch = useDispatch();

  const [openApp, setOpenApp] = useState(false)

  const approveArtist = (id, user_id) => {
    Swal.fire({
      icon: 'question',
      title: "Approve Artist?",
      showCancelButton: true,
      confirmButtonText: "Approve",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "APPROVE_ARTIST",
          payload: { id, user_id },
        });
        Swal.fire("Approved!", "", "success");
      }
    });
  };

  const denyArtist = (id) => {
    Swal.fire({
      icon: 'warning',
      title: "Deny Artist?",
      text: "This cannot be undone.",
      showCancelButton: true,
      confirmButtonText: "Deny",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "DELETE_ARTIST",
          payload: id,
        });
        Swal.fire("Denied!", "", "success");
      }
    });
  };


  return (
    <div>
      {data.length > 0 ?
        <>
          <FilterBar type="artist" />

          <Table sx={{ minWidth: 700 }}>

            <TableHead>
              <TableRow>
                <TableCell>Artist Name</TableCell>
                <TableCell align="center">Vocal Type</TableCell>
                <TableCell align="center">Website</TableCell>
                <TableCell align="center">Details</TableCell>
                <TableCell align="center">Approve</TableCell>
                <TableCell align="center">Deny</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((artist) => {
                return (
                  <TableRow hover key={artist.id}>
                    {/* artist name */}
                    <TableCell>
                      {artist.artist_name}
                    </TableCell>

                    {/* vocal type */}
                    <TableCell align="center">
                      {artist.vocal_type}
                    </TableCell>

                    {/* website */}
                    <TableCell align="center">
                      {artist.website}
                    </TableCell>

                    <TableCell align="center">
                      <Button variant="contained"
                        onClick={() => setOpenApp(true)}
                        sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                      >
                        Details
                      </Button>

                      <Dialog keepMounted fullWidth maxWidth="md"
                        open={openApp}
                        onClose={() => setOpenApp(false)}
                      >
                        <ArtistAppDetailsDialog artist={artist} setOpenApp={setOpenApp} />
                      </Dialog>
                    </TableCell>

                    {/* approve button */}
                    <TableCell align="center">
                      <Button variant="contained"
                        onClick={() => approveArtist(artist.id, artist.user_id)}
                        sx={{ height: 35, width: 90, backgroundColor: "#feaf17", color: "black" }}
                      >
                        APPROVE
                      </Button>
                    </TableCell>

                    {/* deny button */}
                    <TableCell align="center">
                      <Button variant="contained"
                        onClick={() => denyArtist(artist.id)}
                        sx={{ height: 35, width: 65, backgroundColor: "#feaf17", color: "black" }}
                      >
                        DENY
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </>
        :
        <p className='admin-empty-msg'>There are currently no artist applications.</p>
      }
    </div>
  );
}

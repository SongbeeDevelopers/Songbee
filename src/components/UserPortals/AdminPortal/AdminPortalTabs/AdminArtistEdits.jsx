import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import FilterBar from "../../../FilterBar/FilterBar";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"


export default function AdminArtistsPendingEdits() {

  const data = useSelector(store => store.pendingEdits)

  const dispatch = useDispatch();

  const approveArtist = (id) => {
    dispatch({
      type: "APPROVE_EDIT_ARTIST",
      payload: { id },
    });
  };

  const denyArtist = (id) => {
    dispatch({
      type: "DENY_EDIT_ARTIST",
      payload: id,
    });
  };


  return (
    <div>
      {data.length > 0 ?
        <>
          <FilterBar type="artist" />

          <div className="admin-tabs-contents">
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Artist Name</TableCell>
                <TableCell align="center">Vocal Type</TableCell>
                <TableCell align="center">Website</TableCell>
                <TableCell align="center">Approve</TableCell>
                <TableCell align="center">Deny</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((artist) => {
                return (
                  <TableRow hover key={artist.id}>
                    {/* artist name */}
                    <TableCell component="th" scope="row">
                      {artist.edited_artistName}
                    </TableCell>

                    {/* vocal type */}
                    <TableCell align="center">
                      {artist.edited_vocal_type}
                    </TableCell>

                    {/* website */}
                    <TableCell align="center">
                      {artist.edited_website}
                    </TableCell>

                    {/* approve btn */}
                    <TableCell align="center">
                      <Button variant="contained"
                        onClick={() => approveArtist(artist.artist_id)}
                        sx={{ height: 35, width: 90, backgroundColor: "#feaf17", color: "black" }}
                      >
                        APPROVE
                      </Button>
                    </TableCell>

                    {/* deny btn */}
                    <TableCell align="center">
                      <Button variant="contained"
                        onClick={() => denyArtist(artist.artist_id)}
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
          </div>
        </>
        :
        <p className='admin-empty-msg'>There are currently no pending edits.</p>
      }
    </div>
  );
}

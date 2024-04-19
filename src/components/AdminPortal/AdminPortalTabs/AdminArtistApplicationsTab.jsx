import * as React from "react";
import { useDispatch } from "react-redux";

import FilterBar from "../../FilterBar/FilterBar";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"


export default function AdminArtistTable({ data }) {

  const dispatch = useDispatch();

  const approveArtist = (id, user_id) => {
    dispatch({
      type: "APPROVE_ARTIST",
      payload: { id, user_id },
    });
  };

  const denyArtist = (id) => {
    dispatch({
      type: "DELETE_ARTIST",
      payload: id,
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

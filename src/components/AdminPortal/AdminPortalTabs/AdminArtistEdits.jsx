import * as React from "react";
import { useDispatch } from "react-redux";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import FilterBar from "../../FilterBar/FilterBar";


export default function AdminArtistsPendingEdits({ data }) {

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

  // row styling
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0, // hides last border
    },
  }));


  return (
    <div>
      {data.length > 0 ?
        <>
          <FilterBar type="artist" />

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
                  <StyledTableRow key={artist.id}>
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
                      <button
                        className="admin-button"
                        onClick={() => approveArtist(artist.artist_id)}
                      >
                        Approve
                      </button>
                    </TableCell>

                    {/* deny btn */}
                    <TableCell align="center">
                      <button
                        className="admin-button"
                        onClick={() => denyArtist(artist.artist_id)}
                      >
                        Deny
                      </button>
                    </TableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </>
        :
        <p className='admin-empty-msg'>There are currently no pending edits.</p>
      }
    </div>
  );
}

import * as React from "react";
import { useDispatch } from "react-redux";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import FilterBar from "../../FilterBar/FilterBar";


function AdminArtistTable({ data }) {

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
              <StyledTableRow key={artist.id}>
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
                  <button
                    className="admin-button"
                    onClick={() => approveArtist(artist.id, artist.user_id)}
                  >
                    Approve
                  </button>
                </TableCell>

                {/* deny button */}
                <TableCell align="center">
                  <button
                    className="admin-button"
                    onClick={() => denyArtist(artist.id)}
                  >
                    Deny
                  </button>
                </TableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminArtistTable;

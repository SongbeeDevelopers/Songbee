import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import FilterBar from "../../FilterBar/FilterBar";

function AdminArtistTable({ data }) {

  const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch({
  //     type: "SET_FILTER_RESULTS",
  //     payload: artists,
  //   });
  // }, []);   this is the one doing thee filtering above ^

  useEffect(() => {

  }, []);

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

  // header styling
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

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
                  <StyledTableCell component="th" scope="row">
                    {artist.artist_name}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {artist.vocal_type}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {artist.website}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <button
                      className="admin-button"
                      onClick={() => approveArtist(artist.id, artist.user_id)}
                    >
                      Approve
                    </button>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <button
                      className="admin-button"
                      onClick={() => denyArtist(artist.id)}
                    >
                      Deny
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
    </div>
  );
}

export default AdminArtistTable;

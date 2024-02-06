import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import UserClass from './UserClass';

function AdminArtistTable({data}) {
    const dispatch = useDispatch();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  return (
    <div className="container">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Artist Name</StyledTableCell>
            <StyledTableCell align="center">Vocal Type</StyledTableCell>
            <StyledTableCell align="center">Website</StyledTableCell>
            <StyledTableCell align="center">Approve</StyledTableCell>
            <StyledTableCell align="center">Deny</StyledTableCell>
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
              <button>Approve</button>
              </StyledTableCell>
              <StyledTableCell align="center">
              <button>Deny</button>
              </StyledTableCell>
            </StyledTableRow>
          )}
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default AdminArtistTable;
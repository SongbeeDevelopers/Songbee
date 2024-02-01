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

function AdminUserTable({data}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_ALL_USERS" })
      }, [])
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
  const users = useSelector(store => store.allUsers)


  return (
    <div className="container">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Credit</StyledTableCell>
            <StyledTableCell align="center">Created At</StyledTableCell>
            <StyledTableCell align="center">User Class</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
          return (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.username}
              </StyledTableCell>
              <StyledTableCell align="center">
                {user.email}
              </StyledTableCell>
              <StyledTableCell align="center">
              {user.credit ? user.credit : "0"}
               </StyledTableCell>
              <StyledTableCell align="center">
               
              </StyledTableCell>
              <StyledTableCell align="center">
              <UserClass user={user} />
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

export default AdminUserTable;
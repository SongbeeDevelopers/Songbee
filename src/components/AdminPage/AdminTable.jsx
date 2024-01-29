import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AdminTable({data}) {
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
  const now = new Date ();
  const msPerDay = 24 * 60 * 60 * 1000; 

  return (
    <div className="container">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Song Recipient</StyledTableCell>
            <StyledTableCell align="center">Due Date</StyledTableCell>
            <StyledTableCell align="center">Complete?</StyledTableCell>
            <StyledTableCell align="center">Edit Request</StyledTableCell>
            <StyledTableCell align="center">Complete Request</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
          const creationTime = new Date (row.created_at);
          const daysLeft = Math.round((now.getTime() - creationTime.getTime()) / msPerDay);
          console.log("daysLeft:", daysLeft);
          return (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.recipient}
              </StyledTableCell>
              <StyledTableCell align="center">Due in {row.delivery_days - daysLeft} days</StyledTableCell>
              <StyledTableCell align="center">{row.is_complete}</StyledTableCell>
              <StyledTableCell align="center"><button className='admin-button'>Edit</button></StyledTableCell>
              <StyledTableCell align="center"><button className='admin-button'>Complete</button></StyledTableCell>
            </StyledTableRow>
          )}
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default AdminTable;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function AdminPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_ALL_REQUESTS" })
  }, [])
  const pendingRequests = useSelector(store => store.pendingRequests)
  console.log("Pending req:", pendingRequests)
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
      <p>Admin Page!!!!!!!!!!</p>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Song Recipient</StyledTableCell>
            <StyledTableCell align="right">Delivery Days</StyledTableCell>
            <StyledTableCell align="right">Complete?</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pendingRequests.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.recipient}
              </StyledTableCell>
              <StyledTableCell align="right">{row.delivery_days}</StyledTableCell>
              <StyledTableCell align="right">{row.is_complete}</StyledTableCell>
              <StyledTableCell align="right">Stuff</StyledTableCell>
              <StyledTableCell align="right">Stuff</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default AdminPage;

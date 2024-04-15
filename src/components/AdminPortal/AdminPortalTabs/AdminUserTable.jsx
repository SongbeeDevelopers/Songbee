import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import UserClassSelector from './UserClassSelector';
import FilterBar from '../../FilterBar/FilterBar';

function AdminUserTable({num}) {

  // table header styling
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  // table row styling
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const dispatch = useDispatch();

  const users = useSelector(store => store.allUsers)
  const data = useSelector(store => store.filterResults);

  useEffect(() => {
    dispatch({
        type: "SET_FILTER_RESULTS",
        payload: users
    })
  }, [])


  return (
    <div>
    <FilterBar type='user'/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">

          <TableHead>
            <TableRow>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell align="center">Credit</StyledTableCell>
              <StyledTableCell align="center">Created At</StyledTableCell>
              <StyledTableCell align="center">User Class</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((user) => {
            return (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.email}
                </StyledTableCell>

                <StyledTableCell align="center">
                {user.credit ? user.credit : "0"}
                </StyledTableCell>

                <StyledTableCell align="center">
                {new Date(user.created_at).toLocaleString('en-us')}
                </StyledTableCell>

                <StyledTableCell align="center">
                <UserClassSelector user={user} />
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

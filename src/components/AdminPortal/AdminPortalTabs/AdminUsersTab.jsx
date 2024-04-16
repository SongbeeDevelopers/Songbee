import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import UserClassSelector from './UserClassSelector';
import FilterBar from '../../FilterBar/FilterBar';


export default function AdminUsersTab({ data }) {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: "SET_FILTER_RESULTS",
  //     payload: users
  //   })
  // }, [])

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

  return (
    <div>
      <FilterBar type='user' />
        <Table sx={{ minWidth: 700 }} aria-label="customized table">

          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="center">Credit</TableCell>
              <TableCell align="center">Created At</TableCell>
              <TableCell align="center">User Class</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((user) => (
              <StyledTableRow key={user.id}>
                {/* email */}
                <TableCell component="th" scope="row">
                  {user.email}
                </TableCell>

                {/* credit */}
                <TableCell align="center">
                  {user.credit ? user.credit : "0"}
                </TableCell>

                {/* creation date */}
                <TableCell align="center">
                  {new Date(user.created_at).toLocaleString('en-us')}
                </TableCell>

                {/* class */}
                <TableCell align="center">
                  <UserClassSelector user={user} />
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>

        </Table>
    </div>
  );
}

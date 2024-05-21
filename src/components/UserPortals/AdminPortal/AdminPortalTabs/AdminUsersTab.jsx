import * as React from 'react';

import UserClassSelector from './UserClassSelector';
import FilterBar from '../../../FilterBar/FilterBar';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"


export default function AdminUsersTab({ data }) {


  return (
    <div>
      {data.length > 0 ?
        <>
          <FilterBar type='user' />
          <div className="admin-tabs-contents">
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
                  <TableRow hover key={user.id}>
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
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </div>

        </>
        :
        <p className='admin-empty-msg'>There are currently no users.</p>
      }
    </div>

  );
}

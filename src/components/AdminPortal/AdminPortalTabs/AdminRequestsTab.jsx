import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import AdminCompleteDialog from './AdminCompleteDialog';
import AdminDetailsDialog from './AdminDetailsDialog';
import FilterBar from '../../FilterBar/FilterBar';

import EditRequestPage from '../../EditRequestPage/EditRequestPage'


export default function AdminRequestsTab({ num, data }) {

  // hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // modal state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(false)

  // date/time
  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;

  function getDueDate(requestDay, deliveryDays) {
    const due = new Date(requestDay).getTime() + msPerDay * deliveryDays
    return new Date(due).toLocaleString('en-us')
  }

  // --- modal logic ---
  // const handleClickOpen = (id, x) => {
  //   dispatch({
  //     type: "FETCH_CURRENT_REQUEST",
  //     payload: id
  //   })
  // }

  // row styling
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0, // hide last border
    },
  }));


  return (
    <div>
      {data.length > 0 ?
        <>
          <FilterBar type={num === 0 ? 'pending' : 'completed'} />

          <Table sx={{ minWidth: 700 }}>

            {/* table header */}
            <TableHead>
              <TableRow>
                <TableCell>Creation Date</TableCell>
                <TableCell align="center">Requester E-Mail</TableCell>
                <TableCell align="center">Artist</TableCell>
                <TableCell align="center">Due</TableCell>
                <TableCell align="center">View Details</TableCell>
                <TableCell align="center">Completion Form</TableCell>
              </TableRow>
            </TableHead>

            {/* table body */}
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.id}>
                  {/* creation date */}
                  <TableCell>
                    {new Date(row.created_at).toLocaleString('en-us')}
                  </TableCell>

                  {/* email */}
                  <TableCell align="center">
                    {row.email}
                  </TableCell>

                  {/* artist */}
                  <TableCell align="center">

                  </TableCell>

                  {/* due */}
                  <TableCell align="center">
                    {getDueDate(row.created_at, row.delivery_days)}
                  </TableCell>

                  {/* details btn */}
                  <TableCell align="center">
                    <button className='admin-button' onClick={() => setDetailsOpen(true)}>Details</button>

                    {/* details dialog */}
                    <Dialog
                      open={detailsOpen}
                      keepMounted
                      onClose={() => setDetailsOpen(false)}
                      sx={{
                        width: 800,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        ml: 10
                      }}
                    >
                      <EditRequestPage request={row} />
                    </Dialog>
                  </TableCell>

                  {/* complete button */}
                  <TableCell align="center">
                    <button className='admin-button' onClick={() => setCompleteOpen(true)}>
                      Complete
                    </button>

                    {/* details dialog */}
                    <Dialog
                      open={completeOpen}
                      keepMounted
                      onClose={() => setCompleteOpen(false)}
                      sx={{
                        width: 800,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        ml: 10
                      }}
                    >
                      <AdminCompleteDialog request={row} />
                    </Dialog>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </>
        :
        <p className='admin-empty-msg'>There are no requests.</p>
      }

    </div>
  );
}

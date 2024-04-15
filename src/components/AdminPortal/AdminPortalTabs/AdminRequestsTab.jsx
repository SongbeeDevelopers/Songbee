import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import AdminCompleteDialog from './AdminCompleteDialog';
import AdminDetailsDialog from './AdminDetailsDialog';
import FilterBar from '../../FilterBar/FilterBar';


function AdminRequestsTab({ num, data }) {

  // hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // reducers


  // modal state
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  // date/time
  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;

  // --- modal logic ---
  const handleClickOpen = (id, x) => {
    dispatch({
      type: "FETCH_CURRENT_REQUEST",
      payload: id
    })
    if (x === 1) {
      setOpen1(true);
    }
    else {
      setOpen(true);
    }
  };
  const handleClose = (x) => {
    if (x === 1) {
      setOpen1(false);
    }
    else {
      setOpen(false);
    }
  };
  const goToEdit = (id) => {
    history.push(`/request/edit/${id}`)
  }
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  // --- /modal logic ---

  // row styling
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0, // hide last border
    },
  }));

  // complete form dialogue
  const AlertDialogSlide = () => {
    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        BackdropProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none'
          }
        }}
        fullWidth={true}
        maxWidth='sm'
      >
        <AdminCompleteDialog handleClose={handleClose} />
      </Dialog>
    );
  }

  // details modal
  const DetailsDialogSlide = () => {
    return (
      <Dialog
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose(1)}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          width: 800,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ml: 10
        }}
      >
        <AdminDetailsDialog handleClose={handleClose} />
      </Dialog>
    );
  }


  return (
    <div>
      <FilterBar type={num === 0 ? 'pending' : 'completed'} />

      <Table sx={{ minWidth: 700 }}>

        <TableHead>
          <TableRow>
            <TableCell>Creation Date</TableCell>
            <TableCell align="center">Requester E-Mail</TableCell>
            <TableCell align="center">Requester / Recipient</TableCell>
            <TableCell align="center">Due</TableCell>
            <TableCell align="center">View Details</TableCell>
            <TableCell align="center">Completion Form</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => {
            const creationTime = new Date(row.created_at);
            const daysLeft = Math.round((now.getTime() - creationTime.getTime()) / msPerDay);
            return (
              <StyledTableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {new Date(row.created_at).toLocaleString('en-us')}
                </TableCell>
                <TableCell align="center">
                  {row.email}
                </TableCell>
                <TableCell align="center">
                  {row.requester} / {row.recipient}
                </TableCell>
                <TableCell align="center">
                  {row.is_complete ?
                    "Complete!" :
                    `Due in ${row.delivery_days - daysLeft} days`
                  }</TableCell>
                <TableCell align="center">
                  <button className='admin-button' onClick={() => goToEdit(row.id)}>Details</button>
                  <DetailsDialogSlide />
                </TableCell>
                <TableCell align="center">
                  <button className='admin-button' onClick={() => handleClickOpen(row.id)}>
                    Complete
                  </button>
                  <AlertDialogSlide />
                </TableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>

      </Table>
    </div>
  );
}

export default AdminRequestsTab;

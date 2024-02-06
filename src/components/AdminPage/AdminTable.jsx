import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AdminRequestDialog from './AdminRequestDialog';
import AdminDetailsDialog from './AdminDetailsDialog';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

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
  const dispatch = useDispatch();
  const now = new Date ();
  const msPerDay = 24 * 60 * 60 * 1000;
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleClickOpen = (id, x) => {
    dispatch({
        type: "FETCH_CURRENT_REQUEST",
        payload: id
    })
    if (x===1){
    setOpen1(true);
    }
    else {
    setOpen(true);
    }
  };

  const handleClose = (x) => {
    if (x===1){
    setOpen1(false);
    }
    else {
    setOpen(false);
    }
  };
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const AlertDialogSlide = () => {
  
    return (
      <>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          sx={{ 
            width: 800, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            ml: 10
            }}
        >
          <AdminRequestDialog handleClose={handleClose}/>
        </Dialog>
      </>
    );
  }
  const DetailsDialogSlide = () => {
  
    return (
      <>
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
          <AdminDetailsDialog handleClose={handleClose}/>
        </Dialog>
      </>
    );
  }

  return (
    <div className="container">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Creation Date</StyledTableCell>
            <StyledTableCell align="center">Requester / Recipient</StyledTableCell>
            <StyledTableCell align="center">Due</StyledTableCell>
            <StyledTableCell align="center">View Details</StyledTableCell>
            <StyledTableCell align="center">Completion Form</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
          const creationTime = new Date (row.created_at);
          const daysLeft = Math.round((now.getTime() - creationTime.getTime()) / msPerDay);
          return (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
              {new Date(row.created_at).toLocaleString('en-us')}
              </StyledTableCell>
              <StyledTableCell align="center">
              {row.requester} / {row.recipient}
              </StyledTableCell>
              <StyledTableCell align="center">
                { row.delivery_days - daysLeft >= 0 ? 
                    `Due in ${row.delivery_days - daysLeft} days`
                :
                "Complete!"}</StyledTableCell>
              <StyledTableCell align="center">
                <button className='admin-button' onClick={() => handleClickOpen(row.id, 1)}>Details</button>
                <DetailsDialogSlide />
              </StyledTableCell>
              <StyledTableCell align="center">
                <button className='admin-button' onClick={() => handleClickOpen(row.id)}>
                    Complete
                </button>
              <AlertDialogSlide />
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

export default AdminTable;
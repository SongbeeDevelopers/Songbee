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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import UserClass from './UserClass';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const displayClass = (userClass) => {
    if (userClass === 1){
        return (
            <span>User</span>
        )
    } else if (userClass === 2){
        return (
            <span>Artist</span>
        )
    } else if (userClass === 3){
        return (
            <span>Admin</span>
        )
    }
  }

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

  return (
    <div className="container">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Credit</StyledTableCell>
            <StyledTableCell align="center">User Class</StyledTableCell>
            <StyledTableCell align="center">Adjust class</StyledTableCell>
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
                {displayClass(user.class)}
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
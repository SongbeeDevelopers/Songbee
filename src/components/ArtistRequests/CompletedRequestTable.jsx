import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import JrRequestCompleteDialog from "./jrRequestCompleteDialog";
import AdminDetailsDialog from "./AdminDetailsDialog";
import FilterBar from "../FilterBar/FilterBar";

function CompletedRequestTable({ num }) {
  // hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // reducers
  const juniorRequests = useSelector((store) => store.juniorRequests);
  const [completedRequests, setCompletedRequests] = useState([])
  
  useEffect(() => {
    if(juniorRequests){
      setCompletedRequests (juniorRequests.filter((song)=>song.accepted&&song.is_complete))
    }
  }, [juniorRequests])
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
      payload: id,
    });
    if (x === 1) {
      setOpen1(true);
    } else {
      setOpen(true);
    }
  };

  const handleClose = (x) => {
    if (x === 1) {
      setOpen1(false);
    } else {
      setOpen(false);
    }
  };

  const goToEdit = (id) => {
    history.push(`/jr-request/edit/${id}`);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  // --- /modal logic ---

  // header styling
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  // row styling
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
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
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
        fullWidth={true}
        maxWidth="sm"
      >
        <JrRequestCompleteDialog handleClose={handleClose} />
      </Dialog>
    );
  };

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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ml: 10,
        }}
      >
        <AdminDetailsDialog handleClose={handleClose} />
      </Dialog>
    );
  };

  return (
    <div>
      <FilterBar type={num === 0 ? "pending" : "completed"} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Requester E-Mail</StyledTableCell>
              <StyledTableCell align="center">Created</StyledTableCell>
              <StyledTableCell align="center">Days Until Due</StyledTableCell>
              <StyledTableCell align="center">View Details</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {completedRequests.map((row) => {
              const creationTime = new Date(row.created_at);
              const daysLeft = Math.round(
                (now.getTime() - creationTime.getTime()) / msPerDay
              );
              return (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.requester} / {row.recipient}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.is_complete
                      ? "Complete!"
                      : `Due in ${row.delivery_days - daysLeft} days`}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      className="admin-button"
                      onClick={() => goToEdit(row.id)}
                    >
                      Details
                    </button>
                    <DetailsDialogSlide />
                  </StyledTableCell>
                  
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CompletedRequestTable;

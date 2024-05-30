import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterBar from '../../../FilterBar/FilterBar';
import LearningPackDialog from './AdminPortalDialogs/LearningPackDialog';

import {
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';


export default function AdminLearningPacksTab({ num, data }) {

  const dispatch = useDispatch()

    // modal state
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [completeOpen, setCompleteOpen] = useState(false)

 // details modal logic
 const openDetails = (row) => {
    // sets edit reducer with request data
    dispatch({ type: 'SET_EDIT_DATA', payload: row })
    setDetailsOpen(true)
  }
  const closeDetails = () => {
    // clears reducer on close
    dispatch({ type: 'CLEAR_EDIT_DATA' })
    setDetailsOpen(false)
  }

const handleActive = (id) => {
    dispatch({
        type: "ACTIVATE_PACK",
        payload: id
    })
}


  return (
    <div>

          <div className="admin-tabs-contents">
            <Table sx={{ minWidth: 700 }}>

              {/* table header */}
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="center">Age Range</TableCell>
                  <TableCell align="center">Details</TableCell>
                  <TableCell align="center">Active</TableCell>
                </TableRow>
              </TableHead>

              {/* table body */}
              <TableBody>
                {data.map((row) => (
                  <TableRow hover key={row.id}>

                    {/* pack title */}
                    <TableCell>
                      {row.title}
                    </TableCell>

                    {/* age range */}
                    <TableCell align='center'>
                      {row.min_age} - {row.max_age} Months
                    </TableCell>

                    {/* details */}
                    <TableCell align="center">
                    <Button variant="contained"
                        onClick={() => openDetails(row)}
                        sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                      >
                        UPDATE
                      </Button>
                      {/* details dialog */}
                      <Dialog keepMounted fullWidth maxWidth="md"
                        open={detailsOpen}
                        onClose={closeDetails}
                      >
                        <LearningPackDialog setDetailsOpen={setDetailsOpen} />
                      </Dialog>
                    </TableCell>

                    {/* activate button */}
                    <TableCell align="center">
                    <Button variant="contained"
                        onClick={() => handleActive(row.id)}
                        sx={{ height: 35, width: 100, backgroundColor: "#feaf17", color: "black" }}
                      >
                        {row.is_active ? 'DEACTIVATE' : 'ACTIVATE'}
                      </Button>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
    </div>
  );
}

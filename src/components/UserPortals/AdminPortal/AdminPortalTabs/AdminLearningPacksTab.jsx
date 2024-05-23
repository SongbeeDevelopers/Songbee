import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterBar from '../../../FilterBar/FilterBar';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';


export default function AdminLearningPacksTab({ num, data }) {

  const dispatch = useDispatch()



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
                        
                        sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                      >
                        UPDATE
                      </Button>
                    </TableCell>

                    {/* activate button */}
                    <TableCell align="center">
                    <Button variant="contained"

                        sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                      >
                        ACTIVE
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

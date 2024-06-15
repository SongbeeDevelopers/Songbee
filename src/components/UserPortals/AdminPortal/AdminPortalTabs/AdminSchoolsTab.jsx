import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AdminEditSchoolDialog from "./AdminPortalDialogs/AdminEditSchoolDialog"

import {
  Button,
  Dialog,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material"

export default function AdminSchoolsTab() {

  const dispatch = useDispatch()

  const schoolData = useSelector(store => store.schools)

  const [open, setOpen] = useState(false)
  const [type, setType] = useState('')

  const openEdit = (type, school) => {
    setType(type)
    dispatch({
      type: 'SET_EDIT_DATA',
      payload: school
    })
    setOpen(true)
  }
  const closeEdit = () => {
    dispatch({ type: 'CLEAR_EDIT_DATA' })
    setOpen(false)
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_SCHOOL_DATA' })
  }, [])

  return (
    <div>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>Contact</TableCell>
            <TableCell align="center">Institution</TableCell>
            <TableCell align="center">License Length</TableCell>
            <TableCell align="center">Agreement</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schoolData && schoolData.map((school) => (
            <TableRow>
              <TableCell>{school.contact}</TableCell>
              <TableCell align="center">{school.institution}</TableCell>
              <TableCell align="center">{school.license_length}</TableCell>
              <TableCell align="center">{school.agreement}</TableCell>
              <TableCell align="center">
                <Button variant="contained"
                  onClick={() => openEdit('edit', school)}
                  sx={{ m: 'auto', height: 35, width: 100, backgroundColor: "#feaf17", color: "black" }}
                > Edit
                </Button>
                <Dialog keepMounted fullWidth maxWidth="md"
                  open={open}
                  onClose={closeEdit}
                >
                  <AdminEditSchoolDialog type={type} closeEdit={closeEdit}  />
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained"
        onClick={() => openEdit('create', {contact: '', institution: '', license_length: '', agreement: ''})}
        sx={{ ml: '43%', mt: 3, height: 35, width: 125, backgroundColor: "#feaf17", color: "black" }}
      >
        Add School
      </Button>
    </div>
  )
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from "@mui/material"
import Swal from 'sweetalert2';

import '../../AdminPortal.css'


export default function AdminEditSchoolDialog({ type, closeEdit }) {

  const dispatch = useDispatch()

  const edit = useSelector(store => store.edit)

  // stores changes in edit reducer
  const handleInput = (key, value) => {
    dispatch({ type: 'EDIT_INPUT', payload: { key, value } })
  }

  const saveChanges = (event) => {
    event.preventDefault()
    // confirmation message
    Swal.fire({
      icon: "question",
      title: "Save changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        // if confirmed, updates db with edit reducer data
        dispatch({
          type: 'UPDATE_SCHOOL_DATA',
          payload: edit
        })
        closeEdit()
      }
    })
  }

  const addEntry = (event) => {
    event.preventDefault()
    // confirmation message
    Swal.fire({
      icon: "question",
      title: "Create new Entry?",
      showCancelButton: true,
      confirmButtonText: "Create",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Created!", "", "success");
        // if confirmed, updates db with edit reducer data
        dispatch({
          type: 'ADD_SCHOOL_DATA',
          payload: edit
        })
        closeEdit()
      }
    })
  }

  const deleteEntry = (event) => {
    event.preventDefault()
    // confirmation message
    Swal.fire({
      icon: "warning",
      title: "Delete Entry?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        // if confirmed, updates db with edit reducer data
        dispatch({
          type: 'DELETE_SCHOOL_DATA',
          payload: { id: edit.id }
        })
        closeEdit()
      }
    })
  }



  return (
    <div className='admin-req-details-edit'>
      <h3>Edit School Details</h3>

      <form>

        <div className='admin-details-edit-row'>
          <label> Contact
            <input
              value={edit.contact}
              className='admin-portal-inputs'
              onChange={() => handleInput('contact', event.target.value)}
            ></input>
          </label>

          <label> Institution
            <input
              value={edit.institution}
              className='admin-portal-inputs'
              onChange={() => handleInput('institution', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> License Length
            <input
              value={edit.license_length}
              className='admin-portal-inputs'
              onChange={() => handleInput('license_length', event.target.value)}
            ></input>
          </label>

          <label> Agreement
            <input
              value={edit.agreement}
              className='admin-portal-inputs'
              onChange={() => handleInput('agreement', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row' style={{width: "100%", justifyContent: 'center'}}>
          {type === 'edit' &&
            <Button variant="contained"
              onClick={saveChanges}
              sx={{ mt: 3.2, height: 35, width: 75, backgroundColor: "#feaf17", color: "black" }}
            >
              SAVE
            </Button>
          }
          {type === 'create' &&
            <Button variant="contained"
              onClick={addEntry}
              sx={{ mt: 3.2, height: 35, width: 75, backgroundColor: "#feaf17", color: "black" }}
            >
              CREATE
            </Button>
          }
          <Button variant="contained" color="error"
            onClick={deleteEntry}
            sx={{ mt: 3.2, height: 35, width: 75 }}
          >
            DELETE
          </Button>
        </div>

      </form>
    </div>
  );
}

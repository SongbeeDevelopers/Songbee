import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DatePicker } from "@mui/x-date-pickers";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

import "../../AdminPortal.css";

export default function AdminDateDialog({ setDetailsOpen, num}) {
  const dispatch = useDispatch();

  const [date, setDate] = useState(null)

  const edit = useSelector(store => store.edit);

  const submitRequest = (event) => {
    event.preventDefault();
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
            type: "UPDATE_DATES",
            payload: {
              id: edit.id,
              data: {
                num, date
              },
            },
          });
        setDate(null)
        setDetailsOpen(false);
      }
    });
  };

  return (
    <div className="admin-req-details-edit">
      {num === 1 ? (
        <>
          <h3>Edit Draft Date</h3>

          <form>
            <DatePicker
              label="Draft Date"
              value={date}
              onChange={setDate}
            />
            <Button
              variant="contained"
              onClick={submitRequest}
              sx={{
                m: "auto",
                mt: 2,
                height: 35,
                width: 75,
                backgroundColor: "#feaf17",
                color: "black",
              }}
            >
              SAVE
            </Button>
          </form>
        </>
      ) : (
        <>
          <h3>Edit Due Date</h3>

          <form>
            <DatePicker
              label="Due Date"
              value={date}
              onChange={setDate}
            />
            <Button
              variant="contained"
              onClick={submitRequest}
              sx={{
                m: "auto",
                mt: 2,
                height: 35,
                width: 75,
                backgroundColor: "#feaf17",
                color: "black",
              }}
            >
              SAVE
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

import React from "react";

import { TextField } from "@mui/material";

export default function WhyIsItImportant({ handleInput, value }) {

  return (
    <div className="reqFormGroup3">
      <div className="reqFormInput">
        <h2 className="reqFormGroup3">Tell us why it is so important</h2>
        <label>
          Tell the artist more about your inspiration{" "}
        </label>
        <TextField
          value={value}
          className="reqFormGroup3input"
          placeholder="Why?"
          onChange={() =>
            handleInput("important_why", event.target.value)
          }
          multiline
          rows={4}
          sx={{ backgroundColor: 'white' }}
        />
      </div>
    </div>
  )
}

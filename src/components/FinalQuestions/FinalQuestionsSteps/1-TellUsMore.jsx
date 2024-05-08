import React from "react";

import { TextField } from "@mui/material";

export default function TellUsMore({ handleInput, value }) {

  return (
    <div className="reqFormGroup3">
      <div className="reqFormInput">
        <h2 className="">
          Tell us what Is Important to your song?
        </h2>
        <label className="">
          Tell your artist why you’re writing this song. What emotions do
          you want the listener to feel?{" "}
        </label>
        <TextField
          value={value}
          className="reqFormGroup3input"
          placeholder="What?"
          onChange={() =>
            handleInput("important_what", event.target.value)
          }
          multiline
          rows={4}
          sx={{ backgroundColor: 'white' }}
        />
        <p className="reqFormPrompts">
          Minimum Required characters 50-max 500.
        </p>
      </div>
    </div>
  )
}

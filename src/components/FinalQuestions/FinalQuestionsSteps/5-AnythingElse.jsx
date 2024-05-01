import React from "react";

import { TextField } from "@mui/material";

export default function AnythingElse({ handleInput, value }) {

  return (
    <div className="reqFormGroup3">
      <div className="reqFormAdditionalDetails">
        <h2 id="additionalDetailsHeader">
          Is there anything else we should know?
        </h2>
        <label>
          Provide any additional details you would like the artist to
          know!{" "}
        </label>
        <div className="reqFormGroup3">

          <TextField
            className="reqFormGroup3input"
            value={value}
            placeholder="Additional Details"
            onChange={() =>
              handleInput("additional_info", event.target.value)
            }
            multiline
            rows={4}
            sx={{ backgroundColor: 'white' }}
          />
        </div>
      </div>
    </div>
  )
}

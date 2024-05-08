import React from "react";

import { TextField } from "@mui/material";

export default function MemoriesCont({ handleInput, value }) {

  return (
    <div>
      <h2 className="reqFormGroup3">Part 2</h2>
      <h4 className="reqFormSubHeader">
        Select two of our story prompts or just tell us memories and
        stories that you feel tell your story.{" "}
      </h4>

      <p className="reqFormPrompts">
        a. What they mean to you?
        <br />
        b. How did you meet?
        <br />
        c. Inside Jokes
        <br />
        d. Advice you have for them
        <br />
        e. Describe a memory about your loved one that makes you laugh
        <br />
        f. Describe or list things about them that makes them special to
        you.
        <br />
        g. Other stories or memories
        <br />
      </p>

      <h5 className="reqFormPrompts">
        Tip: Include Descriptive language. Use your senses and really
        describe your feelings and emotions. Be sure it makes sense when
        someone outside of your relationship reads it.{" "}
      </h5>

      <div className="reqFormGroup3">
        <TextField
          value={value}
          className="reqFormGroup3input"
          placeholder="Prompt 2"
          onChange={() => handleInput("story2", event.target.value)}
          multiline
          rows={4}
          sx={{ backgroundColor: 'white' }}
        />
      </div>
    </div>
  )
}

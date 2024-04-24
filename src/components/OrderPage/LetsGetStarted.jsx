import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function LetsGetStarted() {
  const dispatch = useDispatch();

  const requestData = useSelector((store) => store.requestData);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInput = (key, value) => {
    dispatch({
      type: "SET_REQUEST_DATA",
      payload: { ...requestData, [key]: value },
    });
  };

  const startedSteps = () => {
    if (activeStep === 0) {
      return (
        <>
          <div className="reqFormGroup">
            <div className="reqFormInput">
              <label>Who is Creating the Song?</label>
              <input
                value={requestData.requester}
                className="reqFormInput"
                placeholder="You, the family, the team, etc."
                onChange={() => handleInput("requester", event.target.value)}
              ></input>
            </div>
          </div>
        </>
      );
    }
    if (activeStep === 1) {
      return (
        <>
          <div className="reqFormGroup">
            <div className="reqFormInput">
              <label>Is this song for a Special Occasion?</label>
              <input
                value={requestData.occasion}
                className="reqFormInput"
                placeholder="Type the Occasion Here"
                onChange={() => handleInput("occasion", event.target.value)}
              ></input>
            </div>
          </div>
        </>
      );
    }
    if (activeStep === 2) {
      return (
        <>
          <div className="reqFormGroup">
            <div className="reqFormInput">
              <label>Who is this Song For?</label>
              <div className="reqFormGroup">
                <input
                  value={requestData.recipient}
                  className="reqFormInput"
                  id="reqFormNameInput"
                  placeholder="Name or Nickname"
                  onChange={() => handleInput("recipient", event.target.value)}
                ></input>

                <input
                  value={requestData.pronunciation}
                  className="reqFormInput"
                  id="reqFormNameInput"
                  placeholder="Pronunciation"
                  onChange={() =>
                    handleInput("pronunciation", event.target.value)
                  }
                ></input>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (activeStep === 3) {
      return (
        <>
          <div className="reqFormGroup">
            <div className="reqFormInput">
              <label>What is your relationship with this person?</label>
              <input
                value={requestData.recipient_relationship}
                className="reqFormInput"
                placeholder="Relationship"
                onChange={() =>
                  handleInput("recipient_relationship", event.target.value)
                }
              ></input>
            </div>
          </div>
        </>
      );
    }
    if (activeStep === 4) {
      return (
        <>
          <div className="reqFormGroup">
            <div className="reqFormInput">
              <label>What inspired your song?</label>
              <input
                value={requestData.inspiration}
                className="reqFormInput"
                placeholder="Inspiration"
                onChange={() => handleInput("inspiration", event.target.value)}
              ></input>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="startedBox">
        {startedSteps()}
        <MobileStepper
          variant="progress"
          steps={5}
          position="static"
          activeStep={activeStep}
          sx={{ m: "auto", maxWidth: 400, flexGrow: 1, mt: 6 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    </>
  );
}

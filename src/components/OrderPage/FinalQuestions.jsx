import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

import { motion } from "framer-motion";

import Swal from "sweetalert2";

import LoginRegisterForm from "../LoginRegisterForm/LoginRegisterForm";

const steps = [
  "Tell us more!",
  "Why's it important?",
  "Memories, Stories, Etc.",
  "Memories cont.",
  "Anything else?",
];

function FinalQuestions({ routeVariants }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const requestData = useSelector((store) => store.finalQuestions);
  const { id } = useParams();

  const user = useSelector((store) => store.user);

  const submitOrder = (e) => {
    e.preventDefault();
    if (
      newOrder.delivery_days &&
      newOrder.streaming &&
      newOrder.extra_verse &&
      user.id
    ) {
      Swal.fire({
        title: "Continue with selections?",
        showCancelButton: true,
        confirmButtonText: "Checkout",
        icon: "question",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({
            type: "FETCH_CHECKOUT",
            payload: { data: newOrder },
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please Select All Three Options and log in.",
        icon: "error",
      });
    }
  };

  const handleInput = (key, value) => {
    dispatch({
      type: "SET_FINAL_QUESTIONS",
      payload: { ...requestData, [key]: value },
    });
  };

  function dispatchDetails() {
    dispatch({
      type: "FINISH_SONG_REQUEST",
      payload: {
        id: id,
        history: history,
        data: requestData,
      },
    });
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const formDetails = () => {
    if (activeStep === 0) {
      return (
        <>
          <div className="reqFormGroup3">
            <div className="reqFormInput">
              <h2 className="reqFormGroup3">
                Tell us what Is Important to your song?
              </h2>
              <h5 className="reqFormPrompts">
                Tell your artist why you’re writing this song. What emotions do
                you want the listener to feel?{" "}
              </h5>
              <p className="reqFormPrompts">
                Minimum Required characters 50-max 500.
              </p>
              <TextField
                value={requestData.important_what}
                className="reqFormGroup3input"
                placeholder="What?"
                onChange={() =>
                  handleInput("important_what", event.target.value)
                }
                multiline
                rows={4}
              />
            </div>
          </div>
        </>
      );
    }
    if (activeStep === 1) {
      return (
        <>
          <div className="reqFormGroup3">
            <div className="reqFormInput">
              <h2 className="reqFormGroup3">Tell us why it is so important</h2>
              <h5 className="reqFormPrompts">
                Tell the artist more about your inspiration{" "}
              </h5>
              <TextField
                value={requestData.important_why}
                className="reqFormGroup3input"
                placeholder="Why?"
                onChange={() =>
                  handleInput("important_why", event.target.value)
                }
                multiline
                rows={4}
              />
            </div>
          </div>
        </>
      );
    } else if (activeStep === 2) {
      return (
        <>
          <div>
            <h2 className="reqFormGroup3">Share Your Story Part 1</h2>
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
                value={requestData.story1}
                className="reqFormGroup3input"
                placeholder="Prompt 1"
                onChange={() => handleInput("story1", event.target.value)}
                multiline
                rows={4}
              />
            </div>
          </div>
        </>
      );
    } else if (activeStep === 3) {
      return (
        <>
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
                value={requestData.story1}
                className="reqFormGroup3input"
                placeholder="Prompt 2"
                onChange={() => handleInput("story2", event.target.value)}
                multiline
                rows={4}
              />
            </div>
          </div>
        </>
      );
    } else if (activeStep === 4) {
      return (
        <>
          <div className="reqFormGroup3">
            <div className="reqFormAdditionalDetails">
              <h2 id="additionalDetailsHeader">
                Is there anything else we should know?
              </h2>
              <h5 className="reqFormPrompts">
                Provide any additional details you would like the artist to
                know!{" "}
              </h5>
              <TextField
                className="reqFormGroup3input"
                value={requestData.additional_info}
                placeholder="Additional Details"
                onChange={() =>
                  handleInput("additional_info", event.target.value)
                }
                multiline
                rows={4}
              />
            </div>
          </div>
        </>
      );
    }
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleComplete = (event) => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    event.preventDefault();
    if (
      requestData.story1 &&
      requestData.story2 &&
      requestData.important_what &&
      requestData.important_why &&
      requestData.additional_info
    ) {
      Swal.fire({
        title: "Submit?",
        text: "Are you happy with your answers?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Submit",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatchDetails();
        }
      });
    } else {
      Swal.fire({
        title: "Submit?",
        text: "You have left important details blank. Do you want to submit anyways?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Submit",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Submitted!",
            icon: "success",
          });
          dispatchDetails();
        }
      });
    }
  };

  return (
    <motion.div
      className="reqFormPage"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h1>Final Song Details</h1>

      <p>
        Once you provide these final details we can begin creating your song!
      </p>
      <Box sx={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                Step {activeStep + 1}
              </Typography>
              <form className="reqForm">{formDetails()}</form>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="user-portal-details-btn"
                >
                  Back
                </button>
                <Box sx={{ flex: "1 1 auto" }} />
                <button
                  onClick={handleNext}
                  className="user-portal-details-btn"
                >
                  Next
                </button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <button
                      onClick={handleComplete}
                      className="user-portal-details-btn"
                    >
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </motion.div>
  );
}

export default FinalQuestions;
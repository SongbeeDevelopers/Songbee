import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
    "Anything else?",
  ];

function FinalQuestions ({ routeVariants }) {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const genres = useSelector((store) => store.genres);
    const requestData = useSelector((store) => store.requestData);
    const { id } = useParams();
  
    const user = useSelector((store) => store.user);
    const newOrder = useSelector((store) => store.newOrder);
  
    const handleSelection = (key, value) => {
      dispatch({
        type: "SET_NEW_ORDER",
        payload: { ...newOrder, [key]: value },
      });
    };
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
    
      useEffect(() => {
        dispatch({ type: "FETCH_GENRES" });
      }, []);
    
      const handleInput = (key, value) => {
        dispatch({
          type: "SET_REQUEST_DATA",
          payload: { ...requestData, [key]: value },
        });
      };
    
      function dispatchDetails() {
        dispatch({
          type: "UPDATE_SONG_REQUEST",
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
        <div className="reqFormGroup">
          <div className="reqFormInput">
            <label>Tell us what is most important to your song</label>
            <input
              value={requestData.important_what}
              className="reqFormInput"
              placeholder="What?"
              onChange={() =>
                handleInput("important_what", event.target.value)
              }
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
            <label>Tell us why it is so important</label>
            <input
              value={requestData.important_why}
              className="reqFormInput"
              placeholder="Why?"
              onChange={() =>
                handleInput("important_why", event.target.value)
              }
            ></input>
          </div>
        </div>
            </>
          );
        } else if (activeStep === 2) {
          return (
            <>
 <div>
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

          <div className="reqFormGroup">
            <input
              value={requestData.story1}
              className="reqFormInput"
              placeholder="Prompt 1"
              onChange={() => handleInput("story1", event.target.value)}
            ></input>
            <input
              value={requestData.story2}
              className="reqFormInput"
              placeholder="Prompt 2"
              onChange={() => handleInput("story2", event.target.value)}
            ></input>
          </div>
        </div>
            </>
          );
        } else if (activeStep === 3) {
          return (
            <>
        <div className="reqFormGroup">
          <div className="reqFormAdditionalDetails">
            <h2 id="additionalDetailsHeader">
              Is there anything else we should know?
            </h2>
            <input
              value={requestData.additional_info}
              placeholder="Additional Details"
              onChange={() =>
                handleInput("additional_info", event.target.value)
              }
            ></input>
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
          requestData.requester &&
          requestData.recipient &&
          requestData.recipient_relationship &&
          requestData.occasion &&
          requestData.vocal_type &&
          requestData.vocal_type &&
          requestData.vibe &&
          requestData.vibe &&
          requestData.tempo &&
          requestData.inspiration &&
          requestData.story1 &&
          requestData.story2 &&
          requestData.important_what &&
          requestData.important_why
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
        <h1>Song Request Details</h1>
  
        <p>Once you provide details we can begin creating your song!</p>
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
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete} className="reqFormSubmit">
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
        </Box>
      </motion.div>
    )
}

export default FinalQuestions;
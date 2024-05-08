import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DatePicker } from "@mui/x-date-pickers";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

import { motion } from "framer-motion";

import Swal from "sweetalert2";

import './JrRequestPage.css'

const steps = [
  "Your Childs Birthday",
  "Name and Pronunciation",
  "Confirm Subscription",
];

export default function JrCheckoutPage({ routeVariants }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const requestData = useSelector((store) => store.requestData);
  const { id } = useParams();

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
          <div className="jrFormGroup">
            <div className="reqFormInput">
              <label>Enter Your Child's Birthday</label>
              <div className="jrFormGroup">
                <DatePicker label="Your Child's Birthday" sx={{ width: 300 }} />
              </div>
            </div>
          </div>
        </>
      );
    } else if (activeStep === 1) {
      return (
        <>
          <div className="jrFormGroup">
            <div className="jrFormInput">
              <label>Enter Your Child's Name and Pronunciation</label>
              <div className="jrFormGroup">
                <input
                  value={requestData.recipient}
                  className="jrFormInput"
                  id="reqFormNameInput"
                  placeholder="Name of child or Nickname"
                  onChange={(event) =>
                    handleInput("recipient", event.target.value)
                  }
                ></input>

                <input
                  value={requestData.pronunciation}
                  className="jrFormInput"
                  id="reqFormNameInput"
                  placeholder="Pronunciation"
                  onChange={(event) =>
                    handleInput("pronunciation", event.target.value)
                  }
                ></input>
              </div>
            </div>
          </div>
        </>
      );
    } else if (activeStep === 2) {
      return (
        <>
          <div className="jrFormGroup">
            <div className="reqFormAdditionalDetails">
              <h2 id="additionalDetailsHeader">
                Confirm your Subscription
              </h2>
             
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

  const handleButton = () => {
    handleNext()
    handleComplete()
  }

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <motion.div
      className="reqFormPage"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h1>Details for Your Child's Song</h1>

      <p>Once you provide details we can begin your child's journey!</p>
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
           
              <form className="reqForm">{formDetails()}</form>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 8 }}>
                <Button variant="contained"
                  onClick={handleBack}
                  sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                > BACK
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button variant="contained"
                  onClick={handleButton}
                  sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                > NEXT
                </Button>
                {completedSteps() === totalSteps() - 1 ?
                  <Button onClick={handleComplete} sx={{ ml: 2, height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}>
                    Finish
                  </Button>
                  : ""
                }
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </motion.div>
  );
}

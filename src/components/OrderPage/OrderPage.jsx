import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";

// form steps
import LetsGetStarted from "./OrderFormSteps/LetsGetStarted";
import SongSpecifications from "./OrderFormSteps/SongSpecifications";
import SelectYourArtist from "./OrderFormSteps/SelectYourArtist";
import Delivery from "./OrderFormSteps/Delivery";
import AddOns from "./OrderFormSteps/AddOns";


import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import '../SongRequestPage/SongRequestPage.css'

import { motion } from "framer-motion";
import Swal from "sweetalert2";


const steps = [
  "Let's Get Started!",
  "Song Specfications",
  "Select Your Artist",
  "Delivery",
  "Add-Ons",
];


export default function OrderPage({ routeVariants }) {

  // hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  // reducers
  const genres = useSelector((store) => store.genres);
  const requestData = useSelector((store) => store.requestData);
  const user = useSelector((store) => store.user);
  const newOrder = useSelector((store) => store.newOrder);

  // modal logic
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // fetch reducers on mount
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" })
  }, []);
  useEffect(() => {
    dispatch({ type: "FETCH_ALL_ARTISTS" })
  }, []);

  // submit function
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


  let artistId
  const handleInput = (key, value) => {
    event.preventDefault();
    if (key === "artist") {
      console.log("artistId before", artistId)
      dispatch({
        type: "FETCH_CURRENT_ARTIST",
        payload: value
      })
      console.log("artistId after", artistId)
    }
    dispatch({
      type: "SET_REQUEST_DATA",
      payload: { ...requestData, [key]: value },
    });
  };

  function dispatchDetails() {
    dispatch({
      type: "CREATE_SONG_REQUEST",
      payload: {
        history: history,
        data: requestData,
      },
    });
  }



  // ----- FORM LOGIC -----

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => { return steps.length };

  const completedSteps = () => { return Object.keys(completed).length };

  const isLastStep = () => { return activeStep === totalSteps() - 1 };

  const allStepsCompleted = () => { return completedSteps() === totalSteps() };

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
    // event.preventDefault();
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    if (
      requestData.requester &&
      requestData.recipient &&
      requestData.recipient_relationship &&
      requestData.occasion &&
      requestData.vocal_type &&
      requestData.vibe &&
      requestData.tempo &&
      requestData.inspiration &&
      requestData.delivery_days &&
      requestData.streaming &&
      requestData.extra_verse &&
      user.id &&
      allStepsCompleted()
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
    } else if (allStepsCompleted()) {
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

  const formDetails = () => {
    // step 1
    if (activeStep === 0) {
      return <LetsGetStarted />
    }
    // step 2
    else if (activeStep === 1) {
      return <SongSpecifications />
    }
    // step 3
    else if (activeStep === 2) {
      return <SelectYourArtist handleInput={handleInput} />
    }
    // step 4
    else if (activeStep === 3) {
      return <Delivery handleInput={handleInput} handleOpen={handleOpen} />
    }
    // step 5
    else if (activeStep === 4) {
      return <AddOns handleInput={handleInput} handleClose={handleClose} open={open} />
    }
  };
  // ----- END FORM LOGIC -----

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

        {/* progress bar */}
        <Stepper nonLinear activeStep={activeStep} sx={{ mb: 8 }}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>

        {/* page including form */}
        <div>
          {allStepsCompleted() ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
            <>
              {/* form components */}
              <form className="reqForm">{formDetails()}</form>

              {/* buttons */}
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
                  <button onClick={handleComplete} className="user-portal-details-btn">
                    Finish
                  </button>
                  : ""
                }
              </Box>
            </>
          )}
        </div>
      </Box>
    </motion.div>
  );
}

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
import ArtistDisplay from "./ArtistDisplay";
import LetsGetStarted from "./LetsGetStarted";
import SongSpecifications from "./SongSpecifications";

const steps = [
  "Let's Get Started!",
  "Song Specfications",
  "Select Your Artist",
  "Delivery",
  "Add-Ons",
];

export default function OrderPage({ routeVariants }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const genres = useSelector((store) => store.genres);
  const artists = useSelector(store => store.allArtists);
  const requestData = useSelector((store) => store.requestData);
  const { id } = useParams();

  const user = useSelector((store) => store.user);
  const newOrder = useSelector((store) => store.newOrder);

  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;

  const threeDays = now.getTime() + msPerDay * 3;
  const fiveDays = now.getTime() + msPerDay * 5;
  const sixDays = now.getTime() + msPerDay * 6;

  // modal logic
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // modal appearance
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
    dispatch({ type: "FETCH_GENRES" })
  }, []);
  useEffect(() => {
    dispatch({ type: "FETCH_ALL_ARTISTS" })
  }, []);

  console.log("artits:", artists)

  let artistId

  const handleInput = (key, value) => {
    event.preventDefault();
    if (key === "artist"){
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
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const formDetails = () => {
    if (activeStep === 3) {
      return (
        <>
          <form className="orderForm">
            <div className="reqFormGroup">
              <div className="reqFormInput">
                <label>When would you like your song delivered?</label>
                <button onClick={() => handleInput("delivery_days", 3)}>{new Date(threeDays).toDateString()} + $80</button>
                <button onClick={() => handleInput("delivery_days", 5)}>{new Date(fiveDays).toDateString()} + $40</button>
                <button onClick={() => handleInput("delivery_days", 6)}>{new Date(sixDays).toDateString()} + $0</button>
              </div>
            </div>

            {!user.id && (
              <button className="checkoutLogRegBtn" onClick={handleOpen}>
                Login / Register
              </button>
            )}
{/* 
            <button className="orderCheckoutButton" onClick={submitOrder}>
              Checkout
            </button> */}
          </form>
        </>
      );
    }
    if (activeStep === 0) {
      return (
        <>
        <LetsGetStarted />
        </>
      );
    } else if (activeStep === 1) {
      return (
        <>
          <SongSpecifications />
        </>
      );
    } else if (activeStep === 4) {
      return (
        <>
            <button
              className="orderInput"
              onClick={() => handleInput("streaming", true)}
            >Add My Song to Streaming Services!</button>

            <button
              className="orderInput"
              onClick={() =>
                handleInput("extra_verse", true)
              }
            >Add an Additional Verse!</button>

            <button
              className="orderInput"
              onClick={() =>
                handleInput("license", true)
              }
            >I Need a Commercial License for My Song!</button>

            <button
              className="orderInput"
              onClick={() =>
                handleInput("backing_track", true)
              }
            >Add an instrumental backing track!</button>

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <LoginRegisterForm handleClose={handleClose} />
            </Box>
          </Modal>
        </>
      );
    } else if (activeStep === 2){
      return (
        <>
      <div className="reqFormGroup">
      <div className="reqFormSelect">
        <label>Choose your Artist</label>
        <select
          value={requestData.genre}
          onChange={() => handleInput("artist", event.target.value)}
        >
          <option selected>
            Select Artist
          </option>
          {artists.map((artist) => {
              if (artist.genres[0].id === Number(requestData.genre) || artist.genres[1] && artist.genres[1].id === Number(requestData.genre) || requestData.genre === ''){
                return (
                <option key={artist.id} value={artist.id}>
                  {artist.artist_name}
                </option>
                )
                }
                })}
           <option key={artists.length} value=''>
            I would like the artist selected for me
          </option>
        </select>
      </div>
      </div>
      <ArtistDisplay />
      </>
      )
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
    } else if (allStepsCompleted()){
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
                <button
                  className="user-portal-details-btn"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </button>
                <Box sx={{ flex: "1 1 auto" }} />
                <button className="user-portal-details-btn" onClick={handleButton} sx={{ mr: 1 }}>
                  Next
                </button>
                {/* {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <button onClick={handleComplete} className="user-portal-details-btn">
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </button>
                  ))} */}
                  {completedSteps() === totalSteps() - 1 ? 
                     <button onClick={handleComplete} className="user-portal-details-btn">
                    Finish
                    </button>
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

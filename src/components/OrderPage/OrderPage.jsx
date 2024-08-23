import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// form steps
import LetsGetStarted from "./OrderFormSteps/1-LetsGetStarted";
import SongSpecifications from "./OrderFormSteps/2-SongSpecifications";
import SelectYourArtist from "./OrderFormSteps/3-SelectYourArtist";
import Delivery from "./OrderFormSteps/4-Delivery";
import AddOns from "./OrderFormSteps/5-AddOns";
import OrderLoginRegister from "./OrderFormSteps/OrderLoginRegister";

// mui imports
import {
  Box,
  Button,
  Step,
  StepButton,
  Stepper,
  Typography
} from "@mui/material"

// style imports
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import '../SongRequestPage/SongRequestPage.css'

// steps



export default function OrderPage({ routeVariants }) {

  // hooks
  const dispatch = useDispatch();
  const history = useHistory();

  // reducers
  const requestData = useSelector((store) => store.requestData);
  const user = useSelector((store) => store.user);

  // modal logic
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // agreement logic
  const [agreeTerms, setAgreeTerms] = useState(false)

  // payment logic
  const [totalPrice, setTotalPrice] = useState(224.99)
  const [deliveryPrice, setDeliveryPrice] = useState(0)
  const [artistPayout, setArtistPayout] = useState(100)

  // fetch reducers on mount
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" })
  }, []);
  useEffect(() => {
    dispatch({ type: "FETCH_ACTIVE_ARTISTS" })
  }, []);

  // inputs directly affect reducer
  const handleInput = (key, value) => {
    if (key === "artist" && value > 0) {
      dispatch({
        type: "FETCH_CURRENT_ARTIST",
        payload: value
      })
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
        data: {
          ...requestData,
          total_price: Number(totalPrice + deliveryPrice).toFixed(2),
          artist_payout: Number(artistPayout.toFixed(2))
        },
      },
    });
  }

  // ----- FORM LOGIC -----

  const steps = 
    user.id ?
      [
        "Let's Get Started!",
        "Select Your Artist",
        "Add-Ons",
        "Delivery"
      ]
    :
      [
        "Let's Get Started!",
        "Select Your Artist",
        "Add-Ons",
        "Delivery",
        "Login"
      ];
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
    const newCompleted = completed;
    delete newCompleted[activeStep]
    setCompleted(newCompleted);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = (event) => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    if (
      requestData.requester &&
      requestData.occasion &&
      requestData.vocal_type &&
      requestData.delivery_days &&
      user.id &&
      agreeTerms &&
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
        title: "Cannot complete request!",
        text: "You have left important details blank, please go back and make sure you have filled out all information",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Back",
      })
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
      return (
        <SelectYourArtist 
          handleInput={handleInput} />
    )}
    // step 3
    else if (activeStep === 2) {
      return (
      <AddOns
      handleInput={handleInput}
      handleOpen={handleOpen}
      handleClose={handleClose}
      open={open}
      setTotalPrice={setTotalPrice}
      totalPrice={totalPrice}
      setArtistPayout={setArtistPayout}
      artistPayout={artistPayout}
      deliveryPrice={deliveryPrice}
    />
    )}
    // step 4
    else if (activeStep === 3) {
      return (
        <Delivery 
          handleInput={handleInput} 
          handleOpen={handleOpen} 
          setDeliveryPrice={setDeliveryPrice} 
          setTotalPrice={setTotalPrice} 
          totalPrice={totalPrice}
          agreeTerms={agreeTerms}
          setAgreeTerms={setAgreeTerms} />
    )}
    // step 5
    else if (activeStep === 4) {
      return <OrderLoginRegister />
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
      <h1>Song Details</h1>
      <p>Let’s start! We will guide you through the process of creating your song so it will be seamless and perfect for you! Just fill out your information and we will begin creating your song.</p>
      <p>Your Total: ${(totalPrice + deliveryPrice).toFixed(2)}</p>
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
                {completedSteps() === totalSteps() - 1 ?
                ""
                :
                <Button variant="contained"
                  onClick={handleButton}
                  sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
                > NEXT
                </Button>
                }
                {completedSteps() === totalSteps() - 1 ?
                  <Button onClick={handleComplete} sx={{ ml: 2, height: 35, width: 150, backgroundColor: "#feaf17", color: "black" }}>
                    TO CHECKOUT
                  </Button>
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

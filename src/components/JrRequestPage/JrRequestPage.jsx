import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { useMediaQuery } from "react-responsive";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Step,
  Stepper,
  StepButton,
  Typography
} from '@mui/material'
import { DatePicker } from "@mui/x-date-pickers";

import { motion } from "framer-motion";
import Swal from "sweetalert2";

import './JrRequestPage.css'

const steps = [
  "Your Childs Birthday",
  "Name and Pronunciation",
  "Confirm Subscription",
];


export default function JrCheckoutPage({ routeVariants }) {

  // hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const isMobile = useMediaQuery({ query: `(max-width: 825px)` })

  // data reducers
  const user = useSelector(store => store.user)
  const requestData = useSelector((store) => store.jrCheckoutData);
  const learningPacks = useSelector(store => store.learningPacks);
  const currentPack = useSelector(store => store.currentPack);

  // checkbox state
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreeEUA, setAgreeEUA] = useState(false)
  // form state
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  // gets learning packs on mount
  useEffect(() => {
    dispatch({ type: "FETCH_LEARNING_PACKS" });
  }, []);

  // date logic
  const monthDiff = (d1, d2) => {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  const start = new Date(requestData.age)
  const end = new Date()

  // inputs directly affect reducers
  const handleInput = (key, value) => {
    if (key === "pack_id") {
      dispatch({
        type: "FETCH_CURRENT_PACK",
        payload: value
      })
    }
    dispatch({
      type: "SET_JR_CHECKOUT_DATA",
      payload: { ...requestData, [key]: value },
    });
  };

  // creates new entry on submit
  function dispatchDetails() {
    dispatch({
      type: "CREATE_JR_REQUEST",
      payload: {
        history: history,
        data: requestData,
      },
    });
  }

  // ~~~~~ form logic ~~~~~
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

  const handleButton = () => {
    handleNext()
    handleComplete()
  }

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    if (
      user.id &&
      requestData.name &&
      requestData.pronunciation &&
      requestData.pack_id &&
      requestData.age &&
      agreeTerms &&
      agreeEUA &&
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
  // ~~~~~ end form logic ~~~~~


  // form instructions
  const formDetails = () => {
    if (activeStep === 0) {
      return (
        // step 1: child DOB
        <div className="jrFormGroup">
          <div className="reqFormInput">
            <label>Enter Your Child's Birthday</label>
            <div className="jrFormGroup">
              <DatePicker
                value={requestData.age}
                onChange={(newValue) =>
                  handleInput("age", newValue)
                }
                label="Your Child's Birthday"
                sx={{ width: 300 }} />
            </div>
          </div>
        </div>
      );
    } else if (activeStep === 1) {
      return (
        // step 2: name
        <div className="jrFormGroup">
          <div className="jrFormInput">
            <label>Enter Your Child's Name and Pronunciation</label>
            <div className="jrFormGroup">
              <input
                value={requestData.name}
                className="jrFormInput"
                id="reqFormNameInput"
                placeholder="Name of Child"
                onChange={(event) =>
                  handleInput("name", event.target.value)
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
      );
    } else if (activeStep === 2) {
      return (
        // step 3: pick learning pack & agree to terms
        <div className="jrFormGroup2">
          <div className="jrFormInput">
            <label>
              Confirm your Subscription
            </label>
            {requestData.pack_id === '' ?
              learningPacks.map((pack) => {
                if (monthDiff(start, end) >= pack.min_age && monthDiff(start, end) <= pack.max_age) {
                  return (
                    <>
                      <h3>Your child is in the recommended age range for {pack.title} Learning Pack!</h3>
                      <img className='pack-img' src={pack.image} />
                      <p>{pack.description}</p>
                      <Button
                        sx={{m: 'auto', height: 40, width: 200, backgroundColor: "#feaf17", color: "black" }}
                        onClick={() => handleInput("pack_id", pack.id)}
                      >Select this pack?</Button>
                    </>
                  )
                }
              })
              :
              <>
                <h3>You have selected {currentPack.title} Learning Pack!</h3>
                <img className='pack-img' src={currentPack.image} />
                <p className="jr-order-descr">{currentPack.description}</p>
              </>
            }
          </div>
          <div className="reqFormGroup">
            <div className="reqFormSelect">
              <label className="wide-display">Choose a Learning Pack</label>
              <select
                value={requestData.pack_id}
                onChange={() => handleInput("pack_id", event.target.value)}
              >
                <option selected disabled>
                  Select Genre
                </option>
                {learningPacks.map((lpack) => (
                  <option key={lpack.id} value={lpack.id}>
                    {lpack.title} {lpack.min_age}-{lpack.max_age} Months
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="reqFormGroup jrcheckoutagree">
            <FormControlLabel
              control={<Checkbox required value={agreeTerms} onClick={() => setAgreeTerms(!agreeTerms)} />}
              label={<span>I have read and agree to the <Link to="/terms" target="_blank">terms and conditions</Link></span>}
            />
            <FormControlLabel
              control={<Checkbox required value={agreeEUA} onClick={() => setAgreeEUA(!agreeEUA)} />}
              label={<span>I have read and agree to the <a href="https://drive.google.com/file/d/1BCASC9xwt8lwTnW5OcJYAGAS5NsPnfX6/view?usp=sharing" target="_blank">end user agreement</a></span>}
            />
          </div>
        </div>
      );
    }
  };

  
  // checkout component including form
  return (
    <motion.div
      className="reqFormPage jrReqForm"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <img className="jr-checkout-flowers" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076551/Songbee/colorflowers_wesazl.png" />
      <img className="jr-checkout-notes" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076545/Songbee/color-music-notes_ouootu.png" />

      <h1>Details for Your Child's Song</h1>

      <p>Once you provide details we can begin your child's journey!</p>
      <Box sx={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep} orientation={isMobile ? 'vertical' : 'horizontal'} sx={{ alignItems: 'center' }} >
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

              <form className="reqForm reqFormHeight">{formDetails()}</form>
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

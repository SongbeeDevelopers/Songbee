import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";

// step components
import TellUsMore from "./FinalQuestionsSteps/1-TellUsMore";
import WhyIsItImportant from "./FinalQuestionsSteps/2-WhyIsItImportant";
import MemoriesStoriesEtc from "./FinalQuestionsSteps/3-MemoriesStoriesEtc";
import MemoriesCont from "./FinalQuestionsSteps/4-MemoriesCont";
import AnythingElse from "./FinalQuestionsSteps/5-AnythingElse";
import FinalSongSpecifications from "./FinalQuestionsSteps/FinalSongSpecifications";
import PersonalInfo from "./FinalQuestionsSteps/PersonalInfo";

// mui components
import {
  Box,
  Button,
  Step,
  StepButton,
  Stepper,
  TextField,
  Typography,
} from "@mui/material"

// styling components
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import '../SongRequestPage/SongRequestPage.css'

// steps for stepper
const steps = [
  "Let's get some more info!",
  "Song Specifications",
  "Tell us more!",
  "Why's it important?",
  "Memories, Stories, Etc.",
  "Memories cont.",
  "Anything else?",
];


function FinalQuestions({ routeVariants }) {

  // hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  // reducer
  const requestData = useSelector((store) => store.finalQuestions);
  const orderInfo = useSelector(store => store.requestData)

  // inputs directly affect reducer
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
        orderInfo: orderInfo
      },
    });
    dispatch({ type: "CLEAR_FINAL_QUESTIONS"})
  }

  // local state for steps
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  // steps contained here
  const formDetails = () => {
    if (activeStep === 0) {
      return <PersonalInfo handleInput={handleInput} />
    } else if (activeStep === 1) {
      return <FinalSongSpecifications handleInput={handleInput} />
    } else if (activeStep === 2) {
      return <TellUsMore handleInput={handleInput} value={requestData.important_what} />
    } else if (activeStep === 3) {
      return <WhyIsItImportant handleInput={handleInput} value={requestData.important_why} />
    } else if (activeStep === 4) {
      return <MemoriesStoriesEtc handleInput={handleInput} value={requestData.story1} />
    } else if (activeStep === 5) {
      return <MemoriesCont handleInput={handleInput} value={requestData.story2} />
    } else if (activeStep === 6) {
      return <AnythingElse handleInput={handleInput} value={requestData.additional_info} />
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

  const handleButton = () => {
    handleNext()
    handleComplete()
  }

  const handleComplete = (event) => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    if (
      requestData.story1 &&
      requestData.story2 &&
      requestData.important_what &&
      requestData.important_why &&
      requestData.additional_info &&
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
      <Box sx={{ width: "100%"}}>
      <Box sx={{ width: "100%", overflow: 'scroll' }}>
        <Stepper nonLinear activeStep={activeStep} sx={{ mb: 8 }}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
          </Box>
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
                    FINISH
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

export default FinalQuestions;

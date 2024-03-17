import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { motion } from 'framer-motion';

import Swal from 'sweetalert2';

const steps = ['Your Details', 'Specifications', 'Share Your Story'];

export default function JrCheckoutPage({ routeVariants }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const genres = useSelector(store => store.genres)
  const requestData = useSelector(store => store.requestData)
  const { id } = useParams()

  useEffect(() => {
    dispatch({type: 'FETCH_GENRES'})
  }, [])

  const handleInput = (key, value) => {
    dispatch({
      type: 'SET_REQUEST_DATA',
      payload: {...requestData, [key]: value}
    })
  }

  function dispatchDetails() {
    dispatch({
      type: 'UPDATE_SONG_REQUEST',
      payload: {
        id: id,
        history: history,
        data: requestData,
      }
    })
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const formDetails = () => {
    if (activeStep === 0){
        return (
            <>
        <div className='reqFormGroup'>
          <div className='reqFormInput'>
            <label>How old is your child?</label>
            <div className='reqFormGroup'>
            <input 
              value={requestData.requester}
              className='reqFormInput'
              placeholder="What is your child's age?"
              onChange={() => handleInput('requester', event.target.value)}
            ></input>
          </div>

            <input
              value={requestData.occasion}
              className='reqFormInput'
              placeholder='Date of Birth'
              onChange={() => handleInput('occasion', event.target.value)}
            ></input>
          </div>
        </div>

        <div className='reqFormGroup'>
          <div className='reqFormInput'>
            <label>Who is this Song For?</label>
            <div className='reqFormGroup'>
              <input
                value={requestData.recipient}
                className='reqFormInput'
                id='reqFormNameInput'
                placeholder='Name of child or Nickname'
                onChange={(event) => handleInput('recipient', event.target.value)}
              ></input>

              <input
                value={requestData.pronunciation}
                className='reqFormInput'
                id='reqFormNameInput'
                placeholder='Pronunciation'
                onChange={(event) => handleInput('pronunciation', event.target.value)}
              ></input>
            </div>

            <input
              value={requestData.recipient_relationship}
              className='reqFormInput'
              placeholder='My child, my niece, my grandson, etc.'
              onChange={(event) => handleInput('recipient_relationship', event.target.value)}
            ></input>
          </div>
          <div className='reqFormGroup2'>
          <div className='reqFormInput'>
            <label>Describe Your Child for the Song</label>
            <p>
            It could be anything from their favorite animal or color to their name<br/>
            Give us a little information so we are able to customize your song to fit your child.<br/>
          </p>
            <div className='reqFormGroup'>
              <input
                value={requestData.description}
                className='reqFormInput'
                id='reqFormNameInput'
                placeholder='Description'
                onChange={(event) => handleInput('description', event.target.value)}
              ></input>
              </div>
              </div>
            </div>

        </div>
            </>
        )
    }
    else if (activeStep === 1){
        return (
            <>
        <div className='reqFormGroup'>
          <div className='reqFormSelect'>
            <label>What emotions do you want the songs to have?</label>
            <select
              value={requestData.vibe}
              onChange={() => handleInput('vibe', event.target.value)}
            >
              <option selected disabled>Select Emotion</option>
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="excited">Excited</option>
              <option value="angry/upset">Angry/Upset</option>
              <option value="contemplative">Contemplative</option>
            </select>
          </div>
        </div>

        <div className='reqFormGroup'>
          <div className='reqFormSelect'>
            <label>What Vocal Style Suits Your Song?</label>
            <select
              value={requestData.vocal_type}
              onChange={() => handleInput('vocal_type', event.target.value)}
            >
              <option selected disabled>Select Style</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>

          <div className='reqFormSelect2'>
            <label>Select a Tempo</label>
            <select
              value={requestData.tempo}
              onChange={() => handleInput('tempo', event.target.value)}
            >
              <option selected disabled>Select Tempo</option>
              <option value="slow">Slow - Less instrumentals, calming vocals, great for lullabies and soothing songs</option>
              <option value="medium">Medium - Drum beat, fun instrumental and vocal, gets your child thinking and learning</option>
              <option value="fast">Up-Tempo - Fun drum beat, more involved instruments and vocals, get them wiggling their fingers and toes, ready to play and learn!</option>
            </select>
          </div>
        </div>
            </>
        )
    }
    else if (activeStep === 2){
        return (
            <>
        <div className='reqFormGroup'>
        <div className='reqFormAdditionalDetails'>
        <h2 id='additionalDetailsHeader'>What skills do you want your child to focus on?</h2>
            <select
              value={requestData.vibe}
              onChange={() => handleInput('vibe', event.target.value)}
            >
              <option selected disabled>Select Skill</option>
              <option value="physical">Physical</option>
              <option value="cognitive">Cognitive</option>
              <option value="social and emotional">Social and Emotional</option>
              <option value="sensory and motor">Sensory and Motor</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

      <div className='reqFormGroup'>
        <div className='reqFormAdditionalDetails'>
          <h2 id='additionalDetailsHeader'>Describe your goal for the song, or any other details</h2>
          <input
            value={requestData.additional_info}
            placeholder='Additional Details'
            onChange={(event) => handleInput('additional_info', event.target.value)}
          ></input>
        </div>
      </div>
      <div className='reqFormGroup'>
        <div className='reqFormAdditionalDetails'>
          <h2 id='additionalDetailsHeader'>Goal's for Your Child's Learning Song Subscription</h2>
          <p className='reqFormPrompts'>
            Please tell us what milestones or content you would like each song in the subscription to address.
          </p>
          <h3 id='additionalDetailsHeader'>Song 1</h3>
          <input
            value={requestData.song1_info}
            placeholder='Milestones'
            onChange={() => handleInput('additional_info', event.target.value)}
          ></input>
        <h3 id='additionalDetailsHeader'>Song 2</h3>
          <input
            value={requestData.song2_info}
            placeholder='Milestones'
            onChange={() => handleInput('additional_info', event.target.value)}
          ></input>
        <h3 id='additionalDetailsHeader'>Song 3</h3>
          <input
            value={requestData.song3_info}
            placeholder='Milestones'
            onChange={() => handleInput('additional_info', event.target.value)}
          ></input>
        </div>
      </div>
            </>
        )
    }
  }

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
    event.preventDefault()
    if (requestData.requester && requestData.recipient && requestData.recipient_relationship && requestData.occasion && requestData.vocal_type && requestData.vocal_type && requestData.vibe && requestData.vibe && requestData.tempo && requestData.inspiration && requestData.story1 && requestData.story2 && requestData.important_what && requestData.important_why) {
      Swal.fire({
        title: "Submit?",
        text: "Are you happy with your answers?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Submit"
      }).then((result) => {
        if (result.isConfirmed) {
          dispatchDetails()
        }
      })
    } else {
      Swal.fire({
        title: "Submit?",
        text: "You have left important details blank. Do you want to submit anyways?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Submit"
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Submitted!",
            icon: "success"
          })
          dispatchDetails()
        }
      })
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <motion.div
    className="reqFormPage"
    variants={routeVariants}
    initial='initial'
    animate='final'
  >
          <h1>Details for Your Child's Song</h1>

<p>
  Once you provide details we can begin your child's journey!
</p>
    <Box sx={{ width: '100%' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <form className='reqForm'>
                {formDetails()}
            </form>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}
                  className='reqFormSubmit'>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
    </motion.div>
  );
}
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
            <label>Who is Creating the Song?</label>
            <input 
              value={requestData.requester}
              className='reqFormInput'
              placeholder='You, the family, the team, etc.'
              onChange={() => handleInput('requester', event.target.value)}
            ></input>
          </div>

          <div className='reqFormInput'>
            <label>Is this song for a Special Occasion?</label>
            <input
              value={requestData.occasion}
              className='reqFormInput'
              placeholder='Type the Occasion Here'
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
                placeholder='Name or Nickname'
                onChange={() => handleInput('recipient', event.target.value)}
              ></input>

              <input
                value={requestData.pronunciation}
                className='reqFormInput'
                id='reqFormNameInput'
                placeholder='Pronunciation'
                onChange={() => handleInput('pronunciation', event.target.value)}
              ></input>
            </div>

            <input
              value={requestData.recipient_relationship}
              className='reqFormInput'
              placeholder='Relationship'
              onChange={() => handleInput('recipient_relationship', event.target.value)}
            ></input>
          </div>

          <div className='reqFormInput'>
              <label>What inspired your song?</label>
              <input
                value={requestData.inspiration}
                className='reqFormInput'
                placeholder='Inspiration'
                onChange={() => handleInput('inspiration', event.target.value)}
              ></input>
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
            <label>Choose a Genre</label>
            <select 
              value={requestData.genre}
              onChange={() => handleInput('genre', event.target.value)}
            >
              <option selected disabled>Select Genre</option>
              {
                genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))
              }
            </select>
          </div>

          <div className='reqFormSelect'>
            <label>Set the Vibe</label>
            <select
              value={requestData.vibe}
              onChange={() => handleInput('vibe', event.target.value)}
            >
              <option selected disabled>Select Vibe</option>
              <option value="happy">Happy</option>
              <option value="lighthearted">Lighthearted</option>
              <option value="heartfelt">Heartfelt</option>
              <option value="romantic">Romantic</option>
              <option value="reflective">Reflective</option>
              <option value="somber">Somber</option>
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

          <div className='reqFormSelect'>
            <label>Select a Tempo</label>
            <select
              value={requestData.tempo}
              onChange={() => handleInput('tempo', event.target.value)}
            >
              <option selected disabled>Select Tempo</option>
              <option value="slow">Slow</option>
              <option value="medium">Medium</option>
              <option value="fast">Up-Tempo</option>
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
          <div className='reqFormInput'>
            <label>Tell us what is most important to your song</label>
            <input
              value={requestData.important_what}
              className='reqFormInput'
              placeholder='What?'
              onChange={() => handleInput('important_what', event.target.value)}
            ></input>
          </div>

          <div className='reqFormInput'>
            <label>Tell us why it is so important</label>
            <input
              value={requestData.important_why}
              className='reqFormInput'
              placeholder='Why?'
              onChange={() => handleInput('important_why', event.target.value)}
            ></input>
          </div>
        </div>

        <div>
          <h4 className='reqFormSubHeader'>Select two of our story prompts or just tell us memories and stories that you feel tell your story. </h4>

          <p className='reqFormPrompts'>
            a. What they mean to you?<br/>
            b. How did you meet?<br/>
            c. Inside Jokes<br/>
            d. Advice you have for them<br/>
            e. Describe a memory about your loved one that makes you laugh<br/>
            f. Describe or list things about them that makes them special to you.<br/>
            g. Other stories or memories<br/>
          </p>

          <h5 className='reqFormPrompts'>Tip: Include Descriptive language. Use your senses and really describe your feelings and emotions. Be sure it makes sense when someone outside of your relationship reads it. </h5>

          <div className='reqFormGroup'>
            <input
              value={requestData.story1}
              className='reqFormInput'
              placeholder='Prompt 1'
              onChange={() => handleInput('story1', event.target.value)}
            ></input>
            <input
              value={requestData.story2}
              className='reqFormInput'
              placeholder='Prompt 2'
              onChange={() => handleInput('story2', event.target.value)}
            ></input>
          </div>
        </div>

      <div className='reqFormGroup'>
        <div className='reqFormAdditionalDetails'>
          <h2 id='additionalDetailsHeader'>Is there anything else we should know?</h2>
          <input
            value={requestData.additional_info}
            placeholder='Additional Details'
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
          <h1>Song Request Details</h1>

<p>
  Once you provide details we can begin creating your song!
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
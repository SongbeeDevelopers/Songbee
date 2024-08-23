import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

// mui imports
import { Button, MobileStepper} from "@mui/material"
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import '../../SongRequestPage/SongRequestPage.css'


export default function LetsGetStarted() {
  const dispatch = useDispatch();

  const requestData = useSelector((store) => store.requestData);
  const genres = useSelector(store => store.genres)
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInput = (key, value) => {
    dispatch({
      type: "SET_REQUEST_DATA",
      payload: { ...requestData, [key]: value },
    });
  };

  const startedSteps = () => {
    if (activeStep === 0) {
      return (
          <div className="reqFormGroup">
            <div className="reqFormInput">
              <label>Who is Creating the Song?</label>
              <input
                value={requestData.requester}
                className="reqFormInput"
                placeholder="You, the family, the team, etc."
                onChange={() => handleInput("requester", event.target.value)}
              ></input>
            </div>
          </div>
      );
    }
    if (activeStep === 1) {
      return (
          <div className="reqFormGroup">
            <div className="reqFormInput">
              <label>Enter your E-Mail Address</label>
              <input
                value={requestData.email}
                className="reqFormInput"
                placeholder="Type your E-Mail Here"
                onChange={() => handleInput("email", event.target.value)}
              ></input>
            </div>
          </div>
      );
    }
    if (activeStep === 2) {
      return (
          <div className="reqFormGroup">
            <div className="reqFormInput">
              <label>Is this song for a Special Occasion?</label>
              <input
                value={requestData.occasion}
                className="reqFormInput"
                placeholder="Type the Occasion Here"
                onChange={() => handleInput("occasion", event.target.value)}
              ></input>
            </div>
          </div>
      );
    }
    if (activeStep === 3) {
      return (
        <div className="reqFormGroup">
          <div className="reqFormSelect">
            <label>Choose a Genre</label>
            <select
              value={requestData.genre}
              onChange={() => handleInput("genre", event.target.value)}
            >
              <option value="" disabled>
                Select Genre
              </option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    }
    if (activeStep === 4) {
      return (
        <div className="reqFormGroup">
          <div className="reqFormSelect">
            <label>What Vocal Style Suits Your Song?</label>
            <select
              value={requestData.vocal_type}
              onChange={() => handleInput("vocal_type", event.target.value)}
            >
              <option value="" disabled>
                Select Style
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
        </div>
      );
    }
    if (activeStep === 5) {
      return (
          <div className="reqFormGroup">
            <h3>Click Next</h3>
          </div>
      );
    }
  };
  
  return (
      <div className="startedBox">
        {startedSteps()}
        <MobileStepper
          variant="progress"
          steps={5}
          position="static"
          activeStep={activeStep}
          sx={{ m: "auto", maxWidth: 400, flexGrow: 1, mt: 6, backgroundColor: '#fff4df' }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
            >{ activeStep === 5 ?
              "Finished"
              :
              `Step ${activeStep + 1}`
            }
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
  );
}

import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

// mui imports
import { Button, MobileStepper } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import '../../SongRequestPage/SongRequestPage.css'


export default function SongSpecifications() {
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
          <div className="reqFormSelect">
            <label>Choose a Genre</label>
            <select
              value={requestData.genre}
              onChange={() => handleInput("genre", event.target.value)}
            >
              <option selected disabled>
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
    if (activeStep === 1) {
      return (
        <div className="reqFormGroup">
          <div className="reqFormSelect">
            <label>Set the Vibe</label>
            <select
              value={requestData.vibe}
              onChange={() => handleInput("vibe", event.target.value)}
            >
              <option selected disabled>
                Select Vibe
              </option>
              <option value="happy">Happy</option>
              <option value="lighthearted">Lighthearted</option>
              <option value="heartfelt">Heartfelt</option>
              <option value="romantic">Romantic</option>
              <option value="reflective">Reflective</option>
              <option value="somber">Somber</option>
            </select>
          </div>
        </div>
      );
    }
    if (activeStep === 2) {
      return (
        <div className="reqFormGroup">
          <div className="reqFormSelect">
            <label>What Vocal Style Suits Your Song?</label>
            <select
              value={requestData.vocal_type}
              onChange={() => handleInput("vocal_type", event.target.value)}
            >
              <option selected disabled>
                Select Style
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
        </div>
      );
    }
    if (activeStep === 3) {
      return (
        <div className="reqFormGroup">
          <div className="reqFormSelect">
            <label>Select a Tempo</label>
            <select
              value={requestData.tempo}
              onChange={() => handleInput("tempo", event.target.value)}
            >
              <option selected disabled>
                Select Tempo
              </option>
              <option value="slow">Slow</option>
              <option value="medium">Medium</option>
              <option value="fast">Up-Tempo</option>
            </select>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="startedBox">
      {startedSteps()}
      <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeStep}
        sx={{ m: "auto", maxWidth: 400, flexGrow: 1, mt: 6 }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === 5}
          >
            Next
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

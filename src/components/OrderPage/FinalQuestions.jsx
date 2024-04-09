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

function FinalQuestions ({ routeVariants }) {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const genres = useSelector((store) => store.genres);
    const requestData = useSelector((store) => store.requestData);
    const { id } = useParams();
  
    const user = useSelector((store) => store.user);
    const newOrder = useSelector((store) => store.newOrder);
  
    const handleSelection = (key, value) => {
      dispatch({
        type: "SET_NEW_ORDER",
        payload: { ...newOrder, [key]: value },
      });
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
    
        <div className="reqFormGroup">
          <div className="reqFormInput">
            <label>Tell us what is most important to your song</label>
            <input
              value={requestData.important_what}
              className="reqFormInput"
              placeholder="What?"
              onChange={() =>
                handleInput("important_what", event.target.value)
              }
            ></input>
          </div>

          <div className="reqFormInput">
            <label>Tell us why it is so important</label>
            <input
              value={requestData.important_why}
              className="reqFormInput"
              placeholder="Why?"
              onChange={() =>
                handleInput("important_why", event.target.value)
              }
            ></input>
          </div>
        </div>

        <div>
          <h4 className="reqFormSubHeader">
            Select two of our story prompts or just tell us memories and
            stories that you feel tell your story.{" "}
          </h4>

          <p className="reqFormPrompts">
            a. What they mean to you?
            <br />
            b. How did you meet?
            <br />
            c. Inside Jokes
            <br />
            d. Advice you have for them
            <br />
            e. Describe a memory about your loved one that makes you laugh
            <br />
            f. Describe or list things about them that makes them special to
            you.
            <br />
            g. Other stories or memories
            <br />
          </p>

          <h5 className="reqFormPrompts">
            Tip: Include Descriptive language. Use your senses and really
            describe your feelings and emotions. Be sure it makes sense when
            someone outside of your relationship reads it.{" "}
          </h5>

          <div className="reqFormGroup">
            <input
              value={requestData.story1}
              className="reqFormInput"
              placeholder="Prompt 1"
              onChange={() => handleInput("story1", event.target.value)}
            ></input>
            <input
              value={requestData.story2}
              className="reqFormInput"
              placeholder="Prompt 2"
              onChange={() => handleInput("story2", event.target.value)}
            ></input>
          </div>
        </div>

        <div className="reqFormGroup">
          <div className="reqFormAdditionalDetails">
            <h2 id="additionalDetailsHeader">
              Is there anything else we should know?
            </h2>
            <input
              value={requestData.additional_info}
              placeholder="Additional Details"
              onChange={() =>
                handleInput("additional_info", event.target.value)
              }
            ></input>
          </div>
        </div>
        </Box>
      </motion.div>
    )
}

export default FinalQuestions;
import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

export default function AdminDetailsDialog ({handleClose}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const song = useSelector(store => store.currentRequest);
    console.log("Here's the song:", song)
    
    const cancelSubmission = () => {
      handleClose(1)
    };
  return (
    <>
        <DialogTitle>{"Song Request Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h6">
                {song.requester}
            </Typography>
            <Typography variant="h6">
                {song.recipient}
            </Typography>
            <Typography variant="h6">
                {song.pronunciation}
            </Typography>
            <Typography variant="h6">
                {song.recipient_relationship}
            </Typography>
            <Typography variant="h6">
                {song.occasion}
            </Typography>
            <Typography variant="h6">
                {song.genre}
            </Typography>
            <Typography variant="h6">
                {song.vocal_type}
            </Typography>
            <Typography variant="h6">
                {song.vibe}
            </Typography>
            <Typography variant="h6">
                {song.tempo}
            </Typography>
            <Typography variant="h6">
                {song.inspiration}
            </Typography>
            <Typography variant="h6">
                {song.story1}
            </Typography>
            <Typography variant="h6">
                {song.story2}
            </Typography>
            <Typography variant="h6">
                {song.important_what}
            </Typography>
            <Typography variant="h6">
                {song.important_why}
            </Typography>
            <Typography variant="h6">
                {song.additional_info}
            </Typography>
            <Typography variant="h6">
                {song.created_at}
            </Typography>
            <Typography variant="h6">
                {song.delivery_days}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button variant="outlined" color="error" onClick={cancelSubmission}>
                Back
            </Button>
          </DialogActions>
    </>
  );
}
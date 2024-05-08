import * as React from 'react';
import { useSelector } from "react-redux";

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";


function AdminDetailsDialog({ setDetailsOpen }) {
 
  const song = useSelector(store => store.edit);

  const cancelSubmission = () => {
    setDetailsOpen(false)
  };

  return (
    <>
      <DialogTitle>{"Song Request Details"}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          <Typography variant="h6">
            {song.requester ? `Requester: ${song.requester}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.recipient ? `Recipient: ${song.recipient}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.pronunciation ? `Pronunciation: ${song.pronunciation}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.recipient_relationship ? `Relationship: ${song.recipient_relationship}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.occasion ? `Occasion: ${song.occasion}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.genre ? `Genre: ${song.genre}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.vocal_type ? `Vocal Type: ${song.vocal_type}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.vibe ? `Vibe: ${song.vibe}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.tempo ? `Tempo: ${song.tempo}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.inspiration ? `Inspiration: ${song.inspiration}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.story1 ? `Song Story 1: ${song.story1}` : ""}
          </Typography>
          <Typography variant="h6">
            {song.story2 ? `Song Story 2: ${song.story2}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.important_what ? `What's Important: ${song.important_what}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.important_why ? `Why it's Important: ${song.important_why}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.additional_info ? `Additional Info: ${song.additional_info}` : ""}
          </Typography>

          <Typography variant="h6">
            {song.delivery_days ? `Delivery Days: ${song.delivery_days}` : ""}
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

export default AdminDetailsDialog

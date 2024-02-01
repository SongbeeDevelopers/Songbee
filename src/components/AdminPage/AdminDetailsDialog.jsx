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
    const user = useSelector((store) => store.user);
    const song = useSelector(store => store.currentRequest);
    const [artist, setArtist] = useState(song.artist);
    const [title, setTitle] = useState(song.title);
    const [lyrics, setLyrics] = useState(song.lyrics);
    const [streamingLink, setStreamingLink] = useState(song.streaming_link);
    const [songFile, setSongFile] = useState('')
    const detailsForm = new FormData ();
    console.log("Here's the song:", song)
    
    const cancelSubmission = () => {
      handleClose(1)
    };
    const submitDetails = () => {
      if(songFile === ''){
          detailsForm.append("url", song.url)
      }
      else {
          detailsForm.append("file", songFile)
      }
      detailsForm.append("title", title)
      detailsForm.append("artist", artist)
      detailsForm.append("lyrics", lyrics)
      detailsForm.append("streaming_link", streamingLink)
      dispatch({
        type: "UPDATE_SONG_DETAILS",
        payload: {
            id: song.id,
            data: detailsForm
        }
      });
      handleClose(1)
    };
  return (
    <>
        <DialogTitle>{"Upload File and Complete Song Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
     
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="success" onClick={submitDetails}>
                Submit
            </Button>
            <Button variant="outlined" color="error" onClick={cancelSubmission}>
                Cancel
            </Button>
          </DialogActions>
    </>
  );
}
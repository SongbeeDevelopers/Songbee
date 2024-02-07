import * as React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";


function AdminRequestDialog ({handleClose}) {

  const dispatch = useDispatch();
  
  const song = useSelector(store => store.currentRequest);

  const [songFile, setSongFile] = useState('')
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [lyrics, setLyrics] = useState(song.lyrics);
  const [streamingLink, setStreamingLink] = useState(song.streaming_link);

  const detailsForm = new FormData ();
  
  const cancelSubmission = () => {
    handleClose()
  };

  // deletion logic
  const deleteRequest = () => {
    dispatch({
        type: "DELETE_SONG_REQUEST",
        payload: song.id
    })
    handleClose()
  };

  // submission logic
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

    handleClose()
  };


  return (
    <>
      <DialogTitle>{"Upload File and Complete Song Details"}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          <p>
          <Typography gutterBottom variant="overline" display="block">
            Upload Song File:
          </Typography>

          <TextField
            type="file" 
            className="form-control-file" 
            name="uploaded_file"
            onChange={(evt) => setSongFile(evt.target.files[0])}
          />
          </p>

          <p>
          <Typography gutterBottom variant="overline" display="block">
            Song Title:
          </Typography>

          <TextField
            label="Song Title"
            placeholder="Song Title"
            multiline
            maxRows={4}
            variant="filled"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          </p>

          <p>
          <Typography gutterBottom variant="overline" display="block">
            Artist Name:
          </Typography>

          <TextField
            label="Artist Name"
            placeholder="Artist Name"
            multiline
            maxRows={4}
            variant="filled"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
          </p>

          <p>
          <Typography gutterBottom variant="overline" display="block">
            Lyrics:
          </Typography>

          <TextField
            label="Lyrics"
            multiline
            rows={6}
            variant="filled"
            value={lyrics}
            onChange={(event) => setLyrics(event.target.value)}
          />
          </p>

          <p>
          <Typography gutterBottom variant="overline" display="block">
            Streaming Link:
          </Typography>
          <TextField
            label="Streaming Link"
            multiline
            rows={2}
            variant="filled"
            value={streamingLink}
            onChange={(event) => setStreamingLink(event.target.value)}
          />
          </p>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button variant="contained" color="success" onClick={submitDetails}>
            Submit
        </Button>
        <Button variant="contained" color="error" onClick={deleteRequest}>
            Delete
        </Button>
        <Button variant="outlined" color="error" onClick={cancelSubmission}>
            Cancel
        </Button>
      </DialogActions>
    </>
  );
}

export default AdminRequestDialog

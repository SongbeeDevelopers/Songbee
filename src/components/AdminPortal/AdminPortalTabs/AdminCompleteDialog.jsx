import * as React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function AdminCompleteDialog ({handleClose}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_ALL_ARTISTS" });
  }, [])
  
  const song = useSelector(store => store.currentRequest);
  const artists = useSelector(store => store.allArtists);

  const [songFile, setSongFile] = useState('')
  const [title, setTitle] = useState(song.title ? song.title : '');
  const [artist, setArtist] = useState(song.artist ? song.artist : '');
  const [lyrics, setLyrics] = useState(song.lyrics ? song.lyrics : '');
  const [streamingLink, setStreamingLink] = useState(song.streaming_link ? song.streaming_link : '');

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
    console.log("artist:", artist)
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
      <DialogTitle align='center'>{"Upload File and Complete Song Details"}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          <div className='completeDialogueContent'>
            <Typography gutterBottom variant="overline" display="block" align='center'>
              Upload Song File:
            </Typography>

            <TextField
              type="file" 
              className="form-control-file" 
              name="uploaded_file"
              onChange={(evt) => setSongFile(evt.target.files[0])}
              fullWidth={true}
            />

            <Typography gutterBottom variant="overline" display="block" align='center'>
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
              fullWidth={true}
            />

            <Typography gutterBottom variant="overline" display="block" align='center'>
              Select Artist:
            </Typography>
            <Select
              value={artist}
              label="User Class"
              onChange={(event) => setArtist(event.target.value)}
              fullWidth={true}
              >
                  {artists.map((artist) => (
                      <MenuItem value={artist.id} key={artist.id}>{artist.artist_name}</MenuItem>
                  ))}
              </Select>

            <Typography gutterBottom variant="overline" display="block" align='center'>
              Lyrics:
            </Typography>

            <TextField
              label="Lyrics"
              multiline
              rows={6}
              variant="filled"
              value={lyrics}
              onChange={(event) => setLyrics(event.target.value)}
              fullWidth={true}
            />

            <Typography gutterBottom variant="overline" display="block" align='center'>
              Streaming Link:
            </Typography>
            <TextField
              label="Streaming Link"
              multiline
              rows={2}
              variant="filled"
              value={streamingLink}
              onChange={(event) => setStreamingLink(event.target.value)}
              fullWidth={true}
            />
          </div>
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

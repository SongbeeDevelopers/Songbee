import * as React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
  MenuItem,
  Select
} from '@mui/material'


export default function AdminCompleteDialog({ handleClose }) {

  const dispatch = useDispatch();

  const edit = useSelector(store => store.edit)
  const song = useSelector(store => store.currentRequest);
  const artists = useSelector(store => store.allArtists);

  const [songFile, setSongFile] = useState('')
  const [title, setTitle] = useState(song.title ? song.title : '');
  const [artist, setArtist] = useState(song.artist ? song.artist : '');
  const [lyrics, setLyrics] = useState(song.lyrics ? song.lyrics : '');
  const [streamingLink, setStreamingLink] = useState(song.streaming_link ? song.streaming_link : '');

  const detailsForm = new FormData();

  // submission logic
  const submitDetails = () => {
    if (songFile === '') {
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

  // deletion logic
  const deleteRequest = () => {
    dispatch({
      type: "DELETE_SONG_REQUEST",
      payload: song.id
    })
    handleClose()
  };


  return (
    <div className='admin-complete-dialog'>
      <h3>Upload File and Complete Song Details</h3>

      <DialogContent>
        <DialogContentText>
          <div className='completeDialogueContent'>
            <div>
              <Typography gutterBottom variant="overline" display="block" align='left'>
                Upload Song File:
              </Typography>

              <TextField
                type="file"
                className="form-control-file"
                name="uploaded_file"
                onChange={(evt) => setSongFile(evt.target.files[0])}
                fullWidth={true}
              />
            </div>

            <div>
              <Typography gutterBottom variant="overline" display="block" align='left'>
                Song Title:
              </Typography>

              <TextField
                placeholder="Song Title"
                multiline
                maxRows={4}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                fullWidth={true}
              />
            </div>

            <div>
              <Typography gutterBottom variant="overline" display="block" align='left'>
                Select Artist:
              </Typography>
              <Select
                value={artist}
                onChange={(event) => setArtist(event.target.value)}
                fullWidth={true}
              >
                {artists.map((artist) => (
                  <MenuItem value={artist.id} key={artist.id}>{artist.artist_name}</MenuItem>
                ))}
              </Select>
            </div>

            <div>
              <Typography gutterBottom variant="overline" display="block" align='left'>
                Lyrics:
              </Typography>

              <TextField
                placeholder="Lyrics"
                multiline
                rows={6}
                value={lyrics}
                onChange={(event) => setLyrics(event.target.value)}
                fullWidth={true}
              />
            </div>

            <div>
              <Typography gutterBottom variant="overline" display="block" align='left'>
                Streaming Link:
              </Typography>
              <TextField
                placeholder="Streaming Link"
                multiline
                rows={2}
                value={streamingLink}
                onChange={(event) => setStreamingLink(event.target.value)}
                fullWidth={true}
              />
            </div>
          </div>
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" color="success" onClick={submitDetails}>
          Submit
        </Button>
        <Button variant="contained" color="error" onClick={deleteRequest}>
          Delete
        </Button>
      </DialogActions>
    </div>
  );
}

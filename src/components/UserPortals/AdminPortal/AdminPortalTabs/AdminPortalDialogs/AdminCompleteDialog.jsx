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
import Swal from 'sweetalert2';


export default function AdminCompleteDialog({ setCompleteOpen }) {

  const dispatch = useDispatch();

  const edit = useSelector(store => store.edit);
  const artists = useSelector(store => store.allArtists);
  const user = useSelector(store => store.user);
  const artistProfile = useSelector((store) => store.artistProfile);

  const [songFile, setSongFile] = useState('')

  const detailsForm = new FormData();

  // stores changes
  const handleInput = (key, value) => {
    dispatch({ type: 'EDIT_INPUT', payload: { key, value } })
  }

  // submission logic
  const submitDetails = () => {
    Swal.fire({
      icon: "question",
      title: "Save changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        if (songFile === '' || null) {
          detailsForm.append("url", edit.url)
        } else {
          detailsForm.append("file", songFile)
        }
        detailsForm.append("title", edit.title)
        {
          user.class === 3 ?
            detailsForm.append("artist_id", edit.artist_id)
            :
            detailsForm.append("artist_id", artistProfile.id)
        }
        detailsForm.append("lyrics", edit.lyrics)
        detailsForm.append("streaming_link", edit.streaming_link)
        if (edit.is_complete === false) {
          dispatch({
            type: 'CREATE_SONG_DETAILS',
            payload: {
              id: edit.id,
              data: detailsForm
            }
          })
        } else {
          dispatch({
            type: "UPDATE_SONG_DETAILS",
            payload: {
              id: edit.id,
              data: detailsForm
            }
          });
        }
        dispatch({ type: 'CLEAR_EDIT_DATA' })
        setCompleteOpen(false)
      }
    })
  }

  // deletion logic
  const deleteRequest = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete this request?",
      text: "This cannot be undone.",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        dispatch({
          type: "DELETE_SONG_REQUEST",
          payload: edit.id
        })
        setCompleteOpen(false)
      }
    });
  };


  return (
    <div className='admin-complete-dialog'>
      <h3>Upload File and Complete Song Details</h3>

      <DialogContent>
        <DialogContentText>
          <div className='completeDialogueContent'>
              <div>
              <Typography gutterBottom variant="overline" display="block" align='left'>
                  Song URL
                </Typography>

                <TextField
                  required
                  placeholder="Song Title"
                  multiline
                  maxRows={4}
                  value={edit.url}
                  onChange={(event) => handleInput("url", event.target.value)}
                  fullWidth={true}
                />

                <Typography gutterBottom variant="overline" display="block" align='left'>
                  Upload Song File:
                </Typography>

                <TextField
                  required
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
                  required
                  placeholder="Song Title"
                  multiline
                  maxRows={4}
                  value={edit.title}
                  onChange={(event) => handleInput("title", event.target.value)}
                  fullWidth={true}
                />
              </div>

              <div>
                {user.class === 3 ?
                  <>
                    <Typography gutterBottom variant="overline" display="block" align='left'>
                      Select Artist:
                    </Typography>
                    <Select
                      value={edit.artist_id}
                      onChange={(event) => handleInput('artist_id', event.target.value)}
                      fullWidth={true}
                    >
                      {artists.map((artist) => (
                        <MenuItem value={artist.id} key={artist.id}>{artist.artist_name}</MenuItem>
                      ))}
                    </Select>
                  </>
                  :
                  <p>
                    {artistProfile.artist_name}
                  </p>
                }
              </div>

              <div>
                <Typography gutterBottom variant="overline" display="block" align='left'>
                  Lyrics:
                </Typography>

                <TextField
                  placeholder="Lyrics"
                  multiline
                  rows={6}
                  value={edit.lyrics}
                  onChange={(event) => handleInput("lyrics", event.target.value)}
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
                  value={edit.streaming_link}
                  onChange={(event) => handleInput("streaming_link", event.target.value)}
                  fullWidth={true}
                />
              </div>
          </div>
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" onClick={
          // if already complete, no file required
          edit.is_complete ?
          submitDetails
          :
          // if not already complete, file required
          songFile ? submitDetails : () => Swal.fire({icon: 'error', title: 'Please upload a file.'})
          }
        > Submit
        </Button>
        {user.class === 3 ?
          <Button variant="contained" color="error" onClick={deleteRequest}>
            Delete
          </Button>
          :
          ''
        }
      </DialogActions>
    </div>
  );
}

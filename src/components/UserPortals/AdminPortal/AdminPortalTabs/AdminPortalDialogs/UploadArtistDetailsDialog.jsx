import * as React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Typography
} from '@mui/material'
import Swal from 'sweetalert2';


export default function UploadArtistDetailsDialog({ setCompleteOpen, request }) {

  const dispatch = useDispatch();

  const [songFile, setSongFile] = useState('')

  const detailsForm = new FormData()

  // submission logic
  const submitDetails = () => {
    
    setCompleteOpen(false)
  }


  return (
    <div className='admin-complete-dialog'>
      <h3>Upload File</h3>

      <DialogContent>
        <DialogContentText>
          <div className='completeDialogueContent'>
            <div>
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
            </div>
            
            </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" onClick={submitDetails}>
          Submit
        </Button>
      </DialogActions>
            </div>
    )
}
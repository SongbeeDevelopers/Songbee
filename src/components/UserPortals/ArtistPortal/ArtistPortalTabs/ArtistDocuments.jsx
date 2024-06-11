import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";

import Swal from "sweetalert2";

import '../ArtistPortal.css'

function ArtistDocuments() {

    const dispatch = useDispatch();
    const [file, setFile] = useState('');
    const artistProfile = useSelector((store) => store.artistProfile);
    const detailsForm = new FormData()

    const handleUpload = (num) => {
        detailsForm.append("file", file);
        detailsForm.append("artist", artistProfile.id);
        dispatch({
            type: "UPDATE_ARTIST_FILE",
            payload: {id: num,
                    data: detailsForm
            }
        })
        Swal.fire({
            icon: "success",
            title: "Your file was succesfully uploaded!",
            showCancelButton: false,
            confirmButtonText: "Continue",
          })
        setFile('')
    }
    return (
        <>
        <div className="reqFormGroup">
            <p><a href="https://asset.cloudinary.com/dke4ukd0z/b652b3723559a9e881960c3fd823ce0e">
                Click to View Artist Onboarding Information</a>
                </p>
        </div>
        <div className="reqFormGroup">
            <p><a href="https://asset.cloudinary.com/dke4ukd0z/51e4c3dfd159d31e558317f2b64eac57">
                Click to View Lyric Guidelines</a>
                </p>
                </div>
        <div className="reqFormGroup">
            <p><a href="https://www.irs.gov/pub/irs-pdf/fw9.pdf">
                Click to View W9 form</a>
                </p>
        </div>
        <div className="w9-input">
         <label> 
                Upload Your W9
                <br></br>
            <TextField
              type="file"
              className="form-control-file"
              name="uploaded_file"
              onChange={(evt) => setFile(evt.target.files[0])}
              // fullWidth={true}
              sx={{ width: 300, mt: 3, ml: -6 }}
            />
         </label>
         <Button
          onClick={() => handleUpload(5)}
          sx={{m: 'auto', mt: 2, height: 35, width: 200, backgroundColor: "#feaf17", color: "black" }}
        >
          UPDATE W9
        </Button>
        </div>
        <div className="w9-input">
         <label> 
                Upload Your Signed Artist Agreement
                <br></br>
            <TextField
              type="file"
              className="form-control-file"
              name="uploaded_file"
              onChange={(evt) => setFile(evt.target.files[0])}
              // fullWidth={true}
              sx={{ width: 300, mt: 3, ml: -6 }}
            />
         </label>
         <Button
          onClick={() => handleUpload(6)}
          sx={{m: 'auto', mt: 2, height: 35, width: 200, backgroundColor: "#feaf17", color: "black" }}
        >
          UPLOAD AGREEMENT
        </Button>
        </div>
        </>
        
    )
}

export default ArtistDocuments

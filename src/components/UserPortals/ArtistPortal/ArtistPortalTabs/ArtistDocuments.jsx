import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";

import '../ArtistPortal.css'

function ArtistDocuments() {

    const dispatch = useDispatch();
    const [file, setFile] = useState('');
    const artistProfile = useSelector((store) => store.artistProfile);
    const detailsForm = new FormData()

    const handleUpload = () => {
        detailsForm.append("file", file);
        detailsForm.append("artist", artistProfile.id);
        dispatch({
            type: "UPDATE_ARTIST_FILE",
            payload: {id: 5,
                    data: detailsForm
            }
        })
        setFile('')
    }
    return (
        <>
        <div className="reqFormGroup">
            <p><a href="https://res.cloudinary.com/dke4ukd0z/image/upload/v1713984838/Artist_Onboarding_Information_laob5g.pdf">
                Click to View Artist Onboarding Information</a>
                </p>
        </div>
        <div className="reqFormGroup">
            <p><a href="https://res.cloudinary.com/dke4ukd0z/image/upload/v1713984848/Lyric_Formatting_Guideline_for_Artists_q0ix1l.pdf">
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
          onClick={handleUpload}
          sx={{m: 'auto', mt: 2, height: 35, width: 200, backgroundColor: "#feaf17", color: "black" }}
        >
          UPDATE W9
        </Button>
        </div>
        </>
        
    )
}

export default ArtistDocuments

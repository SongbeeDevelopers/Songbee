import React from "react";

import '../ArtistPortal.css'

function ArtistDocuments() {
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
                Click here to upload your w9
                <br></br>
            <input
            type="file"
            >
            </input>
         </label>
        </div>
        </>
        
    )
}

export default ArtistDocuments

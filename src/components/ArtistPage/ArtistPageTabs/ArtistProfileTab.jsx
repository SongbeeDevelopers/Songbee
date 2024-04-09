import React from "react";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";


function ArtistProfileTab() {

  const dispatch = useDispatch()

  const artistProfile = useSelector((store) => store.artistProfile);

  const [openArtist, setOpenArtist] = useState(false);

  const handleOpenArtist = () => setOpenArtist(true);
  const handleCloseArtist = () => setOpenArtist(false);

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const artistNameRef = useRef("");
  const vocalTypeRef = useRef("");
  const musicLinksRef = useRef("");
  const genreIdRef = useRef("");
  const aboutYourselfRef = useRef("");
  
  // grabs artist details on mount
  useEffect(() => {
    dispatch({ type: "GET_ARTIST_PROFILE" });
  }, []);

  // submit function for dispatching to the generator
  const submit = (e) => {
    e.preventDefault();
    const artistObject = {
      edited_artistName: artistNameRef.current.value,
      edited_name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
      edited_genre_id: genreIdRef.current.value,
      edited_bio: aboutYourselfRef.current.value,
      edited_website: musicLinksRef.current.value,
      edited_vocal_type: vocalTypeRef.current.value,
    };

    // some of the artist fields are not on the form and also some of the database fields are not on this form
    dispatch({
      type: "REQUEST_ARTIST_EDIT",
      payload: artistObject,
    });

    // clear the form fields
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    artistNameRef.current.value = "";
    vocalTypeRef.current.value = "";
    musicLinksRef.current.value = "";
    genreIdRef.current.value = "";
    aboutYourselfRef.current.value = "";
    history.push("/user");
  };

    // This is for the dialog
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });


  return (
    <div className="tab-body">
      <h2>Your Artist Profile</h2>

      {/* fill in with profile from artist community page */}

      <Button sx={{ color: "black" }} onClick={handleOpenArtist}>
          Edit Artist Profile Info
      </Button>

      <Dialog
          open={openArtist}
          keepMounted
          TransitionComponent={Transition}
          // onClose={handleCloseArtist}
          aria-describedby="alert-dialog-slide-description"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
            }}
          >
            <h3>Would you like to make an edit ?</h3>

            <form className="artist-form">
              <div className="group">
                <div className="group-input">
                  <label htmlFor="firstName">First Name</label>

                  <input
                    type="text"
                    ref={firstNameRef}
                    defaultValue={artistProfile?.name?.split()[0]}
                  />
                </div>

                <div className="group-input">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    ref={lastNameRef}
                    defaultValue={artistProfile?.name?.split()[1]}
                  />
                </div>
              </div>
              <div className="group">
                <div className="group-input">
                  <label htmlFor="artistName">Artist Name</label>
                  <input type="text" ref={artistNameRef} defaultValue={artistProfile?.artist_name} />
                </div>

                <div className="group group-input">
                  <label htmlFor="aboutUs">Select a Vocal Type</label>
                  <select
                    name="Vocal Type"
                    id="vocalType"
                    ref={vocalTypeRef}
                    defaultValue={artistProfile?.vocal_type}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="group">
                <div className="group-input">
                  <label htmlFor="musicLinks">Music Links</label>
                  <input type="text" ref={musicLinksRef} defaultValue={artistProfile?.music_links} />
                </div>

                <div className="group-input">
                  <label htmlFor="genre">Genre</label>
                  <select name="genre" id="genre" ref={genreIdRef} defaultValue={artistProfile?.genre_id}>
                    <option value="1">Rap/Hip-Hop</option>
                    <option value="2">Folk</option>
                    <option value="3">Rock</option>
                    <option value="4">Christian</option>
                    <option value="5">R&B</option>
                    <option value="6">Country</option>
                    <option value="7">Singer Songwriter</option>
                    <option value="8">Acoustic Pop</option>
                    <option value="9">Spanish</option>
                  </select>
                </div>
              </div>
              <div className="group group-input width-full">
                <label htmlFor="aboutYourself">
                  Please Supply Your Bio
                </label>
                <textarea
                  ref={aboutYourselfRef}
                  defaultValue={artistProfile?.bio}
                  name="aboutYourself"
                  id="aboutYourself"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="artist-disclaimer">
                <p>Please review your submission.</p>
                <p>
                  If any links are invalid, your application will not be
                  accepted.
                </p>
              </div>
              <button onClick={submit} className="join-button">
                Apply Now
              </button>
            </form>
          </Box>
        </Dialog>

    </div>
  )
}

export default ArtistProfileTab

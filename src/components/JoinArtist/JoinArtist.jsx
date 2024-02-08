import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { motion } from "framer-motion";

import "./JoinArtist.css";


function JoinArtist({ routeVariants }) {

    // create useStates to hold the artists info

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [email, setEmail] = useState("");
  const [musicLinks, setMusicLinks] = useState("");
  const [genreId, setGenreId] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");
  const [aboutUs, setAboutUs] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
// submit function for dispatching to the generator 

  const submit = (e) => {
    e.preventDefault();
    const artistObject = {
      artist_name: artistName,
      name: `${firstName} ${lastName}`,
      genre_id: genreId,
      bio: aboutYourself
    };
    // some of the artist fields are not on the form and also some of the database fields are not on this form
    dispatch({
      type: "CREATE_ARTIST",
      payload: artistObject,
    });
    // clear the form fields
    setFirstName("");
    setLastName("");
    setArtistName("");
    setEmail("");
    setMusicLinks("");
    setGenreId("");
    setAboutYourself("");
    setAboutUs("");
    history.push('/user');
  };

  
  return (
    <motion.div
      className="join-as-artist"
      variants={routeVariants}
      initial='initial'
      animate='final'
    >
      <h1>Apply Now to Join</h1>
      <p>
        Our Songbee artists are required to write, record, and produce a song
        from start to finish themselves. We do not pair producers with
        vocalists, instrumentals or vice versa
      </p>

      <form className="artist-form">
        <div className="group">
          <div className="group-input">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="group-input">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="group">
          <div className="group-input">
            <label htmlFor="artistName">Artist Name</label>
            <input
              type="text"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
            />
          </div>

          <div className="group-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="group">
          <div className="group-input">
            <label htmlFor="musicLinks">Music Links</label>
            <input
              type="text"
              value={musicLinks}
              onChange={(e) => setMusicLinks(e.target.value)}
            />
          </div>

          <div className="group-input">
            <label htmlFor="genre">Genre</label>
            <select
              name="genre"
              id="genre"
              value={genreId}
              onChange={(e) => setGenreId(e.target.value)}
            >
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
          <label htmlFor="aboutYourself">Tell Us About Yourself</label>
          <textarea
            value={aboutYourself}
            onChange={(e) => setAboutYourself(e.target.value)}
            name="aboutYourself"
            id="aboutYourself"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="group group-input  width-full">
          <label htmlFor="aboutUs">How Did You Hear About Us</label>
          <select
            name="aboutUs"
            id="aboutUs"
            value={aboutUs}
            onChange={(e) => setAboutUs(e.target.value)}
          >
            <option value="google">Google</option>
            <option value="friend">Friend</option>
          </select>
        </div>
        <div className="artist-disclaimer">
          <p>Please review your submission.</p>
          <p>
            If any links are invalid, your application will not be accepted.
          </p>
        </div>
        <button onClick={submit} className="join-button">
          Apply Now
        </button>
      </form>
      <div className="explore-artist">
        <Link to="/artist">Explore Our Artist Community</Link>
      </div>
    </motion.div>
  );
}

export default JoinArtist;

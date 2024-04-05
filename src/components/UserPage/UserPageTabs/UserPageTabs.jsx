import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import UserRequestsTab from "./UserRequestsTab";
import UserCreditTab from "./UserCreditTab";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import '../UserPage.css'


export default function BasicTabs() {

  // hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // reducers
  const user = useSelector((store) => store.user);
  const artistProfile = useSelector((store) => store.artistProfile);

  // local state
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [openArtist, setOpenArtist] = useState(false);

  // functions
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleOpenArtist = () => setOpenArtist(true);
  const handleCloseArtist = () => setOpenArtist(false);

  // useRef variables
  const passwordRef = useRef("");
  const emailRef = useRef(user.email);

  // grabs artist on mount
  useEffect(() => {
    dispatch({ type: "GET_ARTIST_PROFILE" });
  }, []);

  // Handle function for the cancel button
  const handleCancel = (event) => {
    event.preventDefault();
    history.push("/user");
  };

  // Handle function for the edit button
  const handleEdit = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_USER",
      payload: {
        email: emailRef.current,
        password: passwordRef.current,
      },
    });
    history.push("/user");
  };

  // Handle function for the delete button
  // const handleDelete = (event) => {
  //   event.preventDefault();
  //   dispatch({
  //     type: 'DELETE_USER',
  //     payload: {id:user.id}
  //   })
  //   history.push('/user')
  // }

  // This is clicking on the tabs and getting the value for each corresponding tabs
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }; // End of tab structure

  // This is for the dialog
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const artistNameRef = useRef("");
  const vocalTypeRef = useRef("");
  const musicLinksRef = useRef("");
  const genreIdRef = useRef("");
  const aboutYourselfRef = useRef("");

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


  return (
    <>
      {/* tab selection */}
      <Box sx={{ height: "80%", borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="tabHeader"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Order History"
            {...a11yProps(0)}
            sx={{ color: "orange" }}
          />
          <Tab
            label="Profile"
            {...a11yProps(1)}
            sx={{ color: "orange" }}
          />
          <Tab
            label="Credit Balance"
            {...a11yProps(2)}
            sx={{ color: "orange" }}
          />
        </Tabs>
      </Box>

      {/* tab body */}
      <Box sx={{ width: "100%" }}>
        <Card className="cardBackground" variant="outlined">

          {/* order history tab */}
          <CustomTabPanel className="cardBody" value={value} index={0}>
            <UserRequestsTab />
          </CustomTabPanel>

          {/* personal info tab */}
          <CustomTabPanel value={value} index={1}>
            <h1 className="profileHeader">Personal info</h1>
            <h3>{user.email}</h3>
            <CardContent variant="outlined">
              <Button sx={{ color: "black" }} onClick={handleOpen}>
                Edit Info
              </Button>

              <Button sx={{ color: "black" }} onClick={handleOpenArtist}>
                Edit Artist Profile Info
              </Button>

              {/* edit info dialogue */}
              <Dialog
                open={open}
                keepMounted
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                  width: 800,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  ml: 20,
                }}
              >
                <Box
                  sx={{
                    width: 400,
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

                  <TextField
                    sx={{
                      margin: "5px",
                      border: "2px solid",
                      borderColor: "orange",
                      borderRadius: "5px",
                    }}
                    name="email"
                    type="text"
                    size="small"
                    placeholder="Email"
                    defaultValue={emailRef.current}
                    onChange={(e) => {
                      emailRef.current = e.target.value;
                    }}
                  />

                  <br />

                  <TextField
                    sx={{
                      margin: "5px",
                      border: "2px solid",
                      borderColor: "orange",
                      borderRadius: "5px",
                    }}
                    name="password"
                    type="password"
                    size="small"
                    placeholder="Password"
                    onChange={(e) => {
                      passwordRef.current = e.target.value;
                    }}
                  />

                  <div className="modalBtns">
                    <Button
                      type="submit"
                      onClick={handleEdit}
                      variant="contained"
                      color="success"
                      size="small"
                    >
                      Save
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleCancel}
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Cancel
                    </Button>
                  </div>
                </Box>
              </Dialog>

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
            </CardContent>
          </CustomTabPanel>

          {/* user credit tab */}
          <CustomTabPanel value={value} index={2}>
            <UserCreditTab />
          </CustomTabPanel>
        </Card>
      </Box>
    </>
  );
}

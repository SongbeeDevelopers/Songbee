import * as React from "react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import UserHistory from "../UserHistory/UserHistory";
import UserCreditPage from "../UserCreditPage/UserCreditPage";

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

import "./UserPageTabs.css";

// Inside here will have the user's email and password and have the option to edit details
export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const user = useSelector((store) => store.user);
  const emailRef = useRef(user.email);
  const passwordRef = useRef("");
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <div className="container">
    <Box sx={{ height: "80%", borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            className="tabHeader"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ color: "orange" }}
              label="Order History"
              {...a11yProps(0)}
            />
            <Tab 
              sx={{ color: "orange" }} 
              label="profile" 
              {...a11yProps(1)} />
            <Tab
              sx={{ color: "orange" }}
              label="Credit Balance"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
    <Box sx={{ width: "100%" }}>
      <Card className="cardBackground" variant="outlined">
        <CustomTabPanel className="cardBody" value={value} index={0}>
          <UserHistory />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <h1 className="profileHeader">Personal info</h1>
          <h3>{user.email}</h3>

          <CardContent variant="outlined">
            {/* <Typography sx={{ fontSize: 14, mt: 2 }} color="text.secondary" gutterBottom> */}
            <Button sx={{ color: "black" }} onClick={handleOpen}>
              Edit Info
            </Button>
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
          </CardContent>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <UserCreditPage />
        </CustomTabPanel>
      </Card>
    </Box>
    </div>
  );
}

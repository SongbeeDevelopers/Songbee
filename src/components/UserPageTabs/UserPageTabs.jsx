import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
// import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserHistory from '../UserHistory/UserHistory';
import UserCreditPage from '../UserCreditPage/UserCreditPage';
import './UserPageTabs.css';




// Inside here will have the user's email and password and have the option to edit details
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const user = useSelector((store) => store.user);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  // This will be for the form inputs for editing
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  // Handle function for the cancel button
  const handleCancel = (event) => {
    event.preventDefault();
    history.push('/user');
  }

  // Handle function for the edit button
  const handleEdit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        email: email,
        password: password
      }
    })
    history.push('/user')
  }

  // Handle function for the delete button
  const handleDelete = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DELETE_USER',
      payload: {id:user.id}
    })
    history.push('/user')
  }
  
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
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }// End of tab structure
  

  

  return (
    // The card and tabs structure
    <Box sx={{ width: '100%'}}>
      <Card  variant="outlined">
      <Box sx={{height: "80%", borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className='tabHeader' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{color: "orange"}} label="Profile" {...a11yProps(0)} />
          <Tab sx={{color: "orange"}} label="Order History" {...a11yProps(1)} />
          <Tab sx={{color: "orange"}} label="Credit Balance" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel  className='cardBody' value={value} index={0}>
        <h1 className='profileHeader'>Personal info</h1> 
        <h3>{user.email}</h3>
        
        <div>    
            <CardContent>
              <Typography sx={{ fontSize: 14, mt: 2 }} color="text.secondary" gutterBottom>
              <Button sx={{color: "black"}} onClick={handleOpen}>Edit Info</Button>
              <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
                <Box sx={{position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,}}>
                    <h3>Would you like to make an edit ?</h3>
                 
                  <input  className='emailInput' onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  />
                  <br />
                  <input className='passwordInput' onChange={() => handlePasswordChange(event)}
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  />
                
                <div className='modalBtns'>
                <Button type="submit" onClick={handleEdit} variant="contained" color="success" size="small">Edit</Button>
                <Button type="submit" onClick={handleCancel} variant="contained" color="secondary" size="small">Cancel</Button>
                <Button  type="submit" onClick={handleDelete} variant="contained" color="error" size="small">Delete</Button>
                </div>
                </Box>

              </Modal>
              </Typography> 
            </CardContent>   
          
        </div>
      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={1}>
        <UserHistory />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UserCreditPage />
      </CustomTabPanel>
      </Card>
    </Box>
   
  );

  
  
    
    
  
}
import { useDispatch } from "react-redux";
import { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function UserClassSelector({ user }) {

  const dispatch = useDispatch()

  const [userClass, setUserClass] = useState(user.class)

  const updateUserClass = (value) => {
    dispatch({
      type: "UPDATE_USER_CLASS",
      payload: {
        id: user.id,
        data: value
      }
    })
  };

  return (
    <Select
      value={userClass}
      label="User Class"
      onChange={(event) => updateUserClass(event.target.value)}
    >
      <MenuItem value={1}>User</MenuItem>
      <MenuItem value={2}>Artist</MenuItem>
      <MenuItem value={3}>Admin</MenuItem>
    </Select>
  )
}

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function UserClass({user}){
    const dispatch = useDispatch()
    const [userClass, setUserClass] = useState(user.class)
    console.log("user:", user)
    const updateUserClass = (id, value) => {
        dispatch({
            type: "UPDATE_USER_CLASS",
            payload: {
                id: id,
                data: value}
        })
      };
    return (
        <>
            <Select
            value={userClass}
            label="User Class"
            onChange={(event) => updateUserClass(user.id, event.target.value)}
            >
            <MenuItem value={1}>User</MenuItem>
            <MenuItem value={2}>Artist</MenuItem>
            <MenuItem value={3}>Admin</MenuItem>
            </Select>
        </>
    )
}
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button, Select, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";


function FilterBar({type}){

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [classQuery, setClassQuery] = useState('');

  // regular filter logic
  const submitSearch = () => {
    dispatch({
      type: "FETCH_RESULTS",
      payload: {
        type,
        query: searchQuery
      }
    });
  };

  // user class logic
  const submitClassSearch = () => {
    dispatch({
        type: "FETCH_CLASS_FILTER",
        payload: classQuery
    })
  }

  // if in users tab create separate filter by user class filter
  const UserFilter = () => {
    if (type === 'user'){
      return (
        <>
          <Typography gutterBottom variant="overline" display="block" mt={3}>
            Filter by user class:
          </Typography>

          <Select
          value={classQuery}
          label="User Class"
          onChange={(event) => setClassQuery(event.target.value)}
          >
            <MenuItem value={1}>User</MenuItem>
            <MenuItem value={2}>Artist</MenuItem>
            <MenuItem value={3}>Admin</MenuItem>
          </Select>

          <Button
            variant="contained"
            onClick={submitClassSearch}
            sx={{mt: 1, backgroundColor: "#feaf17", color: "black"}}
          >
            FILTER
          </Button>
        </>
      )
    }
  }


  return (
    <>
      <div className="filter-bar">
        <Typography gutterBottom variant="overline" display="block" mt={3}>
          Filter by keyword:
        </Typography>

        <TextField
          label="Enter Text"
          type="search"
          onChange={(event) => setSearchQuery(event.target.value)}
          value={searchQuery}
          sx={{mr: 5}}
        />
    
        <Button
          variant="contained"
          onClick={submitSearch}
          sx={{mt: 1, backgroundColor: "#feaf17", color: "black"}}
        >
          FILTER
        </Button>
      </div>
      
      <UserFilter />
    </>
  )
}

export default FilterBar;

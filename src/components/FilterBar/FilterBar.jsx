import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import './FilterBar.css'


function FilterBar({ type }) {

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [classQuery, setClassQuery] = useState('');

  const submitSearch = () => {
    // submits user search
    type === 'user' ?
      dispatch({
        type: 'FETCH_RESULTS',
        payload: {
          type,
          query: searchQuery,
          classQuery
        }
      })
      :
      // submits standard search
      dispatch({
        type: "FETCH_RESULTS",
        payload: {
          type,
          query: searchQuery
        }
      });
  };


  return (
    <div className="filters">

      <div className="filter-bar">
        <Typography gutterBottom variant="overline" display="block" mt={1}>
          Filter by keyword:
        </Typography>
        <TextField
          label="Enter Text"
          type="search"
          onChange={(event) => setSearchQuery(event.target.value)}
          value={searchQuery}
          sx={{ mr: 4 }}
        />
      </div>

      {/* additional filter for user class on users tab */}
      {type === 'user' &&
        <div className="userFilter">
          <Typography gutterBottom variant="overline" display="block" mt={1}>
            Filter by user class:
          </Typography>
          <FormControl>
            <InputLabel>Class</InputLabel>
            <Select
              value={classQuery}
              label="User Class"
              onChange={(event) => setClassQuery(event.target.value)}
              sx={{ width: 125, mr: 4 }}
            >
              <MenuItem></MenuItem>
              <MenuItem value={1}>User</MenuItem>
              <MenuItem value={2}>Artist</MenuItem>
              <MenuItem value={3}>Admin</MenuItem>
            </Select>
          </FormControl>
        </div>
      }

      <Button
        variant="contained"
        onClick={submitSearch}
        sx={{ height: 40, mt: 6.5, backgroundColor: "#feaf17", color: "black" }}
      >
        FILTER
      </Button>

    </div>
  )
}

export default FilterBar;

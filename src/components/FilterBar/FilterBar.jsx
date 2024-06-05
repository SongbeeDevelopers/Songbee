import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import './FilterBar.css'


function FilterBar({ type }) {

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [classQuery, setClassQuery] = useState('');
  const [genreQuery, setGenreQuery] = useState('');

  const artistGenres = useSelector((store) => store.genres)
  

  const submitSearch = () => {
    // submits user search
    type === 'user' || type === 'artist' ?
      dispatch({
        type: 'FETCH_RESULTS',
        payload: {
          type,
          query: searchQuery,
          classQuery,
          genreQuery
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

  const clearFilters = () => {
    dispatch({ type: 'FETCH_ALL_ARTISTS' })
    dispatch({ type: 'FETCH_ALL_REQUESTS' })
    dispatch({ type: 'FETCH_ALL_USERS' })
    dispatch({ type: 'FETCH_ALL_SUBSCRIPTIONS' })
  }


  return (
    <div className="filters">

    <div className="mobile-filters-row">
      <div className="filter-bar">
        <Typography gutterBottom variant="overline" display="block" mt={1}>
          Filter by keyword:
        </Typography>
        <TextField
          label="Enter Text"
          type="search"
          onChange={(event) => setSearchQuery(event.target.value)}
          value={searchQuery}
          sx={{ mr: 4, width: 125 }}
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

      {/* Filter by genres for each artist */}
    {type === 'artist' &&
        <div className="userFilter">
          <Typography gutterBottom variant="overline" display="block" mt={1}>
            Filter by user genre:
          </Typography>
          <FormControl>
            <InputLabel>Genre</InputLabel>
            <Select
              value={genreQuery}
              label="User Class"
              onChange={(event) => setGenreQuery(event.target.value)}
              sx={{ width: 125, mr: 4 }}
            >
              <MenuItem></MenuItem>
              {artistGenres.map((genre) => (
                <MenuItem value={genre.id}>{genre.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      } 
    </div>

    
    <div className="mobile-filters-row mobile-filters-row2">

      <Button
        variant="contained"
        onClick={submitSearch}
        sx={{ height: 40, mt: 6.5, backgroundColor: "#feaf17", color: "black" }}
      >
        FILTER
      </Button>

      <Button
        variant="contained"
        onClick={clearFilters}
        sx={{ height: 40, mt: 6.5, ml: 2, backgroundColor: "#feaf17", color: "black" }}
      >
        CLEAR
      </Button>
      </div>

    </div>
  )
}

export default FilterBar;

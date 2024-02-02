import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function FilterBar(){
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [genreQuery, setGenreQuery] = useState('');
  useEffect(() => {
  }, []);

  const submitSearch = () => {
    dispatch({
      type: "SAGA/GET_SEARCH",
      payload: searchQuery
    });
  };

    return (
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
    )
}

export default FilterBar;
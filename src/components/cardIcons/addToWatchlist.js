import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const AddToWatchListIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToWatchList = (e) => {
      e.preventDefault();
      context.addToWatchList(movie);
      console.log(context.watchList);
    };
    return (
      <IconButton aria-label="add to watch list" onClick={handleAddToWatchList}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };

  export default AddToWatchListIcon
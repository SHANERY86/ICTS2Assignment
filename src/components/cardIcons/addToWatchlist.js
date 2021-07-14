import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const AddToWatchListIcon = ({ movie }) => {
    return (
      <IconButton>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };

  export default AddToWatchListIcon
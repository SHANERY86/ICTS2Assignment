import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme) => ({
  root: {
    justify: "centre",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Paginator = ( props ) => {
    const classes = useStyles()
    const [page,setPage] = useState(1)
    
    useEffect(() => {
        props.pageUpdate(page)
    })
    
    const handleChange = (event, value) => {
      setPage(value);
    }
    return  (
  <Pagination count={10} page={page} onChange={handleChange} color="secondary" />
 );
  }

  export default Paginator;
import React, { useState, useEffect, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext"


const Pagination = ( props ) => {
    const [p,setP] = useState(1)
    const {page: page} = useContext(MoviesContext)
    const context = useContext(MoviesContext)
    

    useEffect(() => {
        context.newPage(p)
    })


    return  (
    <>         
  <span>Current Page: {p}</span>
  <button
    onClick={() => setP(old => Math.max(old - 1,1))}
  >
    Previous Page
  </button>{' '}
  <button
    onClick={() => setP(old => old +1)}
    // Disable the Next Page button until we know a next page is available
  >
    Next Page
  </button> 
  </> );
  }

  export default Pagination;
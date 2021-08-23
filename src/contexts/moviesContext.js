import firebase from "firebase/app";
import "firebase/auth";
import React, { useState } from "react";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [page,setPage] = useState(1)
  const [myReviews, setMyReviews] = useState( {} )
  const [favorites, setFavorites] = useState( [] )
  const [watchList, setWatchList] = useState( [] )

const pageUpdate = (p) => {
  setPage(p)
}


  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };
  
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToWatchList = (movie) => {
    setWatchList([...watchList,movie.id])
  };

  return (
    <MoviesContext.Provider
      value={{
        page,
        favorites,
        watchList,
        pageUpdate,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
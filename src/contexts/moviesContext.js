import firebase from "firebase/app";
import "firebase/auth";
import React, { useState } from "react";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [page,setPage] = useState(1)
  const [myReviews, setMyReviews] = useState( {} )
  const [favorites, setFavorites] = useState( [] )
  const [watchList, setWatchList] = useState( [] )
  const [user, setUser] = useState(null);

const userData = 
  { username: "user",
    password: "secret"
}

const pageUpdate = (p) => {
  setPage(p)
}

if(process.env.REACT_APP_API_KEY){
firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      setUser(user);
    } 
    else {
      setUser(firebase.auth().currentUser)
    }
});
}


  const isAuthenticated = user === null ? false : true

  const signout = () => {
    setTimeout(() => setUser( { username: null, password: null } ), 100);
  };

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
        isAuthenticated,
        pageUpdate,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchList,
        signout
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
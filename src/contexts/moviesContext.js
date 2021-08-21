import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [page,setPage] = useState(1)
  const [myReviews, setMyReviews] = useState( {} )
  const [favorites, setFavorites] = useState( [] )
  const [watchList, setWatchList] = useState( [] )
  const [user, setUser] = useState({ username: null, password: null });

const userData = 
  { username: "user",
    password: "secret"
}

const pageUpdate = (p) => {
  setPage(p)
}

  const authenticate = (username, password) => {
    if(username == userData.username && password == userData.password ){
    setUser({ username, password });
    }
  };

  const isAuthenticated = user.username === null ? false : true

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
        authenticate,
        signout
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
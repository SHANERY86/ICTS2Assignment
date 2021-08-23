import React, { useContext, useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { MoviesContext } from "../contexts/moviesContext"

const HomePage = () => {
  const { page, pageUpdate } = useContext(MoviesContext); 
  const {  data, error, isLoading, isError }  
      = useQuery(['discover', { page: page }],() => getMovies(page),{ keepPreviousData: true });

const multiPage = true;
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      pageUpdate={pageUpdate}
      multiPage={multiPage}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};

export default HomePage;
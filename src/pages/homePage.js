import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Pagination from "../components/pagination"
import { MoviesContext } from "../contexts/moviesContext"

const HomePage = () => {
  const {page: page} = useContext(MoviesContext)
  console.log("Homepage:" + page);
  const {  data, error, isLoading, isError, isFetching, isPreviousData }  
      = useQuery(['discover', { page: page }],() => getMovies(page),{ keepPreviousData: true });

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
      page={page}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};

export default HomePage;
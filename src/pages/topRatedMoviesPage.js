import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner';
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { MoviesContext } from "../contexts/moviesContext";

const TopRatedMoviesPage = (props) => {
  const { page, pageUpdate } = useContext(MoviesContext); 
  const {  data, error, isLoading, isError }  = useQuery(
    ['topRated', { page: page }],() => getTopRatedMovies(page), { keepPreviousData: true })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


  return (
    <PageTemplate
      title='Discover Top Rated Movies'
      pageUpdate={pageUpdate}
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default TopRatedMoviesPage;
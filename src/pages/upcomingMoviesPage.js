import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner';
import AddtoWatchListIcon from '../components/cardIcons/addToWatchlist'
import { MoviesContext } from "../contexts/moviesContext";

const UpcomingMoviesPage = (props) => {
  const { page, pageUpdate } = useContext(MoviesContext); 
  const {  data, error, isLoading, isError }  = useQuery(
    ['upcoming', { page: page }],() => getUpcomingMovies(page), { keepPreviousData: true })
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
      title='Discover Upcoming Movies'
      pageUpdate={pageUpdate}
      movies={movies}
      multiPage={multiPage}
      action={(movie) => {
        return <AddtoWatchListIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;
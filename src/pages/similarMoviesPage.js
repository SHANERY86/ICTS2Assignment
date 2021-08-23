import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getSimilarMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { MoviesContext } from "../contexts/moviesContext";

const SimilarMoviesPage = (props) => {
  const { page, pageUpdate } = useContext(MoviesContext); 
    const { id } = props.match.params;
  const {  data, error, isLoading, isError }  = useQuery(['similar', {id : id}], getSimilarMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Similar Movies"
      movies={movies}
      pageUpdate={pageUpdate}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};

export default SimilarMoviesPage;
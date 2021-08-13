import React from "react";
import axios from "axios";
import PageTemplate from '../components/templateMovieListPage';
import { getMoviesByActor, getPerson } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const MoviesByActorPage = (props) => {
    const { id } = props.match.params;
  const {  data, error, isLoading, isError }  = useQuery(['moviesByActor', { id:id }], getMoviesByActor);
  const person = useQuery({
        queryKey: ["person", { id: id }],
        queryFn: getPerson,
      })
  const personsName = person.data.name;
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title={`Movies Featuring ${personsName}`}
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default MoviesByActorPage;
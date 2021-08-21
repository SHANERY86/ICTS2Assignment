import React, { useContext } from "react";
import PageTemplate from "../components/templatePeopleListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPeople} from '../api/tmdb-api'
import { MoviesContext } from "../contexts/moviesContext"


const PeoplePage = (props) => {
  const { page, pageUpdate } = useContext(MoviesContext); 
  const {  data, error, isLoading, isError }  = useQuery(
    ['people', {page: page}],() => getPeople(page),{ keepPreviousData: true })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }   
  const people = data.results; 

  return (
    <PageTemplate
      title="Explore the people of Movies"
      people={people}
      pageUpdate={pageUpdate}
    />
);
};

export default PeoplePage;
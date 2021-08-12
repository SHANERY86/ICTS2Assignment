import React from "react";
import PageTemplate from "../components/templatePeopleListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPeople} from '../api/tmdb-api'


const PeoplePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('people', getPeople)

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
    />
);
};

export default PeoplePage;
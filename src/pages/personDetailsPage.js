import React from "react";
import PageTemplate from "../components/templatePersonPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPerson} from '../api/tmdb-api'

const PersonDetailsPage = (props) => {
    const { id } = props.match.params
  const {  data: person, error, isLoading, isError }  = useQuery(['person', { id: id }], getPerson);
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  return (
    <PageTemplate
      title={person.name}
      person={person}
    />
);
};

export default PersonDetailsPage;
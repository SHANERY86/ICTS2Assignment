import React from "react";
import PageTemplate from "../components/templateExploreListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'


const HomePage = (props) => {
/*  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }   
  const movies = data.results; */

  const people = {
    title: "People",
    img: `https://www.freevector.com/uploads/vector/preview/28523/Group-of-People.jpg`,
    link: "/"
}

const actors = {
    title: "Placeholder",
    img: `https://media.istockphoto.com/vectors/theatre-flat-design-united-kingdom-icon-vector-id1012746056?k=6&m=1012746056&s=612x612&w=0&h=g11MABmi1quAmirnaojsy2l2d3U3FAgagt76qE5__vs=`,
    link: "/"
}

  const explore = [
    { ...people, id: 1 },
    { ...actors, id: 2 },
  ];

  return (
    <PageTemplate
      title="Explore the world of Movies"
      explore={explore}
    />
);
};

export default HomePage;
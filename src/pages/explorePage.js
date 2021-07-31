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

  const directors = {
    title: "Directors",
    img: `https://media.istockphoto.com/vectors/vintage-cinema-concept-vector-id861198276?k=6&m=861198276&s=612x612&w=0&h=Z3A4h2DhkD5ZUyiG9F9dJoNI2WPzlImqITGBrI-gNbI=`
}

const actors = {
    title: "Actors",
    img: `https://media.istockphoto.com/vectors/theatre-flat-design-united-kingdom-icon-vector-id1012746056?k=6&m=1012746056&s=612x612&w=0&h=g11MABmi1quAmirnaojsy2l2d3U3FAgagt76qE5__vs=`
}

  const explore = [
    { ...directors, id: 1 },
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
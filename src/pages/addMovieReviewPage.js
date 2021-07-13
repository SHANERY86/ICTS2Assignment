import React from "react";
import { getMovie } from "../api/tmdb-api";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import { withRouter } from "react-router-dom";
import Spinner from "../components/spinner";

const WriteReviewPage = (props) => {
  const { movieId } = props.location.state;
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: movieId }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate movie={movie}>
      <ReviewForm movie={movie} />
    </PageTemplate>
  );
};

export default withRouter(WriteReviewPage);
import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";
import Paginator from "../paginator"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "20px",
  },
  paginator: {
    margin: theme.spacing(3)
  }
}));

function MovieListPageTemplate({ movies, title, action, pageUpdate, multiPage }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const paginated = multiPage;

  const genreId = Number(genreFilter);
  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    paginated ?
      <>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Header title={title} />
          </Grid>
          <Grid item container className={classes.paginator} justify="center" padding="20">
            <Paginator pageUpdate={pageUpdate} />
          </Grid>
          <Grid item container spacing={5}>
            <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
              <FilterCard
                onUserInput={handleChange}
                titleFilter={nameFilter}
                genreFilter={genreFilter}
              />
            </Grid>
            <MovieList action={action} movies={displayedMovies}></MovieList>
          </Grid>
        </Grid>
      </>
      :
      <>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Header title={title} />
          </Grid>
          <Grid item container className={classes.paginator} justify="center" padding="20">
          </Grid>
          <Grid item container spacing={5}>
            <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
              <FilterCard
                onUserInput={handleChange}
                titleFilter={nameFilter}
                genreFilter={genreFilter}
              />
            </Grid>
            <MovieList action={action} movies={displayedMovies}></MovieList>
          </Grid>
        </Grid>
      </>
  );
}
export default MovieListPageTemplate;
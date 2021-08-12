import React from "react";
import ExploreList from "../components/exploreList/exploreList";
import { MemoryRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Explore Page/ExploreList",
  component: ExploreList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {

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
    <Grid container spacing={5}>
      <ExploreList
        explore={explore}
      />
    </Grid>
  );
};
Basic.storyName = "Default";

import React from "react";
import ExploreCard from "../components/exploreCard/exploreCard";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Explore Page/ExploreCard",
  component: ExploreCard,
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
    { directors, id: 1 },
    { actors, id: 2 },
  ];
  return (
    <ExploreCard
    explore={actors}
    />
  );
};
Basic.storyName = "Default";


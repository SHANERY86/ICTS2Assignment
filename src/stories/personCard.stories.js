import React from "react";
import PersonCard from "../components/personCard";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/PersonCard",
  component: PersonCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const person = {
    title: "David Lynch",
    img: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b6TnSpuqeOlbq7aHH9G4inmQ1v9.jpg`,
    movies: [ "Mulholland Drive", "Lost Highway", "Wild at Heart" ]
}

  return (
    <PersonCard
    person={person}
    />
  );
};
Basic.storyName = "Default";
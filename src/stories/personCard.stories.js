import React from "react";
import PersonCard from "../components/personCard";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import person from "./samplePerson";

export default {
  title: "People Page/PersonCard",
  component: PersonCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <PersonCard
    person={person}
    />
  );
};
Basic.storyName = "Default";
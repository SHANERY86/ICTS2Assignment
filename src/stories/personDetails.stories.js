import React from "react";
import PersonDetails from "../components/personDetails";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import person from "./samplePersonDetails";

export default {
    title: "People Page/PersonDetails",
    component: PersonDetails,
    decorators: [
      (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
      (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
  };
  
  export const Basic = () => {
    return (
      <PersonDetails
      person={person}
      />
    );
  };
  Basic.storyName = "Default";
import React from "react";
import AuthCard from "../components/authCard";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";


export default {
  title: "Auth Page/AuthCard",
  component: AuthCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
    return (
      <AuthCard
      />
    );
  };
  Basic.storyName = "Default";

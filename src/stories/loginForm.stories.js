import React from "react";
import LoginCard from "../components/loginCard";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";


export default {
  title: "Login Page/LoginCard",
  component: LoginCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
    return (
      <LoginCard
      />
    );
  };
  Basic.storyName = "Default";

import React, { useContext } from "react";
import SiteHeader from "../components/siteHeader";
import { MemoryRouter } from "react-router";
import { MoviesContext } from "../contexts/moviesContext"
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "App Header",
  component: SiteHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>
  ],
};

export const Basic = () => <SiteHeader />;

/*export const Exceptional = () => {
const context = useContext(MoviesContext);
context.authenticate("shanery86","secret");
return (
<SiteHeader />
)
}; */

Basic.storyName = "Logged Out"; 

// Exceptional.storyName = "Logged In";

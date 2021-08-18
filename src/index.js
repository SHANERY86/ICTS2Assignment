import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import similarMoviesPage from "./pages/similarMoviesPage";
import ExplorePage from "./pages/explorePage";
import PeoplePage from "./pages/peopleListPage"
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PersonDetailsPage from './pages/personDetailsPage';
import MoviesByActorPage from './pages/moviesByActorPage';
import LoginPage from './pages/loginPage';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <MoviesContextProvider>
      <SiteHeader /> 
      <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />       
        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />        
        <Route exact path="/" component={HomePage} />       
        <Route path="/upcoming" component={UpcomingMoviesPage} />
        <Route path="/toprated" component={TopRatedMoviesPage} />
        <Route path="/similar/:id" component={similarMoviesPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/people" component={PeoplePage} />
        <Route path="/person/:id" component={PersonDetailsPage} />
        <Route path="/moviesbyactor/:id" component={MoviesByActorPage} />  
        <Route path="/login" component={LoginPage} />  
        <Redirect from="*" to="/" />
      </Switch>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//The exercise work is sort of spread across these commits unevenly, sorry for any confusion, but its all there. 
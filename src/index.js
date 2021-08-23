import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
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
import SignupPage from './pages/signUpPage';
import AuthContextProvider from "./contexts/authContext";
require('dotenv').config();


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECTID,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
}
if(config.apiKey){
firebase.initializeApp(config);
}
const App = () => {
console.log(config.projectId)
  return ( config.apiKey ?  
    //this block will run with a valid Firebase auth API key
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <MoviesContextProvider>
      <FirebaseAuthProvider firebase={firebase} {...config}>
      <AuthContextProvider>
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
        <Route path="/signup" component={SignupPage} />       
        <Redirect from="*" to="/" />
      </Switch>
      </AuthContextProvider>
      </FirebaseAuthProvider>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider> 

    :
    //this block will run without a valid firebase auth API key.. login and signup forms will not function
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
        <Route path="/signup" component={SignupPage} />       
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
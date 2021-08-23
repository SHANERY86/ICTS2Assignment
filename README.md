# Assignment - ReactJS app.

Name: Shane Ryan

## Overview.

I am using the movies fan app. The additional objectives for me were to create more interlinking between the movies and their actors, and to allow to span multiple pages of movies
and actors. I also wanted to achieve third party authentication via Firebase. 

 + Top rated movies page
 + Similar Movies Link on movie details page
 + Clickable cast members on movie details page
 + Responsive UI on movie details page (images removed on smaller screens)
 + People page, to explore popular actors and directors with interlinking to movies
 + Login and Signup pages, linked to firebase authentication

## Setup requirements.

This app uses the TMDB database, and an API KEY from the TMDB website is required to be input to a .env file.
There is some conditional logic to ensure that this app can run without any other addons, however for the authentication to work, you will need to have a firebase account
and link the app to your API key in the .env file. Follow online instrucions for registering and retrieving config information. 

.env configuration necessary for app to function: 

REACT_APP_TMDB_KEY=YOUR KEY HERE

.env configuration necessary for Firebase authentication

REACT_APP_API_KEY=YOUR INFO HERE
REACT_APP_AUTHDOMAIN=YOUR INFO HERE
REACT_APP_PROJECTID=YOUR INFO HERE
REACT_APP_STORAGEBUCKET=YOUR INFO HERE
REACT_APP_MESSAGINGSENDERID=YOUR INFO HERE
REACT_APP_APPID=YOUR INFO HERE
REACT_APP_MEASUREMENTID=YOUR INFO HERE



## API Data Model.

..... [For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./model.png
[view]: ./view.png
[stories]: ./storybook.png
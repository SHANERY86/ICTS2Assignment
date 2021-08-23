# Assignment - ReactJS app.

Name: Shane Ryan
ID: 20011479

## Overview.

I am using the movies fan app. The additional objectives for me were to create more interlinking between the movies and their actors, and to allow to span multiple pages of movies
and actors. I also wanted to achieve third party authentication via Firebase. 

 + Top rated movies page
 + Similar Movies Link on movie details page
 + Clickable cast members on movie details page
 + Responsive UI on movie details page (images removed on smaller screens)
 + People page, to explore popular actors and directors with interlinking to movies
 + Pagination to explore many pages of movies and actors
 + Login and Signup pages, linked to firebase authentication

## Setup requirements.

This app uses the TMDB database, and an API KEY from the TMDB website is required to be input to a .env file.
There is some conditional logic to ensure that this app can run without any other addons like Firebase, however for the authentication to work, you will need to have a firebase account
and link the app to your API key in the .env file. Follow online instrucions for registering and retrieving config information. 

.env configuration necessary for app to function: 

```
REACT_APP_TMDB_KEY=YOUR KEY HERE
```
.env configuration necessary for Firebase authentication

```
REACT_APP_API_KEY=YOUR INFO HERE
REACT_APP_AUTHDOMAIN=YOUR INFO HERE
REACT_APP_PROJECTID=YOUR INFO HERE
REACT_APP_STORAGEBUCKET=YOUR INFO HERE
REACT_APP_MESSAGINGSENDERID=YOUR INFO HERE
REACT_APP_APPID=YOUR INFO HERE
REACT_APP_MEASUREMENTID=YOUR INFO HERE
```

## API Data Model.

![][model]

### Additional Endpoints
 + Top Rated Movies (https://api.themoviedb.org/3/movie/top_rated)
   ```
   {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/las0P4Dua54XrZ73VQmGUaH1z0U.jpg",
            "genre_ids": [
                16,
                28,
                18,
                878
            ],
            "id": 283566,
            "original_language": "ja",
            "original_title": "シン・エヴァンゲリオン劇場版:||",
            "overview": "In the aftermath of the Fourth Impact, stranded without their Evangelions, Shinji, Asuka, and Rei find refuge in one of the rare pockets of humanity that still exist on the ruined planet Earth. There, each of them live a life far different from their days as an Evangelion pilot. However, the danger to the world is far from over. A new impact is looming on the horizon—one that will prove to be the true end of Evangelion.",
            "popularity": 416.963,
            "poster_path": "/jDwZavHo99JtGsCyRzp4epeeBHx.jpg",
            "release_date": "2021-03-08",
            "title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
            "video": false,
            "vote_average": 8.8,
            "vote_count": 227
        },
        {
            "adult": false,
            "backdrop_path": "/gNBCvtYyGPbjPCT1k3MvJuNuXR6.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 19404,
            "original_language": "hi",
            "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
            "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
            "popularity": 15.781,
            "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
            "release_date": "1995-10-20",
            "title": "Dilwale Dulhania Le Jayenge",
            "video": false,
            "vote_average": 8.8,
            "vote_count": 3105
        },
        {
            "adult": false,
            "backdrop_path": "/9Xw0I5RV2ZqNLpul6lXKoviYg55.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 278,
            "original_language": "en",
            "original_title": "The Shawshank Redemption",
            "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            "popularity": 64.551,
            "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            "release_date": "1994-09-23",
            "title": "The Shawshank Redemption",
            "video": false,
            "vote_average": 8.7,
            "vote_count": 19499
        },
 
  
 +  Similar Movies (https://api.themoviedb.org/3/movie/${id}/similar)
 +  Get People (https://api.themoviedb.org/3/person/popular)
 ```
 {
    "page": 1,
    "results": [
        {
            "adult": false,
            "gender": 1,
            "id": 169337,
            "known_for": [
                {
                    "backdrop_path": "/3IIBf6VlwEyKAX4cN2XCM1gKdgM.jpg",
                    "first_air_date": "2005-03-27",
                    "genre_ids": [
                        18
                    ],
                    "id": 1416,
                    "media_type": "tv",
                    "name": "Grey's Anatomy",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Grey's Anatomy",
                    "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
                    "poster_path": "/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg",
                    "vote_average": 8.2,
                    "vote_count": 6567
                },
                {
                    "backdrop_path": "/hiK4qc0tZijQ9KNUnBIS1k4tdMJ.jpg",
                    "first_air_date": "2004-11-16",
                    "genre_ids": [
                        18,
                        35,
                        9648
                    ],
                    "id": 1408,
                    "media_type": "tv",
                    "name": "House",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "House",
                    "overview": "Dr. Gregory House, a drug-addicted, unconventional, misanthropic medical genius, leads a team of diagnosticians at the fictional Princeton–Plainsboro Teaching Hospital in New Jersey.",
                    "poster_path": "/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
                    "vote_average": 8.6,
                    "vote_count": 3867
                },
                {
                    "adult": false,
                    "backdrop_path": "/sNsANx5OxYifdcW7UXbyL9GoMCO.jpg",
                    "genre_ids": [
                        35,
                        10749
                    ],
                    "id": 32856,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Valentine's Day",
                    "overview": "More than a dozen Angelenos navigate Valentine's Day from early morning until midnight. Three couples awake together, but each relationship will sputter. A grade-school boy wants flowers for his first true love. Two high school seniors plan first-time sex at noon. A TV sports reporter gets the assignment to find romance in LA. A star quarterback contemplates his future. Two strangers meet on a plane. Grandparents, together for years, face a crisis. An 'I Hate Valentine's Day' dinner beckons the lonely and the lied to.",
                    "poster_path": "/qOTcfD2DdnOTmhH0r1TOE09VvNh.jpg",
                    "release_date": "2010-02-10",
                    "title": "Valentine's Day",
                    "video": false,
                    "vote_average": 5.9,
                    "vote_count": 2530
                }
            ],
            "known_for_department": "Acting",
            "name": "Katherine LaNasa",
            "popularity": 364.716,
            "profile_path": "/a1T5Smn7sCEtV8NHvTa5WaxgOML.jpg"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 10859,
            "known_for": [
                {
                    "adult": false,
                    "backdrop_path": "/en971MEXui9diirXlogOrPKmsEn.jpg",
                    "genre_ids": [
                        28,
                        12,
                        35
                    ],
                    "id": 293660,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Deadpool",
                    "overview": "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
                    "poster_path": "/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
                    "release_date": "2016-02-09",
                    "title": "Deadpool",
                    "video": false,
                    "vote_average": 7.6,
                    "vote_count": 25348
                },
                {
                    "adult": false,
                    "backdrop_path": "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
                    "genre_ids": [
                        28,
                        35,
                        12
                    ],
                    "id": 383498,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Deadpool 2",
                    "overview": "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
                    "poster_path": "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
                    "release_date": "2018-05-10",
                    "title": "Deadpool 2",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 13593
                },
```
+ Get Movies Starring Person (https://api.themoviedb.org/3/discover/movie?api_key=apikey&language=en-US&with_cast=${id}`)
+ Get Movie cast (https://api.themoviedb.org/3/movie/${id}/credits)

## App Design.

### Component catalogue.

See new storybook elements..

![][stories]

### UI Design.

+ TOP RATED VIEW

![][toprated]
>Shows movies with highest ratings in ascending order - paginated to view multiple pages


+ SIMILAR TO MOVIE VIEW
![][similar]
>Shows movies that are similar to another movie, clickable in new movie details page

+ PEOPLE VIEW
![][people]
>Shows list of popular people in movies, with clickable links to their bios and movies

+ PERSON VIEW
![][person]
>Shows a persons bio, with a link to see movies starring this person

### Routing.

+ GET /toprated - topRatedMoviesPage - displays top rated movies
+ GET /movies/favourites - favoriteMoviesPage - (protected) this route has been made private.
+ GET /similar:id - similarMoviesPage - displays similar movies
+ GET /people (protected) - peopleListPage -  detail view of a particular blog and its comments.
+ GET /moviesbyactor:id - Returns a list of movies by a particular actor
+ GET /login - loginPage - returns login page
+ GET /signup - signUpPage - returns sign up page

## Independent learning (If relevant).

+ Firebase Authentication- see index.js, authContext.js, siteHeader.js
+ Pagination - see moviesContext.js, components/paginator, templateMovieListPage, templatePeopleListPage

[model]: ./model.png
[view]: ./view.png
[stories]: ./storybook.jpg
[toprated]: ./toprated.png
[similar]: ./similar.png
[people]: ./People.png
[person]: ./person.png
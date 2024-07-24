import React, { useState } from "react";
import loginContext from "./loginContext";

const LoginState = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);

  const [DirectorPreference, setDirectorPreference] = useState([]);
  const [GenrePreference, setGenrePreference] = useState([]);
  const [ActorPreference, setActorPreference] = useState([]);

  const [movieHub, setMovieHub] = useState([])

  const [movieDetail, setMovieDetail] = useState({
    "Unnamed: 0": 75,
    "genres": "Adventure, Action",
    "movie_id": 9804,
    "keywords": "ocean, tattoo, mutant, water, dystopia, doomsday",
    "overview": "In a futuristic world where the polar ice caps have melted and made Earth a liquid planet, a beautiful barmaid rescues a mutant seafarer from a floating island prison. They escape, along with her young charge, Enola, and sail off aboard his ship. But the trio soon becomes the target of a menacing pirate who covets the map to 'Dryland' – which is tattooed on Enola's back.",
    "title_x": "Waterworld",
    "cast": "KevinCostner, ChaimGirafi, RickAviles",
    "crew": "KevinReynolds",
    "popularity": 44.640292,
    "original_language": "en",
    "release_date": "1995-07-28",
    "vote_average": 5.9,
    "vote_count": 992,
    "movie_name": "['Waterworld']",
    "poster": "https://image.tmdb.org/t/p/w500//f4Q6BKm1lv9u5xoffbIIwrOYf6z.jpg"
  })

  const [loggedInEmail, setLoggedInEmail] = useState("email");

  const [movieDetailName, setMovieDetailName] = useState({})

  const [gamificationList, setGamificationList] = useState({
    DirectorList: [
      "Pete Docter",
      "Shimako Sato",
      "Maggie Greenwald",
      "Cyrus Voris",
      "Shana Larsen",
      "Joe Pytka",
      "Mike Hodges",
      "Brian Percival",
      "Cory Goodman",
      "Phillip Noyce"
    ],
    GenreList: [
      "Romance",
      "Thriller",
      "Comedy",
      "Horror",
      "War",
      "Fantasy",
      "Mystery",
      "Drama",
      "Crime",
      "Science Fiction"
    ],
    ActorList: [
      "Rolanda Watts",
      "Jackie Burroughs",
      "Jon Foster",
      "Dave Koenig",
      "Oana Rusu",
      "Barry Corbin",
      "Christian Clavier",
      "Denzel Whitaker",
      "William Condos",
      "Ulrich Thomsen"
    ]
  });

  return (
    <loginContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        darkMode,
        setDarkMode,
        progress,
        setProgress,
        gamificationList,
        setGamificationList,
        DirectorPreference,
        setDirectorPreference,
        GenrePreference,
        setGenrePreference,
        ActorPreference,
        setActorPreference,
        loggedInEmail,
        setLoggedInEmail,
        movieDetail,
        setMovieDetail,
        movieHub,
        setMovieHub,
        movieDetailName,
        setMovieDetailName
      }}
    >
      {props.children}  
    </loginContext.Provider>
  );
};

export default LoginState;

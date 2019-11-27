const movies = [
  {
    id: 1,
    title: "Joker",
    genre: ["Crime", "Drama", "Thriller"],
    poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    duration: "01:58:31",
    rating: 4.4,
    oscars: 0,
    actors: [
      {
        role: "Arthur Fleck",
        name: "Joaquin Phoenix"
      },
      {
        role: "Murray Franklin",
        name: "Robert De Niro"
      },
      {
        role: "Sophie Dumond",
        name: "Zazie Beetz"
      },
    ]
  },
  {
    id: 2,
    title: "Frozen 2",
    genre: ["Animation", "Adventure", "Comedy"],
    poster: "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_SX675_AL_.jpg",
    duration: "01:26:52",
    rating: 3.6,
    oscars: 2,
    actors: [
      {
        role: "Anna",
        name: "Kristen Bell"
      },
      {
        role: "Elsa",
        name: "Idina Menzel"
      },
      {
        role: "Olaf",
        name: "Josh Gad"
      },
    ]
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    genre: ["Action", "Adventure", "Drama"],
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    duration: "02:34:12",
    rating: 4.2,
    oscars: 1,
    actors: [
      {
        role: "Tony Stark / Iron Man",
        name: "Robert Downey Jr."
      },
      {
        role: "Steve Rogers / Captain America",
        name: "Chris Evans"
      },
      {
        role: "Bruce Banner / Hulk",
        name: "Mark Ruffalo"
      },
    ]
  }
]

export default movies;
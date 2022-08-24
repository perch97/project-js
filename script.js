personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = +prompt(
      "How many movies have you watched already?",
      ""
    );
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "How many movies have you watched already?",
        ""
      );
    }
  },
  rememberMyFilms: function () {
    for (let i = 1; i <= numberOfFilms; i++) {
      const last_movie = prompt("What last movie have you watched?", "").trim();
      grade = prompt("How would you evaluate this movie?", "");
      if (
        last_movie != null &&
        grade != null &&
        last_movie != "" &&
        grade != "" &&
        last_movie.length < 50
      ) {
        personalMovieDB.movies[last_movie] = grade;
        console.log("done!");
      } else {
        console.log("error!");
        i--;
      }
    }
  },

  detectPersonallevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Not too many movies watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("You are classic viewer");
    } else {
      console.log("You are cinephile");
    }
  },

  showmyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`What is your favourite genres ${i}?`, "");
      if (genre === "" || genre == null) {
        console.log("Incorrect input");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach(function(item,i){console.log(`A favourite genre ${i} is ${item}`);});
    },

  toggleVisibleMyDB: function (privat) {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};


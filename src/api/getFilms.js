const API_KEY = "8b496016-7bd2-4c9b-8893-617e3cd3d1ae";
export const getBestFilms = (cb) => {
  fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1",
    {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => cb(json))
    .catch((err) => console.log(err));
};
export const getPopularFilms = (cb) => {
  fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",
    {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => cb(json))
    .catch((err) => console.log(err));
};
export const getAwaitFilms = (cb) => {
  fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1",
    {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => cb(json))
    .catch((err) => console.log(err));
};

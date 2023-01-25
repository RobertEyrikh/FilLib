//const API_KEY = "8b496016-7bd2-4c9b-8893-617e3cd3d1ae";
const API_KEY = "5e8ad341-60f2-4625-abbe-cba9ff4cc755";
const CATEGORIES = {
  best: "TOP_250_BEST_FILMS",
  popular: "TOP_100_POPULAR_FILMS",
  await: "TOP_AWAIT_FILMS",
};
export const getFilmsFromApi = (category, page, cb) => {
  fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${CATEGORIES[category]}&page=${page}`,
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
export const getCurrentFilmFromApi = (id, cb) => {
  fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => cb(json))
    .catch((err) => console.log(err));
};
export const getFilmsByKeyword = (keyword, page, cb) => {
  fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=${page}`,
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

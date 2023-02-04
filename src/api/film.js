import store from "@/store";

const URL = "http://localhost:5000";

export const addFilmToViewed = (film, cb) => {
  fetch(`${URL}/addFilmToViewed`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${store.state.user.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(film),
  })
    .then((res) => res.json())
    .then((json) => cb(json))
    .catch((err) => console.log(err));
};
export const deleteFilmFromViewed = (filmId, cb) => {
  fetch(`${URL}/deleteFilmFromViewed`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${store.state.user.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filmId),
  })
    .then((res) => res.json())
    .then((json) => cb(json))
    .catch((err) => console.log(err));
};

export const getFilmById = (id, cb) => {
  fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "8b496016-7bd2-4c9b-8893-617e3cd3d1ae",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => cb(json))
    .catch((err) => console.log(err));
};

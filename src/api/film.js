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

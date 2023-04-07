const URL = "http://fillib.eyrikhproductions.ru/api";

export const getAuthCurrentUser = (token, cb) => {
  fetch(`${URL}/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => cb(json))
    .catch((err) => console.log(err));
};

export const authByEmail = (user, cb) => {
  fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((json) => cb(json));
};

export const registrationByEmail = (user, cb) => {
  fetch(`${URL}/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((json) => cb(json));
};

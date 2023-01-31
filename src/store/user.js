import {
  getAuthCurrentUser,
  registrationByEmail,
  authByEmail,
} from "@/api/user";

export default {
  state: {
    token: "",
    isAuth: null,
    regResponse: {},
    authResponse: "",
    user: {},
  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      state.token = payload;
      localStorage.setItem("token", JSON.stringify(payload));
    },
    DELETE_TOKEN: (state) => {
      state.token = "";
    },
    SET_TOKEN_FROM_LOCALSTORAGE: (state) => {
      let token = localStorage.getItem("token");
      if (token && token != "undefined") {
        state.token = JSON.parse(token);
      }
    },
    SET_AUTH_TRUE: (state) => {
      state.isAuth = true;
    },
    SET_AUTH_FALSE: (state) => {
      state.isAuth = false;
    },
    DELETE_TOKEN_FROM_LOCALSTORAGE: () => {
      localStorage.removeItem("token");
    },
    SET_REGISTRATION_RESPONSE: (state, payload) => {
      state.regResponse = payload;
    },
    DELETE_REGISTRATION_RESPONSE: (state) => {
      state.regResponse = {};
    },
    SET_AUTH_RESPONSE: (state, payload) => {
      state.authResponse = payload;
    },
    DELETE_AUTH_RESPONSE: (state) => {
      state.authResponse = "";
    },
    SET_USER: (state, payload) => {
      state.user = payload;
    },
    DELETE_USER: (state) => {
      state.user = {};
    },
  },
  actions: {
    registration({ commit }, payload) {
      registrationByEmail(payload, (response) => {
        console.log(response);
        commit("SET_REGISTRATION_RESPONSE", {
          isSuccess: response.errors ? false : true,
          message: response.message,
        });
        setTimeout(() => {
          commit("DELETE_REGISTRATION_RESPONSE");
        }, "3000");
      });
    },
    authorizationByEmail({ commit }, payload) {
      authByEmail(payload, (response) => {
        let token = response.token;
        if (token) {
          commit("SET_TOKEN", token);
        } else {
          commit("SET_AUTH_RESPONSE", response.message);
          setTimeout(() => {
            commit("DELETE_AUTH_RESPONSE");
          }, "3000");
        }
      });
    },
    getAuthCurrentUser({ state, commit }) {
      if (state.token == "") {
        commit("SET_AUTH_FALSE");
        commit("DELETE_USER");
        commit("DELETE_TOKEN_FROM_LOCALSTORAGE");
        return;
      }
      getAuthCurrentUser(state.token, (response) => {
        if (response.email) {
          let user = {
            email: response.email,
            username: response.username,
          };
          commit("SET_USER", user);
          commit("SET_AUTH_TRUE");
        } else {
          commit("SET_AUTH_FALSE");
          commit("DELETE_USER");
          commit("DELETE_TOKEN_FROM_LOCALSTORAGE");
        }
      });
    },
    logout({ commit }) {
      commit("DELETE_TOKEN");
      commit("DELETE_TOKEN_FROM_LOCALSTORAGE");
      commit("SET_AUTH_FALSE");
      commit("DELETE_USER");
    },
  },
  getters: {
    regResponse: (state) => {
      return state.regResponse;
    },
  },
};

import {
  getAuthCurrentUser,
  registrationByEmail,
  authByEmail,
} from "@/api/user";

export default {
  state: {
    token: "",
    isAuth: null,
    regResponse: "",
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
  },
  actions: {
    registration({ commit }, payload) {
      registrationByEmail(payload, (response) => {
        commit("SET_REGISTRATION_RESPONSE", response.message);
      });
    },
    authorizationByEmail({ commit }, payload) {
      authByEmail(payload, (response) => {
        let token = response.token;
        if (token) {
          commit("SET_TOKEN", token);
        }
      });
    },
    getAuthCurrentUser({ state, commit }) {
      if (state.token == "") {
        commit("SET_AUTH_FALSE");
        commit("DELETE_TOKEN_FROM_LOCALSTORAGE");
        return;
      }
      getAuthCurrentUser(state.token, (response) => {
        if (response.email) {
          commit("SET_AUTH_TRUE");
        } else {
          commit("SET_AUTH_FALSE");
          commit("DELETE_TOKEN_FROM_LOCALSTORAGE");
        }
      });
    },
    logout({ commit }) {
      commit("DELETE_TOKEN");
      commit("DELETE_TOKEN_FROM_LOCALSTORAGE");
      commit("SET_AUTH_FALSE");
    },
  },
};

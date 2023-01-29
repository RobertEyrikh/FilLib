import { authByEmail } from "@/api/user";
import { getAuthCurrentUser } from "@/api/user";

export default {
  state: {
    token: "",
    isAuth: false,
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
      if (token) {
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
  },
  actions: {
    authorizationByEmail({ commit }, payload) {
      authByEmail(payload, (tokenObj) => {
        let token = tokenObj.token;
        commit("SET_TOKEN", token);
      });
    },
    getAuthCurrentUser({ state, commit }) {
      if (state.token == "") {
        return;
      }
      getAuthCurrentUser(state.token, (response) => {
        if (response.email) {
          commit("SET_AUTH_TRUE");
        } else {
          commit("SET_AUTH_FALSE");
        }
      });
    },
    logout({ commit }) {
      commit("DELETE_TOKEN");
      commit("DELETE_TOKEN_FROM_LOCALSTORAGE");
      commit("SET_AUTH_FALSE");
    },
  },
  // getters: {
  //   isAuth: (state) => {
  //     return state.isAuth;
  //   },
  // },
};

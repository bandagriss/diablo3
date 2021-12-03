import * as oauth from "@/api/oauth";

export default {
  namespaced: true,
  state: {
    accessToken: null,
  },
  mutations: {
    SET_ACCESS_TOKEN(state, payload) {
      state.accessToken = payload;
    },
  },
  actions: {
    getToken({ commit }) {
      commit("loading/SET_LOADING", true, { root: true });
      // Paso 1
      oauth
        .getToken()
        .then(({ data }) => {
          // Paso 2
          commit("SET_ACCESS_TOKEN", data.access_token);
        })
        .catch((err) => {
          commit("SET_ACCESS_TOKEN", null);
          console.log("Error OAuth:", err);
        })
        .finally(() => {
          commit("loading/SET_LOADING", false, { root: true });
        });
    },
  },
};

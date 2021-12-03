import Vue from "vue";
import Vuex from "vuex";

import oauth from "./modules/oauth";
import loading from "./modules/loading";
import error from "./modules/error";

Vue.use(Vuex);

export default new Vuex.Store({
  // Aqui registramos todos los modulos
  modules: {
    oauth,
    loading,
    error,
  },
});

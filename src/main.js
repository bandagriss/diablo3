import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/main.styl";

// BootstrapVue
import "./plugins/bootstrapVue";

// Vue Font-Awesome
import "./plugins/fontAwesome";

// Custom directives
import "./directives";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    // funcion para inicio
    init() {
      store.dispatch("oauth/getToken", null, { root: true });
    },
  },
  // Hook created
  created() {
    this.init();
  },
  render: (h) => h(App),
}).$mount("#app");

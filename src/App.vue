<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading />
    </LoadLayout>

    <MainLayout v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoadLayout from "./layouts/LoadLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import BaseLoading from "@/components/BaseLoading";

export default {
  name: "App",
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading,
  },
  computed: {
    // Uso: mapState*moduleName, {state}
    ...mapState("loading", {
      isLoading: "isLoading",
    }),
  },
};
</script>

<style lang="stylus">
#app
  padding 60px 0
  font-font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #ffffff
  background-image linear-gradient(#121f3d, #12404A)
</style>

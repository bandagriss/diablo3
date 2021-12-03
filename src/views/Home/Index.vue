<template>
  <div class="home-view">
    <HomeTitle />

    <MainForm />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitle from "./HomeTitle.vue";
import MainForm from "./HomeForm.vue";

export default {
  name: "Home",
  components: {
    HomeTitle,
    MainForm,
  },
};
</script>

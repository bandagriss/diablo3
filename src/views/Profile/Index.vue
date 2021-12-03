<template>
  <div class="profile-view">
    <BaseLoading v-if="isLoading" />

    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData" />
      <ArtisansBlock :artisans-data="artisansData" />
    </template>
  </div>
</template>

<script>
import { getApiAccount } from "@/api/search";
import setError from "@/mixins/setError";
import BaseLoading from "@/components/BaseLoading";
import MainBlock from "./MainBlock/Index";
import ArtisansBlock from "./ArtisansBlock/Index.vue";

export default {
  name: "ProfileView",
  mixins: [setError],
  components: { BaseLoading, MainBlock, ArtisansBlock },
  data() {
    return {
      isLoading: false,
      profileData: null,
    };
  },
  computed: {
    artisansData() {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore,
      };
    },
  },
  created() {
    this.isLoading = true;
    this.fetchData();
  },
  methods: {
    fetchData() {
      const { region, battleTag: account } = this.$route.params;
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data;
        })
        .catch((err) => {
          const errObj = {
            routeParams: this.$route.params,
            message: err.message,
          };
          if (err.response) {
            errObj.data = err.response.data;
            errObj.status = err.response.status;
          }

          this.setApiErr(errObj);
          this.$router.push({ name: "Error" });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

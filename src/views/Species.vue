<template>
  <div class="species pageContainer">
    <h1>Star Wars Species</h1>

    <Loader v-if="!resource.length" />

    <SingleSpecies :species="r" :key="r.name" v-for="r in resource" />

    <Pagination
      v-if="resource.length"
      @prev-click="this.setData(pageData.prevPage)"
      @next-click="this.setData(pageData.nextPage)"
      :page="pageData.page"
      :totalPages="pageData.totalPages"
    />

    <toTop v-if="resource.length" />
  </div>
</template>

<script>
import SingleSpecies from "../components/SingleSpecies.vue";
import ToTop from "../components/ToTop.vue";
import Loader from "../components/Loader/Loader.vue";
import Pagination from "../components/Pagination.vue";

// UTILS
import { fetchData } from "../utils";

export default {
  name: "Species",

  data() {
    return {
      pageData: {
        perPage: null,
        page: 1,
        nextPage: "",
        prevPage: "",
        totalPages: 0
      },
      resource: [],
      isLoading: false
    };
  },

  components: {
    SingleSpecies,
    ToTop,
    Loader,
    Pagination
  },

  methods: {
    async setData(reqPage = 1) {
      this.isLoading = true;

      const [
        _perPage,
        _page,
        _totalPages,
        _nextPage,
        _prevPage,
        _resource
      ] = await fetchData(reqPage, this.pageData, "species");

      this.pageData.perPage = _perPage;
      this.pageData.page = _page;
      this.pageData.totalPages = _totalPages;
      this.pageData.nextPage = _nextPage;
      this.pageData.prevPage = _prevPage;
      this.resource = _resource;

      this.isLoading = false;
    }
  },

  created() {
    this.setData();
  }
};
</script>

<style lang="scss" scoped>
.species {
  background-image: url("/img/swapi_bg3.png");
}
</style>

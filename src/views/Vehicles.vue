<template>
  <div class="vehicles pageContainer">
    <h1>Vehicles</h1>

    <Loader v-if="!resource.length" />

    <Vehicle :vehicle="r" :key="r.name" v-for="r in resource" />

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
import Vehicle from "../components/Vehicle.vue";
import ToTop from "../components/ToTop.vue";
import Loader from "../components/Loader/Loader.vue";
import Pagination from "../components/Pagination.vue";

// UTILS
import { fetchData } from "../utils";

export default {
  name: "Vehicles",

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
    Vehicle,
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
      ] = await fetchData(reqPage, this.pageData, `vehicles_${reqPage}`);

      this.pageData.perPage = _perPage;
      this.pageData.page = _page;
      this.pageData.totalPages = _totalPages;
      this.pageData.nextPage = _nextPage;
      this.pageData.prevPage = _prevPage;
      this.resource = _resource;

      this.isLoading = false;
    }
  },

  emits: ["close-mobile-nav"],

  created() {
    this.setData();
  },
  mounted() {
    this.$emit("close-mobile-nav");
  }
};
</script>

<style lang="scss" scoped>
.vehicles {
  background-image: url("/img/swapi_bg7.png");
}
</style>

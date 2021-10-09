<template>
  <div class="planets pageContainer">
    <h1>Star Wars Planets</h1>

    <Loader v-if="!resource.length" />

    <Planet :planet="r" :key="r.name" v-for="r in resource" />

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
import Planet from "../components/Planet.vue";
import ToTop from "../components/ToTop.vue";
import Loader from "../components/Loader/Loader.vue";
import Pagination from "../components/Pagination.vue";

// UTILS
import { fetchData } from "../utils";

export default {
  name: "Planets",

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
    Planet,
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
      ] = await fetchData(reqPage, this.pageData, "planets");

      this.pageData.perPage = _perPage;
      this.pageData.page = _page;
      this.pageData.totalPages = _totalPages;
      this.pageData.nextPage = _nextPage;
      this.pageData.prevPage = _prevPage;
      this.resource = _resource;

      this.isLoading = false;
    }

    // async getPlanets(reqPage = "") {
    //   if (this.isLoading || reqPage === null) return;

    //   this.isLoading = true;

    //   const res = await fetch(
    //     `${process.env.VUE_APP_API}/planets/?page=${reqPage}`
    //   );

    //   const data = await res.json();

    //   this.planets = data.results;

    //   this.perPage = this.perPage ? this.perPage : data.results.length;

    //   this.page = reqPage ? parseInt(reqPage) : 1;

    //   // calc total pages
    //   this.totalPages = Math.floor((data.count - 1) / this.perPage + 1);

    //   // page calculation
    //   this.nextPage = data.next
    //     ? data.next
    //         .split("/")
    //         .splice(-1)[0]
    //         .slice(-1)
    //     : null;

    //   this.prevPage = data.previous
    //     ? data.previous
    //         .split("/")
    //         .splice(-1)[0]
    //         .slice(-1)
    //     : null;

    //   this.isLoading = false;
    // }
  },

  created() {
    this.setData();
  }
};
</script>

<style lang="scss" scoped>
.planets {
  background-image: url("/img/swapi_bg3.png");
}
</style>

<template>
  <div class="planets pageContainer">
    <h1>Star Wars Planets</h1>

    <Loader v-if="!planets.length" />

    <Planet :planet="planet" :key="planet.name" v-for="planet in planets" />

    <Pagination
      v-if="planets.length"
      @prev-click="this.getPlanets(prevPage)"
      @next-click="this.getPlanets(nextPage)"
      :page="page"
      :totalPages="totalPages"
    />

    <toTop v-if="planets.length" />
  </div>
</template>

<script>
import Planet from "../components/Planet.vue";
import ToTop from "../components/ToTop.vue";
import Loader from "../components/Loader/Loader.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Planets",

  data() {
    return {
      planets: [],
      perPage: null,
      page: 1,
      nextPage: "",
      prevPage: "",
      totalPages: 0,
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
    async getPlanets(reqPage = "") {
      if (this.isLoading || reqPage === null) return;

      this.isLoading = true;

      const res = await fetch(
        `${process.env.VUE_APP_API}/planets/?page=${reqPage}`
      );

      const data = await res.json();

      this.planets = data.results;

      this.perPage = this.perPage ? this.perPage : data.results.length;

      this.page = reqPage ? parseInt(reqPage) : 1;

      // calc total pages
      this.totalPages = Math.floor((data.count - 1) / this.perPage + 1);

      // page calculation
      this.nextPage = data.next
        ? data.next
            .split("/")
            .splice(-1)[0]
            .slice(-1)
        : null;

      this.prevPage = data.previous
        ? data.previous
            .split("/")
            .splice(-1)[0]
            .slice(-1)
        : null;

      this.isLoading = false;
    }
  },

  created() {
    this.getPlanets();
  }
};
</script>

<style lang="scss" scoped>
.planets {
  background-image: url("/img/swapi_bg3.png");
}
</style>

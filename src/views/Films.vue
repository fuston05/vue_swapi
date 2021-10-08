<template>
  <div class="films pageContainer">
    <h1>Star Wars Films</h1>

    <Loader v-if="!films.length" />

    <Film :film="film" :key="film.name" v-for="film in films" />

    <Pagination
      v-if="films.length"
      @prev-click="this.getFilms(prevPage)"
      @next-click="this.getFilms(nextPage)"
      :page="page"
      :totalPages="totalPages"
    />
    <toTop v-if="films.length" />
  </div>
</template>

<script>
import Film from "../components/Film.vue";
import ToTop from "../components/ToTop.vue";
import Loader from "../components/Loader/Loader.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Films",

  data() {
    return {
      films: [],
      perPage: null,
      page: 1,
      nextPage: "",
      prevPage: "",
      totalPages: 0,
      isLoading: false
    };
  },

  components: {
    Film,
    ToTop,
    Loader,
    Pagination
  },

  methods: {
    async getFilms(reqPage = "") {
      if (this.isLoading || reqPage === null) return;

      this.isLoading = true;

      const res = await fetch(
        `${process.env.VUE_APP_API}/films/?page=${reqPage}`
      );

      const data = await res.json();

      this.films = data.results;

      this.perPage = this.perPage ? this.perPage : data.results.length;

      this.page = reqPage ? parseInt(reqPage) : 1;

      console.log("data: ", data.results);

      // calc total pages
      this.totalPages = Math.floor((data.count - 1) / this.perPage + 1);

      // set up for page calculation
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
    this.getFilms();
  }
};
</script>

<style lang="scss" scoped>
.films {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: url("/img/swapi_bg3.png");
  background-size: contain;
  background-position: top left;

  h1 {
    color: #ffe81a;
  }
}
</style>

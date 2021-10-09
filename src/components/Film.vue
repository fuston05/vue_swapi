<template>
  <div class="film card">
    <ul class="details">
      <li class="name">
        {{ film.title }}
      </li>
      <li><b>Release Date:</b> {{ film.release_date }}</li>
      <li><b>Director:</b> {{ film.director }}</li>
      <li><b>Producer:</b> {{ film.producer }}</li>
      <li><b>Episode:</b> {{ film.episode_id }}</li>
      <li><b>Opening Crawl:</b> {{ film.opening_crawl }}</li>
    </ul>

    <Loader v-if="isLoading" />

    <ul v-if="!isLoading && characters.length">
      <li class="heading"><b>Characters:</b></li>
      <li class="left_indent" :key="character" v-for="character in characters">
        {{ character }}
      </li>
    </ul>

    <ul v-if="!isLoading && planets.length">
      <li class="heading"><b>Planets:</b></li>
      <li class="left_indent" :key="planet" v-for="planet in planets">
        {{ planet }}
      </li>
    </ul>

    <ul v-if="!isLoading && species.length">
      <li class="heading"><b>Species:</b></li>
      <li class="left_indent" :key="s" v-for="s in species">
        {{ s }}
      </li>
    </ul>

    <ul v-if="!isLoading && starships.length">
      <li class="heading"><b>starships:</b></li>
      <li class="left_indent" :key="ship" v-for="ship in starships">
        {{ ship }}
      </li>
    </ul>
  </div>
</template>

<script>
import Loader from "../components/Loader/Loader.vue";

// UTILS
import { getData } from "../utils";

export default {
  name: "Film",
  props: {
    film: {
      type: Object
    }
  },

  components: {
    Loader
  },

  data() {
    return {
      isLoading: false,
      characters: [],
      planets: [],
      species: [],
      starships: []
    };
  },
  methods: {
    async getfilmData() {
      this.isLoading = true;

      this.characters = await getData(this.film.characters);
      this.planets = await getData(this.film.planets);
      this.species = await getData(this.film.species);

      this.isLoading = false;
    }
  },
  created() {
    this.getfilmData();
  }
};
</script>

<style scoped lang="scss">
#app .film {
  width: 80%;
}
</style>

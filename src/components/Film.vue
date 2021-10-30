<template>
  <div class="film card">
    <ul class="mainContent">
      <li class="title">
        {{ film.title }}
      </li>
      <li>
        <span class="itemHeading">Release Date:</span> {{ film.release_date }}
      </li>
      <li><span class="itemHeading">Director:</span> {{ film.director }}</li>
      <li><span class="itemHeading">Producer:</span> {{ film.producer }}</li>
      <li><span class="itemHeading">Episode:</span> {{ film.episode_id }}</li>
      <li>
        <span class="itemHeading">Opening Crawl:</span> {{ film.opening_crawl }}
      </li>
    </ul>

    <Loader v-if="isLoading" />

    <div v-if="!isLoading && characters.length">
      <div class="itemHeading">
        <span>Characters:</span>
      </div>

      <ul class="hideContent characters">
        <li
          class="left_indent"
          :key="character"
          v-for="character in characters"
        >
          {{ character }}
        </li>
      </ul>
    </div>

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
      <li class="heading"><b>Starships:</b></li>
      <li class="left_indent" :key="ship" v-for="ship in starships">
        {{ ship }}
      </li>
    </ul>

    <ul v-if="!isLoading && vehicles.length">
      <li class="heading"><b>Vehicles:</b></li>
      <li class="left_indent" :key="vehicle" v-for="vehicle in vehicles">
        {{ vehicle }}
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

  props: ["film"],

  components: {
    Loader
  },

  data() {
    return {
      isLoading: false,
      characters: [],
      planets: [],
      species: [],
      starships: [],
      vehicles: []
    };
  },

  methods: {
    async getfilmData() {
      this.isLoading = true;

      this.characters = await getData(this.film.characters, "film_characters");
      this.planets = await getData(this.film.planets, "film_planets");
      this.species = await getData(this.film.species, "film_species");
      this.starships = await getData(this.film.starships, "film_starships");
      this.vehicles = await getData(this.film.vehicles, "film_vehicles");

      this.isLoading = false;
    }
  },

  created() {
    this.getfilmData();
  }
};
</script>

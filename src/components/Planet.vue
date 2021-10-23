<template>
  <div class="planet card">
    <ul class="details">
      <li class="name">
        {{ planet.name }}
      </li>
      <li>
        <b>Diameter:</b>
        {{ (planet.diameter * 1000).toLocaleString("en-US") }} m
      </li>
      <li><b>Gravity:</b> {{ planet.gravity }}</li>
      <li><b>Orbital Period:</b> {{ planet.orbital_period }} days</li>
      <li><b>Rotation Period:</b> {{ planet.rotation_period }} hours</li>
      <li>
        <b>Population:</b>
        {{ parseInt(planet.population).toLocaleString("en-US") }}
      </li>
      <li><b>Climate:</b> {{ planet.climate }}</li>
      <li><b>Surface Water:</b> {{ planet.surface_water }}&#37;</li>
      <li><b>Terrain:</b> {{ planet.terrain }}</li>
    </ul>

    <Loader v-if="isLoading" />

    <ul v-if="!isLoading && films.length">
      <li class="heading"><b>Films:</b></li>
      <li class="left_indent" :key="film" v-for="film in films">
        {{ film }}
      </li>
    </ul>

    <ul v-if="!isLoading && residents.length">
      <li class="heading"><b>Residents:</b></li>
      <li class="left_indent" :key="resident" v-for="resident in residents">
        {{ resident }}
      </li>
    </ul>
  </div>
</template>

<script>
import Loader from "../components/Loader/Loader.vue";

// UTILS
import { getData } from "../utils";

export default {
  name: "Planet",
  props: {
    planet: {
      type: Object
    }
  },

  components: {
    Loader
  },

  data() {
    return {
      isLoading: false,
      films: [],
      residents: []
    };
  },

  methods: {
    async getPlanetData() {
      this.isLoading = true;

      this.films = await getData(this.planet.films);
      this.residents = await getData(this.planet.residents);

      this.isLoading = false;
    }
  },
  created() {
    this.getPlanetData();
  }
};
</script>

<template>
  <div class="planet card">
    <ul class="mainContent">
      <li class="title">
        {{ planet.name }}
      </li>
      <li>
        <b>Diameter:</b>
        {{
          planet.diameter === "unknown"
            ? "unknown"
            : (planet.diameter * 1000).toLocaleString("en-US")
        }}
        {{ planet.diameter > 0 ? " m" : "" }}
      </li>
      <li><b>Gravity:</b> {{ planet.gravity }}</li>
      <li>
        <b>Orbital Period:</b>
        {{
          planet.orbital_period === "unknown"
            ? "unknown"
            : planet.orbital_period
        }}
        {{ planet.orbital_period > 0 ? " days" : "" }}
      </li>
      <li>
        <b>Rotation Period:</b>
        {{
          planet.rotation_period === "unknown"
            ? "unknown"
            : planet.rotation_period
        }}
        {{ planet.rotation_period > 0 ? " hours" : "" }}
      </li>
      <li>
        <b>Population:</b>
        {{
          planet.population === "unknown"
            ? "unknown"
            : parseInt(planet.population).toLocaleString("en-US")
        }}
      </li>
      <li><b>Climate:</b> {{ planet.climate }}</li>
      <li>
        <b>Surface Water:</b>
        {{
          planet.surface_water === "unknown"
            ? "unknown"
            : planet.surface_water + "%"
        }}
      </li>
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

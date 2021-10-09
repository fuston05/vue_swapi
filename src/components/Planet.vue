<template>
  <div class="planet card">
    <ul class="details">
      <li class="name">
        {{ planet.name }}
      </li>
      <li><b>Diameter:</b> {{ planet.diameter }}</li>
      <li><b>Gravity:</b> {{ planet.gravity }}</li>
      <li><b>Orbital Period:</b> {{ planet.orbital_period }}</li>
      <li><b>Rotation Period:</b> {{ planet.rotation_period }}</li>
      <li><b>Population:</b> {{ planet.population }}</li>
      <li><b>Climate:</b> {{ planet.climate }}</li>
      <li><b>Surface Water:</b> {{ planet.surface_water }}</li>
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
    async getFilms(filmsArr) {
      let numFilms = filmsArr.length;

      for (let i = 0; i < numFilms; i++) {
        let filmRes = await fetch(filmsArr[i]);

        let filmData = await filmRes.json();
        this.films.push(filmData.title);
      }
    },

    async getResidents(residentsArr) {
      let numResidents = residentsArr.length;

      for (let i = 0; i < numResidents; i++) {
        let residentsRes = await fetch(residentsArr[i]);

        let residentsData = await residentsRes.json();
        this.residents.push(residentsData.name);
      }
    },

    async getPlanetData(filmsArr, residentsArr) {
      this.isLoading = true;

      await this.getFilms(filmsArr);
      await this.getResidents(residentsArr);

      this.isLoading = false;
    }
  },
  created() {
    this.getPlanetData(this.planet.films, this.planet.residents);
  }
};
</script>

<style scoped lang="scss">
.planet {
}
</style>

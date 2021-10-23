<template>
  <div class="singleSpecies card">
    <ul class="details">
      <li class="name">
        {{ species.name }}
      </li>
      <li><b>Designation:</b> {{ species.designation }}</li>
      <li><b>Classification:</b> {{ species.classification }}</li>
      <li><b>Language:</b> {{ species.language }}</li>
      <li><b>Eye Colors:</b> {{ species.eye_colors }}</li>
      <li><b>Hair Colors:</b> {{ species.hair_colors }}</li>
      <li><b>Skin Colors:</b> {{ species.skin_colors }}</li>
      <li>
        <b>Average Height:</b>
        {{ (species.average_height / 2.54).toFixed(1) }} in
      </li>
      <li><b>Average Lifespan:</b> {{ species.average_lifespan }} years</li>

      <li v-if="!isLoading && homeWorld">
        <b>Home World:</b> {{ homeWorld[0] }}
      </li>
    </ul>

    <Loader v-if="isLoading" />

    <ul v-if="!isLoading && people.length">
      <li class="heading"><b>People:</b></li>
      <li class="left_indent" :key="person" v-for="person in people">
        {{ person }}
      </li>
    </ul>

    <ul v-if="!isLoading && films.length">
      <li class="heading"><b>Films:</b></li>
      <li class="left_indent" :key="film" v-for="film in films">
        {{ film }}
      </li>
    </ul>
  </div>
</template>

<script>
import Loader from "../components/Loader/Loader.vue";

// UTILS
import { getData } from "../utils";

export default {
  name: "SingleSpecies",
  props: {
    species: {
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
      people: [],
      homeWorld: []
    };
  },

  methods: {
    async getSpeciesData() {
      this.isLoading = true;

      this.films = await getData(this.species.films);
      this.people = this.species.people && (await getData(this.species.people));
      this.homeWorld =
        this.species.homeWorld && (await getData([this.species.homeworld]));

      this.isLoading = false;
    }
  },
  created() {
    this.getSpeciesData();
  }
};
</script>

<style lang="scss" scoped>
#app .singleSpecies {
  width: 60%;
}
</style>

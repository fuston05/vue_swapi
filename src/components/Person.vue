<template>
  <div class="person card">
    <ul class="details">
      <li class="name">
        {{ person.name }}
      </li>
      <li><b>Eye Color:</b> {{ person.eye_color }}</li>
      <li><b>Hair Color:</b> {{ person.hair_color }}</li>
      <li><b>Skin Color:</b> {{ person.skin_color }}</li>
      <li><b>Gender:</b> {{ person.gender }}</li>
      <li><b>Height:</b> {{ person.height }}</li>
      <li><b>Weight:</b> {{ person.mass }}</li>
      <li><b>Birth Year:</b> {{ person.birth_year }}</li>
      <li v-if="home"><b>Home World:</b> {{ home.name }}</li>
    </ul>

    <Loader v-if="isLoading" />

    <ul v-if="!isLoading && films.length">
      <li class="heading"><b>Films:</b></li>
      <li class="left_indent" :key="film" v-for="film in films">{{ film }}</li>
    </ul>

    <ul v-if="!isLoading && species.length">
      <li class="heading"><b>Species:</b></li>
      <li class="left_indent" :key="s" v-for="s in species">{{ s }}</li>
    </ul>

    <ul v-if="!isLoading && vehicles.length">
      <li class="heading"><b>Vehicles:</b></li>
      <li class="left_indent" :key="v" v-for="v in vehicles">{{ v }}</li>
    </ul>

    <ul v-if="!isLoading && starships.length">
      <li class="heading"><b>Starships:</b></li>
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
  name: "Person",
  props: {
    person: {
      type: Object
    }
  },

  components: {
    Loader
  },

  data() {
    return {
      home: "",
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      isLoading: false
    };
  },

  methods: {
    async getPersonData() {
      this.isLoading = true;

      this.films = await getData(this.person.films);
      this.species = await getData(this.person.species);
      this.vehicles = await getData(this.person.vehicles);
      this.starships = await getData(this.person.starships);

      this.isLoading = false;
    }
  },

  created() {
    this.getPersonData();
  }
};
</script>

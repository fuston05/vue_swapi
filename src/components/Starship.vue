<template>
  <div class="starship card">
    <ul class="details">
      <li class="name">{{ starship.name }}</li>
      <li><b>Class:</b> {{ starship.starship_class }}</li>
      <li><b>Model:</b> {{ starship.model }}</li>
      <li><b>Manufacturer:</b> {{ starship.manufacturer }}</li>
      <li>
        <b>Cost:</b>
        {{ parseInt(starship.cost_in_credits).toLocaleString("en-US") }} gc
      </li>
      <li>
        <b>Length:</b> {{ parseInt(starship.length).toLocaleString("en-US") }} m
      </li>
      <li>
        <b>Cargo Capacity:</b>
        {{ parseInt(starship.cargo_capacity).toLocaleString("en-US") }} kg
      </li>
      <li v-if="starship.max_atmosphering_speed !== 'n/a'">
        <b>Max Atmosphering Speed:</b>
        {{ parseInt(starship.max_atmosphering_speed).toLocaleString("en-US") }}
      </li>
      <li><b>Hyperdrive Rating:</b> {{ starship.hyperdrive_rating }}</li>
      <li><b>MGLT:</b> {{ starship.MGLT }}</li>
      <li><b>Required Crew:</b> {{ starship.crew }}</li>
      <li><b>Passenger Capacity:</b> {{ starship.crew }}</li>
      <li><b>Consumables:</b> {{ starship.consumables }}</li>
    </ul>

    <Loader v-if="isLoading" />

    <ul v-if="!isLoading && films.length">
      <li class="heading"><b>Films:</b></li>
      <li class="left_indent" :key="film" v-for="film in films">
        {{ film }}
      </li>
    </ul>

    <ul v-if="!isLoading && pilots.length">
      <li class="heading"><b>Pilots:</b></li>
      <li class="left_indent" :key="pilot" v-for="pilot in pilots">
        {{ pilot }}
      </li>
    </ul>
  </div>
</template>

<script>
import Loader from "../components/Loader/Loader.vue";

// UTILS
import { getData } from "../utils";

export default {
  name: "Starship",
  props: {
    starship: {
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
      pilots: []
    };
  },

  methods: {
    async getStarshipData() {
      this.isLoading = true;

      this.films = await getData(this.starship.films);
      this.pilots = await getData(this.starship.pilots);

      this.isLoading = false;
    }
  },
  created() {
    this.getStarshipData();
  }
};
</script>

<style lang="scss" scoped>
#app .starship {
  width: 60%;
}
</style>

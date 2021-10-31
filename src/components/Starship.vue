<template>
  <div class="starship card">
    <ul class="mainContent">
      <li class="title">{{ starship.name }}</li>
      <li><b>Class:</b> {{ starship.starship_class }}</li>
      <li><b>Model:</b> {{ starship.model }}</li>
      <li><b>Manufacturer:</b> {{ starship.manufacturer }}</li>
      <li>
        <b>Cost:</b>
        {{
          starship.cost_in_credits === "unknown"
            ? "unknown"
            : parseInt(starship.cost_in_credits).toLocaleString("en-US") + " gc"
        }}
      </li>
      <li>
        <b>Length:</b>
        {{
          starship.length === "unknown"
            ? "unknown"
            : parseInt(starship.length).toLocaleString("en-US") + " m"
        }}
      </li>
      <li>
        <b>Cargo Capacity:</b>
        {{
          starship.cargo_capacity === "unknown"
            ? "unknown"
            : starship.cargo_capacity === "none" || starship.cargo_capacity == 0
            ? "none"
            : parseInt(starship.cargo_capacity).toLocaleString("en-US") + " kg"
        }}
      </li>
      <li>
        <b>Max Atmosphering Speed:</b>
        {{
          starship.max_atmosphering_speed === "unknown"
            ? "unknown"
            : starship.max_atmosphering_speed === "n/a"
            ? "n/a"
            : parseInt(starship.max_atmosphering_speed).toLocaleString("en-US")
        }}
      </li>
      <li><b>Hyperdrive Rating:</b> {{ starship.hyperdrive_rating }}</li>
      <li><b>MGLT:</b> {{ starship.MGLT }}</li>
      <li><b>Required Crew:</b> {{ starship.crew }}</li>
      <li><b>Passenger Capacity:</b> {{ starship.crew }}</li>
      <li>
        <b>Consumables:</b>
        {{
          starship.consumables === "none" || starship.consumables == 0
            ? "none"
            : starship.consumables
        }}
      </li>
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

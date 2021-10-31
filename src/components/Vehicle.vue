<template>
  <div class="vehicle card">
    <ul class="mainContent">
      <li class="title">{{ vehicle.name }}</li>
      <li><b>Class:</b> {{ vehicle.vehicle_class }}</li>
      <li><b>Model:</b> {{ vehicle.model }}</li>
      <li><b>Manufacturer:</b> {{ vehicle.manufacturer }}</li>
      <li>
        <b>Cost:</b>
        {{
          vehicle.cost_in_credits === "unknown"
            ? "unknown"
            : parseInt(vehicle.cost_in_credits).toLocaleString("en-US") + " gc"
        }}
      </li>
      <li>
        <b>Length:</b>
        {{
          vehicle.length === "unknown"
            ? "unknown"
            : parseInt(vehicle.length).toLocaleString("en-US") + " m"
        }}
      </li>
      <li>
        <b>Cargo Capacity:</b>
        {{
          vehicle.cargo_capacity === "unknown"
            ? "unknown"
            : vehicle.cargo_capacity === "none" || vehicle.cargo_capacity == 0
            ? "none"
            : parseInt(vehicle.cargo_capacity).toLocaleString("en-US") + " kg"
        }}
      </li>
      <li>
        <b>Max Atmosphering Speed:</b>
        {{
          vehicle.max_atmosphering_speed === "unknown"
            ? "unknown"
            : vehicle.max_atmosphering_speed === "n/a"
            ? "n/a"
            : parseInt(vehicle.max_atmosphering_speed).toLocaleString("en-US")
        }}
      </li>
      <li><b>Required Crew:</b> {{ vehicle.crew }}</li>
      <li><b>Passenger Capacity:</b> {{ vehicle.crew }}</li>
      <li>
        <b>Consumables:</b>
        {{
          vehicle.consumables === "none" || vehicle.consumables == 0
            ? "none"
            : vehicle.consumables
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
  name: "Vehicle",
  props: {
    vehicle: {
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
    async getVehicleData() {
      this.isLoading = true;

      this.films = await getData(this.vehicle.films);
      this.pilots = await getData(this.vehicle.pilots);

      this.isLoading = false;
    }
  },
  created() {
    this.getVehicleData();
  }
};
</script>

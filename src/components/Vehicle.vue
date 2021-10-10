<template>
  <div class="vehicle card">
    <ul class="details">
      <li class="name">{{ vehicle.name }}</li>
      <li><b>Class:</b> {{ vehicle.vehicle_class }}</li>
      <li><b>Model:</b> {{ vehicle.model }}</li>
      <li><b>Manufacturer:</b> {{ vehicle.manufacturer }}</li>
      <li><b>Cost in Credits:</b> {{ vehicle.cost_in_credits }} gc</li>
      <li><b>Length:</b> {{ vehicle.length }} m</li>
      <li><b>Cargo Capacity:</b> {{ vehicle.cargo_capacity }} kg</li>
      <li>
        <b>Max Atmosphering Speed:</b> {{ vehicle.max_atmosphering_speed }}
      </li>
      <li><b>Hyperdrive Rating:</b> {{ vehicle.hyperdrive_rating }}</li>
      <li><b>MGLT:</b> {{ vehicle.MGLT }}</li>
      <li><b>Required Crew:</b> {{ vehicle.crew }}</li>
      <li><b>Passenger Capacity:</b> {{ vehicle.crew }}</li>
      <li><b>Consumables:</b> {{ vehicle.consumables }}</li>
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

<style lang="scss" scoped>
#app .vehicle {
  width: 60%;
}
</style>

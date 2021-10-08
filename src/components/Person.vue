<template>
  <div class="person">
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
    <ul v-if="!isLoading && films">
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
    async getHome(homeUrl) {
      const homeRes = await fetch(homeUrl);

      const homeData = await homeRes.json();

      this.home = homeData;
    },

    async getFilms(filmsArr) {
      let numFilms = filmsArr.length;

      for (let i = 0; i < numFilms; i++) {
        let filmRes = await fetch(filmsArr[i]);

        let filmData = await filmRes.json();
        this.films.push(filmData.title);
      }
    },

    async getSpecies(speciesArr) {
      let numSpecies = speciesArr.length;

      for (let i = 0; i < numSpecies; i++) {
        let speciesRes = await fetch(speciesArr[i]);

        let speciesData = await speciesRes.json();
        this.species.push(speciesData.name);
      }
    },

    async getVehicles(vehiclesArr) {
      let numVehicles = vehiclesArr.length;

      for (let i = 0; i < numVehicles; i++) {
        let vehiclesRes = await fetch(vehiclesArr[i]);

        let vehiclesData = await vehiclesRes.json();
        this.vehicles.push(vehiclesData.name);
      }
    },

    async getStarships(starshipsArr) {
      let numstarships = starshipsArr.length;

      for (let i = 0; i < numstarships; i++) {
        let starshipsRes = await fetch(starshipsArr[i]);

        let starshipsData = await starshipsRes.json();
        this.starships.push(starshipsData.name);
      }
    },

    async getPersonData(
      homeUrl,
      filmsArr,
      speciesArr,
      vehiclesArr,
      starshipsArr
    ) {
      this.isLoading = true;

      await this.getHome(homeUrl);
      await this.getFilms(filmsArr);
      await this.getSpecies(speciesArr);
      await this.getVehicles(vehiclesArr);
      await this.getStarships(starshipsArr);

      this.isLoading = false;
    }
  },

  created() {
    this.getPersonData(
      this.person.homeworld,
      this.person.films,
      this.person.species,
      this.person.vehicles,
      this.person.starships
    );
  }
};
</script>

<style scoped lang="scss">
.person {
  margin: 2% auto;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 2%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  ul {
    list-style-position: inside;
    list-style-type: none;
    margin-bottom: 2%;

    .left_indent {
      margin-left: 2%;
    }

    li {
      margin: 0 0 1% 0;
      font-size: 1.2rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  ul.details {
    li.name {
      padding: 2%;
      margin: 0 0 5% 0;
      border-radius: 5px;
      color: #fff;
      background-color: black;
    }

    li.heading {
      list-style-type: none;
    }
  }

  p {
    margin: 0 0 3% 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

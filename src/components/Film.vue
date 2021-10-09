<template>
  <div class="film card">
    <ul class="details">
      <li class="name">
        {{ film.title }}
      </li>
      <li><b>Release Date:</b> {{ film.release_date }}</li>
      <li><b>Director:</b> {{ film.director }}</li>
      <li><b>Producer:</b> {{ film.producer }}</li>
      <li><b>Episode:</b> {{ film.episode_id }}</li>
      <li><b>Opening Crawl:</b> {{ film.opening_crawl }}</li>
    </ul>

    <Loader v-if="isLoading && !characters.length" />

    <ul v-if="!isLoading && characters.length">
      <li class="heading"><b>Characters:</b></li>
      <li class="left_indent" :key="character" v-for="character in characters">
        {{ character }}
      </li>
    </ul>

    <Loader v-if="isLoading && !planets.length && !characters.length" />

    <ul v-if="!isLoading && planets.length">
      <li class="heading"><b>Planets:</b></li>
      <li class="left_indent" :key="planet" v-for="planet in planets">
        {{ planet }}
      </li>
    </ul>

    <Loader
      v-if="
        isLoading && !species.length && !planets.length && !characters.length
      "
    />

    <ul v-if="!isLoading && species.length">
      <li class="heading"><b>Species:</b></li>
      <li class="left_indent" :key="s" v-for="s in species">
        {{ s }}
      </li>
    </ul>

    <Loader
      v-if="
        isLoading &&
          !starships.length &&
          !species.length &&
          !planets.length &&
          !characters.length
      "
    />

    <ul v-if="!isLoading && starships.length">
      <li class="heading"><b>starships:</b></li>
      <li class="left_indent" :key="ship" v-for="ship in starships">
        {{ ship }}
      </li>
    </ul>
  </div>
</template>

<script>
import Loader from "../components/Loader/Loader.vue";

export default {
  name: "Film",
  props: {
    film: {
      type: Object
    }
  },

  components: {
    Loader
  },

  data() {
    return {
      isLoading: false,
      characters: [],
      planets: [],
      species: [],
      starships: []
    };
  },
  methods: {
    async getCharacters(charactersArr) {
      let numCharacters = charactersArr.length;

      for (let i = 0; i < numCharacters; i++) {
        let charactersRes = await fetch(charactersArr[i]);

        let charactersData = await charactersRes.json();
        this.characters.push(charactersData.name);
      }
    },

    async getPlanets(planetsArr) {
      let numPlanets = planetsArr.length;

      for (let i = 0; i < numPlanets; i++) {
        let planetsRes = await fetch(planetsArr[i]);

        let planetsData = await planetsRes.json();
        this.planets.push(planetsData.name);
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

    async getfilmData(charactersArr, planetsArr, speciesArr) {
      this.isLoading = true;

      await this.getCharacters(charactersArr);
      await this.getPlanets(planetsArr);
      await this.getSpecies(speciesArr);

      this.isLoading = false;
    }
  },
  created() {
    this.getfilmData(
      this.film.characters,
      this.film.planets,
      this.film.species
    );
  }
};
</script>

<style scoped lang="scss">
#app .film {
  width: 80%;
}
</style>

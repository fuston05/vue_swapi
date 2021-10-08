<template>
  <div class="film">
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

    <Loader v-if="isLoading" />

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
  }
};
</script>

<style scoped lang="scss">
.film {
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

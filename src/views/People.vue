<template>
  <div class="people">
    <h1>Star Wars Characters</h1>
    <Person :person="person" :key="person.name" v-for="person in people" />
  </div>
</template>

<script>
/* eslint-disable semi */
/* eslint-disable quotes */
import Person from "../components/Person.vue";

export default {
  /* eslint-disable semi */
  /* eslint-disable quotes */
  name: "People",
  props: {
    people: {
      type: Array
    }
  },
  components: {
    Person
  }
};
</script>

<style lang="scss" scoped>
.people {
  padding: 2%;
  margin: 0 0 0 0;

  background-image: url("/img/swapi_bg2.jpeg");
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;

  h1 {
    margin: 40px 0;
    color: #ffe81a;
  }
}
</style>

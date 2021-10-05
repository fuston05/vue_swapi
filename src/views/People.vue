<template>
  <div class="people">
    <h1>Star Wars Characters</h1>
    <Person :person="person" :key="person.name" v-for="person in people" />
    <toTop />
  </div>
</template>

<script>
/* eslint-disable semi */
/* eslint-disable quotes */
import Person from "../components/Person.vue";
import ToTop from "../components/ToTop.vue";

export default {
  /* eslint-disable space-before-function-paren */
  /* eslint-disable semi */
  /* eslint-disable quotes */
  name: "People",

  data() {
    return {
      people: [],
      pages: 0,
      perPage: 0
    };
  },

  components: {
    Person,
    ToTop
  },
  methods: {
    log(info) {
      console.log("info: ", info);
    },
    async getPeople() {
      const res = await fetch(`${process.env.VUE_APP_API}/people`);

      const data = await res.json();
      this.people = data.results;
      const totalItems = data.count;

      this.perPage = this.people.length;
      this.pages = Math.floor((totalItems + this.perPage - 1) / this.perPage);
    }
  },
  created() {
    this.getPeople();
  }
};
</script>

<style lang="scss" scoped>
.people {
  padding: 2%;
  margin: 0 0 0 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: url("/img/swapi_bg2.jpeg");
  background-size: contain;
  background-position: top left;

  h1 {
    margin: 40px 0;
    color: #ffe81a;
  }
}
</style>

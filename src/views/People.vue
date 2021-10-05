<template>
  <div class="people">
    <h1>Star Wars Characters</h1>
    <Person :person="person" :key="person.name" v-for="person in people" />
    <div class="pagination">
      <span v-show="prevPage !== ''" class="prev" @click="getPeople(prevPage)"
        >&lt;&lt; Prev</span
      >{{ " " }} <span class="page">{{ this.page }}</span
      >{{ " " }}
      <span v-show="nextPage !== ''" class="next" @click="getPeople(nextPage)"
        >Next &gt;&gt;</span
      >
    </div>
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
      page: 1,
      nextPage: "",
      prevPage: ""
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
    async getPeople(endpoint = `${process.env.VUE_APP_API}/people`) {
      const res = await fetch(`${endpoint}`);

      const data = await res.json();
      this.people = data.results;

      if (data.next) {
        this.nextPage = data.next;
      } else {
        this.nextPage = "";
      }

      if (data.previous) {
        this.prevPage = data.previous;
      } else {
        this.prevPage = "";
      }

      console.log("people data: ", data);
      console.log("prev: ", this.prevPage, "next: ", this.nextPage);
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
  background-image: url("/img/swapi_bg2.png");
  background-size: contain;
  background-position: top left;

  .pagination {
    color: #fff;

    .prev,
    .next {
      display: inline-block;
    }
  }

  h1 {
    margin: 40px 0;
    color: #ffe81a;
  }
}
</style>

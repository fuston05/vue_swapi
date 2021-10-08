<template>
  <div class="people pageContainer">
    <h1>Star Wars Characters</h1>

    <Loader v-if="!people.length" />

    <Person :person="person" :key="person.name" v-for="person in people" />

    <Pagination
      @prev-click="this.getPeople(prevPage)"
      @next-click="this.getPeople(nextPage)"
      :page="page"
      :totalPages="totalPages"
    />
    <toTop />
  </div>
</template>

<script>
import Person from "../components/Person.vue";
import ToTop from "../components/ToTop.vue";
import Loader from "../components/Loader/Loader.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "People",

  data() {
    return {
      people: [],
      perPage: null,
      page: 1,
      nextPage: "",
      prevPage: "",
      totalPages: 0,
      isLoading: false
    };
  },

  components: {
    Person,
    ToTop,
    Loader,
    Pagination
  },

  methods: {
    async getPeople(reqPage = "") {
      if (this.isLoading || reqPage === null) return;

      this.isLoading = true;

      const res = await fetch(
        `${process.env.VUE_APP_API}/people/?page=${reqPage}`
      );

      const data = await res.json();
      this.people = data.results;

      this.perPage = this.perPage ? this.perPage : data.results.length;

      this.page = reqPage ? parseInt(reqPage) : 1;

      console.log("data: ", data);

      // calc total pages
      this.totalPages = Math.floor((data.count - 1) / this.perPage + 1);

      // set up for page calculation
      this.nextPage = data.next
        ? data.next
            .split("/")
            .splice(-1)[0]
            .slice(-1)
        : null;

      this.prevPage = data.previous
        ? data.previous
            .split("/")
            .splice(-1)[0]
            .slice(-1)
        : null;

      this.isLoading = false;
    }
  },
  created() {
    this.getPeople();
  }
};
</script>

<style lang="scss" scoped>
.people {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: url("/img/swapi_bg2.png");
  background-size: contain;
  background-position: top left;

  h1 {
    color: #ffe81a;
  }
}
</style>

<template>
  <div class="people">
    <h1>Star Wars Characters</h1>
    <Loader v-if="!people.length" />
    <Person :person="person" :key="person.name" v-for="person in people" />
    <div v-if="people.length" class="pagination">
      <span v-show="prevPage !== ''" class="prev" @click="getPeople(prevPage)">
        <img alt="left arrow" src="/img/icons/leftArrow.png" /> </span
      >{{ " " }} <span class="page">{{ this.page }}</span
      >{{ " " }}
      <span v-show="nextPage !== ''" class="next" @click="getPeople(nextPage)"
        ><img alt="left arrow" src="/img/icons/rightArrow.png"
      /></span>
    </div>
    <toTop />
  </div>
</template>

<script>
import Person from "../components/Person.vue";
import ToTop from "../components/ToTop.vue";
import Loader from "../components/Loader/Loader.vue";

export default {
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
    ToTop,
    Loader
  },
  methods: {
    log(info) {
      console.log("info: ", info);
    },
    async getPeople(endpoint = `${process.env.VUE_APP_API}/people`) {
      const res = await fetch(`${endpoint}`);

      const data = await res.json();
      this.people = data.results;

      // set up for page calculation
      const next = data.next
        ? data.next
            .split("/")
            .splice(-1)[0]
            .slice(-1)
        : null;
      const prev = data.prev
        ? data.prev
            .split("/")
            .splice(-1)[0]
            .slice(-1)
        : null;

      // calc current page num
      this.page =
        prev && next
          ? next - prev
          : prev && !next
          ? prev + 1
          : next && !prev
          ? next - 1
          : this.page;

      // hide prev or next buttons if no more pages
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
  height: 100vh;
  margin: 0 0 0 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: url("/img/swapi_bg2.png");
  background-size: contain;
  background-position: top left;

  .pagination {
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 1%;
    text-align: center;
    margin: 5% auto 2% auto;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.8);

    .page {
      font-size: 1.3rem;
      margin: 0 20px;
      width: 50px;
    }

    .prev,
    .next {
      margin: 0 5px;
      width: 45px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }

  h1 {
    margin: 40px 0;
    color: #ffe81a;
  }
}
</style>

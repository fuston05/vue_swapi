<template>
  <div class="people">
    <h1>Star Wars Characters</h1>

    <Loader v-if="!people.length" />

    <Person :person="person" :key="person.name" v-for="person in people" />

    <Pagination
      @prev-click="this.getPeople(prevPage)"
      @next-click="this.getPeople(nextPage)"
      :page="page"
      :totalPages="totalPages"
    />
    <!-- <div v-if="people.length" class="pagination">
      <span v-show="prevPage !== ''" class="prev" @click="getPeople(prevPage)">
        <img alt="left arrow" src="/img/topArrow.png" /> </span
      >{{ " " }} <span class="page">{{ this.page }}</span
      >{{ " " }}

      <span v-show="nextPage !== ''" class="next" @click="getPeople(nextPage)">
        <img alt="left arrow" src="/img/topArrow.png" />
      </span>
    </div> -->

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
  padding: 2%;
  height: 100vh;
  margin: 0 0 0 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: url("/img/swapi_bg2.png");
  background-size: contain;
  background-position: top left;

  // .pagination {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   width: 25%;
  //   padding: 1%;
  //   text-align: center;
  //   margin: 5% auto 2% auto;

  //   @media (max-width: 600px) {
  //     width: 35%;
  //   }

  //   .page {
  //     font-size: 1.3rem;
  //     margin: 0 20px;
  //     width: 50px;
  //     color: #fff;
  //   }

  //   .prev {
  //     img {
  //       transform: rotate(-90deg);
  //     }
  //   }

  //   .next {
  //     img {
  //       transform: rotate(90deg);
  //     }
  //   }

  //   .prev,
  //   .next {
  //     margin: 0 5px;
  //     width: 45px;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     opacity: 0.6;

  //     &:hover {
  //       cursor: pointer;
  //       opacity: 0.8;
  //     }

  //     img {
  //       width: 100%;
  //     }
  //   }
  // }

  h1 {
    margin: 40px 0;
    color: #ffe81a;
  }
}
</style>

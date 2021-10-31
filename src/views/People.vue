<template>
  <div class="people pageContainer">
    <h1>Characters</h1>

    <Loader v-if="!resource.length" />

    <Person :person="r" :key="r.name" v-for="r in resource" />

    <Pagination
      v-if="resource.length"
      @prev-click="this.setData(pageData.prevPage)"
      @next-click="this.setData(pageData.nextPage)"
      :page="pageData.page"
      :totalPages="pageData.totalPages"
    />

    <toTop v-if="resource.length" />
  </div>
</template>

<script>
import Person from "../components/Person.vue";
import ToTop from "../components/ToTop.vue";
import Loader from "../components/Loader/Loader.vue";
import Pagination from "../components/Pagination.vue";

// UTIL
import { fetchData } from "../utils";

export default {
  name: "People",

  data() {
    return {
      pageData: {
        perPage: null,
        page: 1,
        nextPage: "",
        prevPage: "",
        totalPages: 0
      },
      resource: [],
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
    async setData(reqPage = 1) {
      this.isLoading = true;

      const [
        _perPage,
        _page,
        _totalPages,
        _nextPage,
        _prevPage,
        _resource
      ] = await fetchData(reqPage, this.pageData, `people_${reqPage}`);

      this.pageData.perPage = _perPage;
      this.pageData.page = _page;
      this.pageData.totalPages = _totalPages;
      this.pageData.nextPage = _nextPage;
      this.pageData.prevPage = _prevPage;
      this.resource = _resource;

      this.isLoading = false;
    }
  },

  emits: ["close-mobile-nav"],

  created() {
    this.setData();
  },
  mounted() {
    this.$emit("close-mobile-nav");
  }
};
</script>

<style lang="scss" scoped>
.people {
  background-image: url("/img/swapi_bg2.png");
}
</style>

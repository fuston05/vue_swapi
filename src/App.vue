<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/people">People</router-link>
  </nav>
  <router-view :people="people" />
</template>

<script>
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
export default {
  name: "app",
  data() {
    return {
      people: [],
      pages: 0,
      perPage: 0
    };
  },
  methods: {
    async getPeople() {
      const res = await fetch(`${process.env.VUE_APP_API}/people`);

      const data = await res.json();
      this.people = data.results;
      const numPeople = data.count;

      console.log("data: ", data);

      this.perPage = this.people.length;
      this.pages =
        Math.ceil(numPeople / this.people.length) % 2 !== 0
          ? Math.ceil(numPeople / this.people.length)
          : Math.ceil(numPeople / this.people.length) + 1;
    }
  },
  created() {
    this.getPeople();
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  overflow-x: hidden;
  background-color: black;
}

#nav {
  padding: 30px;
  border-bottom: 1px solid green;

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #cff4cf;
      text-decoration: underline;
    }
  }
}
</style>

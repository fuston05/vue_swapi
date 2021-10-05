<template>
  <Nav />
  <router-view />
</template>

<script>
/* eslint-disable semi */
/* eslint-disable quotes */
import Nav from "./components/Nav.vue";

export default {
  name: "app",

  components: {
    Nav
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

  h1 {
    font-size: 2.3rem;
  }

  p {
    font-size: 1.8rem;
  }
}

#nav {
  padding: 30px;
  border-bottom: 1px solid green;
  display: flex;
  justify-content: space-between;

  h1 {
    color: #ffe81a;
  }

  a {
    font-weight: bold;
    font-size: 1.3rem;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ffe81a;
      text-decoration: underline;
    }
  }
}
</style>

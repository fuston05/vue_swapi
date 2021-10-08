<template>
  <Nav />
  <router-view />
</template>

<script>
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
</style>

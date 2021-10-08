<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",

  components: {
    Nav,
    Footer
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
  min-height: 100vh;
  overflow-x: hidden;
  background-color: black;

  .pageContainer {
    min-height: 100vh;
    padding: 2%;
  }
}
</style>

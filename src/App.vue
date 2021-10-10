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
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;

    h1 {
      color: #ffe81a;
      text-shadow: 1px 1px 3px #333;
    }
  }

  .card {
    margin: 2% auto;
    width: 50%;
    max-width: 100%;
    background-color: rgba(255, 255, 255, 0.83);
    border-radius: 5px;
    padding: 2%;

    @media screen and (max-width: 600px) {
      width: 100%;
    }

    ul {
      list-style-position: inside;
      list-style-type: none;
      margin-bottom: 2%;

      .left_indent {
        margin-left: 2%;
      }

      li {
        margin: 0 0 1% 0;
        font-size: 1.2rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    ul.details {
      li.name {
        padding: 2%;
        margin: 0 0 5% 0;
        border-radius: 5px;
        color: #fff;
        background-color: black;
      }

      li.heading {
        list-style-type: none;
      }
    }
  }
}
</style>

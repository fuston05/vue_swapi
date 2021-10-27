<template>
  <div class="introduction pageContainer">
    <p>
      All the Star Wars information you could ever want all in one place!
      Information provided by the
      <a href="https://swapi.dev/" target="_blank">Star Wars API</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Introduction",

  emits: ["close-mobile-nav"],

  mounted() {
    this.$emit("close-mobile-nav");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.introduction {
  background-image: url("/img/swapi_bg.png");

  p,
  a {
    font-size: 1.8rem;
    color: #cff4cf;
    text-shadow: 1px 1px 1px #333;
  }

  p {
    margin-top: 5%;
    border-radius: 5px;
    padding: 2%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  a:hover {
    opacity: 0.8;
  }
}
</style>

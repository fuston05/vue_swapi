<template>
  <div class="introduction pageContainer">
    <p>
      Please make a selection above to view Star Wars Characters.
    </p>
  </div>
</template>

<script>
export default {
  name: "Introduction"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.introduction {
  background-image: url("/img/swapi_bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  p {
    font-size: 1.8rem;
    color: #cff4cf;
    text-shadow: 1px 1px 1px #333;
  }
}
</style>

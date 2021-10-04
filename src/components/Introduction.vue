<template>
  <div class="introduction">
    <h1>Star Wars API</h1>
    <p>
      Please make a selection above to view Star Wars Characters.
    </p>
  </div>
</template>

<script>
/* eslint-disable semi */
/* eslint-disable quotes */
export default {
  name: "Introduction"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.introduction {
  height: 100vh;

  h1 {
    color: #ffe81a;
    margin: 40px 0;
  }
  p {
    margin: 40px 0;
    color: #cff4cf;
    text-shadow: 1px 1px 1px #333;
  }
}
</style>

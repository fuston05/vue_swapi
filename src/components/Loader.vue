<template>
  <h3 class="loader">{{ text }}</h3>
</template>

<script>
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
export default {
  name: "Loader",
  props: {
    text: {
      type: String,
      default: "Loading..."
    }
  }
};
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: #fff;
}
</style>

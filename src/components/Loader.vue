<template>
  <h3 class="loader">{{ text }}</h3>
</template>

<script>
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

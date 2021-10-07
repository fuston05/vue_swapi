<template>
  <div class="loader">
    <h3 v-if="text" class="text">{{ text }}</h3>
    <img v-if="!text" alt="loader" :src="image" />
  </div>
</template>

<script>
import loaderImage from "./loader.svg";
export default {
  name: "Loader",
  props: {
    text: {
      type: String,
      default: ""
    },
    image: {
      type: Image,
      default: loaderImage
    }
  }
};
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  text-align: center;

  .text {
    font-size: 2rem;
    color: #fff;
  }

  img {
    width: 100px;
  }
}
</style>

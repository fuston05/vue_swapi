<template>
  <span @click="scrollToTop" class="toTop">
    <img src="/img/topArrow.png" alt="Up Arrow" />
  </span>
</template>

<script>
import { scrollToTop } from "../utils";

export default {
  name: "ToTop",

  methods: {
    scrollToTop: scrollToTop
  }
};
</script>

<style lang="scss" scoped>
.toTop {
  position: fixed;
  bottom: 90px;
  right: 25px;
  z-index: 5;
  opacity: 0.6;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  img {
    width: 45px;
  }
}
</style>

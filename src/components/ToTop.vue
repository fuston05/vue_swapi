<template>
  <span @click="scrollToTop" class="toTop">
    <img src="/img/topArrow.png" alt="Up Arrow" />
  </span>
</template>

<script>
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
export default {
  name: "ToTop",
  methods: {
    scrollToTop() {
      const ele = document.querySelector("#nav");
      const top = ele.offsetTop;

      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.toTop {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 5;

  img {
    width: 50px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>

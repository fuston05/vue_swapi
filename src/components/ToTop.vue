<template>
  <span @click="scrollToTop" class="toTop">
    <img src="/img/topArrow.png" alt="Up Arrow" />
  </span>
</template>

<script>
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

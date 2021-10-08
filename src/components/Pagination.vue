<template>
  <div class="pagination">
    <span v-show="page > 1" class="prev" @click="this.$emit('prev-click')">
      <img alt="left arrow" src="/img/topArrow.png" /> </span
    >{{ " " }} <span class="page">{{ page }}</span
    >{{ " " }}

    <span
      v-show="page !== totalPages"
      class="next"
      @click="this.$emit('next-click')"
    >
      <img alt="left arrow" src="/img/topArrow.png" />
    </span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    page: Number,
    totalPages: Number
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 1%;
  text-align: center;
  margin: 5% auto 2% auto;

  @media (max-width: 600px) {
    width: 35%;
  }

  .page {
    font-size: 1.3rem;
    margin: 0 20px;
    width: 50px;
    color: #fff;
    background-color: #362f39;
    padding: 2px;
    border-radius: 25px;
  }

  .prev {
    img {
      transform: rotate(-90deg);
    }
  }

  .next {
    img {
      transform: rotate(90deg);
    }
  }

  .prev,
  .next {
    margin: 0 5px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    img {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="home">
    <Introduction />
  </div>
</template>

<script>
/* eslint-disable semi */
/* eslint-disable quotes */
// @ is an alias to /src
import Introduction from "@/components/Introduction.vue";

export default {
  name: "Home",
  components: {
    Introduction
  }
};
</script>

<style scoped lang="scss">
.home {
  padding: 2%;
}
</style>

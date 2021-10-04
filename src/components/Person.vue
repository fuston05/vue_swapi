<template>
  <div class="person">
    <h3>{{ person.name }}</h3>
    <p>Eye Color: {{ person.eye_color }}</p>
    <p><b>Hair Color:</b> {{ person.hair_color }}</p>
  </div>
</template>

<script>
export default {
  /* eslint-disable semi */
  /* eslint-disable quotes */
  name: "Person",
  props: {
    person: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
.person {
  margin: 1% auto;
  width: 40%;
  background-color: rgb(207, 243, 207);
  padding: 2%;
}
</style>

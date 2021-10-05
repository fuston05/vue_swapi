<template>
  <div class="person">
    <h3>{{ person.name }}</h3>
    <p><b>Eye Color:</b> {{ person.eye_color }}</p>
    <p><b>Hair Color:</b> {{ person.hair_color }}</p>
    <p><b>Skin Color:</b> {{ person.skin_color }}</p>
    <p><b>Gender:</b> {{ person.gender }}</p>
    <p><b>Height:</b> {{ person.height }}</p>
    <p><b>Weight:</b> {{ person.mass }}</p>
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
  margin: 2% auto;
  width: 50%;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 2%;
  opacity: 0.8;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  h3 {
    padding: 2%;
    margin: 0 0 5% 0;
    border-radius: 5px;
    color: #fff;
    background-color: black;
  }

  p {
    margin: 0 0 3% 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

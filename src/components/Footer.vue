<template>
  <div class="footer">
    <span class="copy">
      &copy; Copyright Scott Fuston 2021
    </span>

    <span class="email">
      website built by:
      <a href="https://scottfuston.com" target="_blank">Scott Fuston</a>
    </span>

    <span class="swapi">
      <a href="https://swapi.dev/" target="_blank">Star Wars API</a>
    </span>

    <a href="https://www.linkedin.com/in/scott-fuston/" target="_blank">
      <img src="/img/icons/linkedin.png" alt="linkedin" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #aaa;
  border-top: 3px solid black;
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.2rem;
  }

  a {
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    img {
      width: 25px;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
}
</style>

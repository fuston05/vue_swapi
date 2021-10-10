<template>
  <nav id="nav">
    <div class="navLinks">
      <router-link to="/people">People</router-link> |
      <router-link to="/planets">Planets</router-link> |
      <router-link to="/films">Films</router-link> |
      <router-link to="/species">Species</router-link>
    </div>
    <a class="homeLink" href="/"><h1>Star Wars API</h1></a>
  </nav>
</template>

<script>
export default {
  name: "Species"
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  border-bottom: 1px solid green;
  display: flex;
  justify-content: space-between;

  a.homeLink {
    text-decoration: none;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .navLinks {
    display: flex;
    justify-content: space-between;

    a {
      font-weight: bold;
      margin-right: 20px;
      font-size: 1.3rem;
      color: #ffffff;
      text-decoration: none;

      &:last-child {
        margin-right: 0;
      }

      &.router-link-exact-active {
        color: #ffe81a;
        text-decoration: underline;
      }
    }
  }

  h1 {
    color: #ffe81a;
  }
}
</style>

<template>
  <nav id="nav">
    <router-link class="homeLink" to="/"><h1>Star Wars</h1></router-link>

    <div class="navLinks">
      <router-link to="/people">People</router-link> |
      <router-link to="/planets">Planets</router-link> |
      <router-link to="/films">Films</router-link> |
      <router-link to="/species">Species</router-link> |
      <router-link to="/starships">Starships</router-link> |
      <router-link to="/vehicles">Vehicles</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  border-bottom: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  a.homeLink {
    text-decoration: none;
    margin-right: 40px;

    @media (max-width: 800px) {
      margin-bottom: 25px;
    }

    @media (max-width: 600px) {
      margin-bottom: 0;
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .navLinks {
    display: flex;
    justify-content: space-between;
    height: 100%;

    a {
      font-weight: bold;
      margin-right: 20px;
      font-size: 1.3rem;
      color: #ffffff;
      text-decoration: none;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }

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
    font-size: 2.6rem;
  }
}
</style>

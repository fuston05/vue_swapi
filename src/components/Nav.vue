<template>
  <nav id="nav">
    <div class="navLinks">
      <router-link to="/">Home</router-link> |
      <router-link to="/people">People</router-link>
    </div>
    <h1>Star Wars API</h1>
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

  h1 {
    color: #ffe81a;
  }

  a {
    font-weight: bold;
    font-size: 1.3rem;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ffe81a;
      text-decoration: underline;
    }
  }
}
</style>

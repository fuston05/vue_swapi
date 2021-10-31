<template>
  <nav id="mobile_nav">
    <div class="navTop">
      <router-link class="homeLink" to="/"><h1>Star Wars</h1></router-link>

      <img
        class="mobile_nav_icon"
        src="/img/icons/mobile_nav_icon.png"
        alt="mobile navigation menu"
        v-on:click="$emit('toggle-nav')"
      />
    </div>

    <div ref="navLinks" class="navLinks collapse">
      <router-link to="/people">People</router-link>
      <router-link to="/planets">Planets</router-link>
      <router-link to="/films">Films</router-link>
      <router-link to="/species">Species</router-link>
      <router-link to="/starships">Starships</router-link>
      <router-link to="/vehicles">Vehicles</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "mobileNav",

  emits: ["toggle-nav"]
};
</script>

<style lang="scss" scoped>
#mobile_nav {
  padding: 10px 10px 0 10px;
  border-bottom: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: auto;

  .navTop {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  a.homeLink {
    text-decoration: none;
  }

  h1 {
    color: #ffe81a;
    font-size: 2.6rem;
  }

  .mobile_nav_icon {
    width: 30px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .collapse {
    max-height: 0;
    transition: max-height 0.8s ease-out;
  }

  .expand {
    max-height: 500px;
    transition: max-height 0.8s ease-in;
  }

  .navLinks {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;

    a {
      font-weight: bold;
      font-size: 1.3rem;
      color: #ffffff;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #333;
      text-decoration: none;
      padding: 3%;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }

      &.router-link-exact-active {
        color: #ffe81a;
        text-decoration: underline;
      }
    }
  }
}
</style>

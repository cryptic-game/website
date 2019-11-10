<template>
  <nav class="c-navbar" :class="{ scrolled: scrollPosition !== 0 }">
    <div class="c-navbar__centered">
      <div class="c-navbar__links">
        <a href="https://play.cryptic-game.net">Play</a>
        <nuxt-link to="/blog">
          Blog
        </nuxt-link>
        <nuxt-link to="/roadmap">
          Roadmap
        </nuxt-link>
        <nuxt-link to="/contribute">
          Contribute
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/variables";

  .c-navbar {
    height: $navbar-height;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    color: white;
    font-size: 1.1rem;
    text-transform: uppercase;

    display: inline-block;
    padding-top: 38px;

    background-color: transparent;
    transition: 300ms linear background-color;

    &.scrolled {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }

  .c-navbar__centered {
    margin: 0 auto;
    max-width: 100%;
    width: 1000px;
    height: 100%;
  }

  .c-navbar__links {
    float: right;

    a {
      display: inline-block;
      margin-right: 40px;
      position: relative;

      color: white;
      text-decoration: none;

      &::after {
        content: "";
        position: absolute;
        top: 30px;
        left: 0;
        background-color: white;
        height: 1px;
        width: 100%;

        opacity: 0;
        transition: 200ms linear opacity;
      }

      &:hover {
        &::after {
          opacity: 1;
        }
      }
    }
  }
</style>

<script>
  export default {
    name: "CNavbar",
    data: () => ({
      scrollPosition: 0
    }),
    mounted() {
      const scrollListener = () => {
        this.scrollPosition = window.scrollY;
      };

      window.addEventListener("scroll", scrollListener, { passive: true });

      this.$on("hook:beforeDestroy", () => {
        window.removeEventListener("scroll", scrollListener);
      });

      scrollListener();
    }
  };
</script>

<template>
  <nav class="c-navbar" :class="{ scrolled: scrollPosition !== 0, open }">
    <div class="c-navbar__toggle" @click="open = !open">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="c-navbar__container">
      <div class="c-navbar__links">
        <nuxt-link to="/" @click.native.passive="open = false">
          Home
        </nuxt-link>
        <a href="https://play.cryptic-game.net" @click.native.passive="open = false">Play</a>
        <nuxt-link to="/blog" @click.native.passive="open = false">
          Blog
        </nuxt-link>
        <nuxt-link to="/roadmap" @click.native.passive="open = false">
          Roadmap
        </nuxt-link>
        <nuxt-link to="/contribute" @click.native.passive="open = false">
          Contribute
        </nuxt-link>
        <nuxt-link to="/team" @click.native.passive="open = false">
          Team
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/variables";
  @import "~@/assets/css/mobile";

  .c-navbar {
    height: var(--navbar-height);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    color: white;
    font-size: 1.1rem;
    text-transform: uppercase;

    display: flex;
    align-items: center;

    background-color: transparent;
    transition: 300ms linear background-color;

    &.scrolled {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }

  .c-navbar__toggle {
    display: none;
  }

  .c-navbar__container {
    margin: 0 auto;
    max-width: 100%;
    width: 1000px;
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

  @include mobile {
    .c-navbar__toggle {
      display: block;

      position: relative;
      left: 30px;
      z-index: 2;

      & > span {
        display: block;

        background-color: white;

        width: 30px;
        height: 2px;

        transition: 200ms linear;
        transition-property: opacity, transform;

        &:nth-child(2) {
          margin-top: 8px;
        }

        &:nth-child(3) {
          margin-top: 8px;
        }
      }
    }

    .c-navbar__container {
      pointer-events: none;

      background-color: black;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0;
      padding-top: var(--navbar-height);

      opacity: 0;
      transition: 200ms ease-out opacity;
    }

    .c-navbar__links {
      float: none;

      & > a {
        display: block;
        width: fit-content;
        margin: 0 auto 20px;
        font-size: 1.5rem;

        transform: translateX(-100%);
        opacity: 0;
        transition: 400ms ease-out;
        transition-property: opacity, transform;
      }
    }

    .c-navbar.open {
      .c-navbar__toggle > span {
        &:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }
      }

      .c-navbar__container {
        pointer-events: auto;

        opacity: 1;
      }

      .c-navbar__links > a {
        transform: translateX(0);
        opacity: 1;

        &:after {
          top: 40px;
        }
      }
    }
  }
</style>

<script>
  export default {
    name: "CNavbar",
    data: () => ({
      scrollPosition: 0,
      open: false
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

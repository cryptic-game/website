<template>
  <nav class="layout-navigation" :class="{ 'show-background': _showBackground, open }">
    <div class="layout-navigation__toggle" @click="open = !open">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="layout-navigation__container">
      <div class="layout-navigation__links">
        <template v-for="item in $options.navigationItems">
          <nuxt-link
            v-if="item.to"
            :key="item.to"
            :class="{ 'require-exact-active': item.requireExactActive }"
            :to="item.to"
            @click.native.passive="open = false"
          >
            {{ item.label }}
          </nuxt-link>
          <a
            v-else
            :key="item.to"
            rel="noopener"
            :href="item.href"
            @click.native.passive="open = false"
          >
            {{ item.label }}
          </a>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/_variables";
  @import "~@/assets/css/_mobile";

  .layout-navigation {
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
    transition: 200ms linear background-color;

    &.show-background {
      backdrop-filter: blur(5px);
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  .layout-navigation__toggle {
    display: none;
  }

  .layout-navigation__container {
    margin: 0 auto;
    max-width: 100%;
    width: 1000px;
  }

  .layout-navigation__links {
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

      &:hover, &.nuxt-link-active:not(.require-exact-active), &.require-exact-active.nuxt-link-exact-active {
        &::after {
          opacity: 1;
        }
      }
    }
  }

  @include mobile {
    .layout-navigation__toggle {
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

    .layout-navigation__container {
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

    .layout-navigation__links {
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

    .layout-navigation.open {
      .layout-navigation__toggle > span {
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

      .layout-navigation__container {
        pointer-events: auto;

        opacity: 1;
      }

      .layout-navigation__links > a {
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
  const NAVIGATION_ITEMS = [
    {
      label: "Home",
      to: "/",
      requireExactActive: true
    },
    {
      label: "Play",
      href: "https://play.cryptic-game.net"
    },
    {
      label: "Blog",
      to: "/blog"
    },
    {
      label: "Roadmap",
      to: "/roadmap"
    },
    {
      label: "Contribute",
      to: "/contribute"
    },
    {
      label: "Team",
      to: "/team"
    }
  ];

  export default {
    name: "LayoutNavigation",
    navigationItems: NAVIGATION_ITEMS,
    props: {
      showBackground: {
        type: null,
        default: "beforeScroll"
      }
    },
    data: () => ({
      scrollPosition: 0,
      open: false
    }),
    computed: {
      _showBackground() {
        return this.showBackground === true || (this.showBackground === "onScroll" && this.scrollPosition !== 0);
      }
    },
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

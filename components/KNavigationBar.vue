<template>
  <div :class="classes" class="k-navigation-bar">
    <div class="k-navigation-bar__placeholder" />
    <nav class="k-navigation-bar__container-0">
      <div class="k-navigation-bar__toggle" @click="open = !open">
        <span />
        <span />
        <span />
      </div>
      <div class="k-navigation-bar__container-1 content">
        <CrypticHeadLogo class="k-navigation-bar__logo" />
        <span class="k-navigation-bar__title">{{ title }}</span>
        <div class="k-navigation-bar__container-2">
          <div class="k-navigation-bar__links">
            <template v-for="item in items">
              <component
                :is="isNuxt ? 'nuxt-link' : 'router-link'"
                v-if="item.to"
                :key="item.label"
                :to="item.to"
                @click.native.passive="open = false"
              >
                {{ item.label }}
              </component>
              <a
                v-else
                :key="item.label"
                :href="item.href"
                rel="noopener"
                target="_blank"
                @click.passive="open = false"
              >
                {{ item.label }}
              </a>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { isNuxt } from 'kiste/js/isNuxt'
import { toModifierClasses } from 'kiste/js/toModifierClasses'
import CrypticHeadLogo from '@/assets/cryptic_head.svg'

export default {
  name: 'KNavigationBar',
  components: { CrypticHeadLogo },
  props: {
    backgroundAfterScroll: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    open: false,
    scrollPosition: 0
  }),
  computed: {
    scrolled: vm => vm.scrollPosition > 60,
    showBackground: vm => vm.backgroundAfterScroll ? vm.scrollPosition > 0 : true,
    classes () {
      const { open, scrolled, showBackground } = this

      return toModifierClasses({
        open,
        scrolled,
        showBackground
      })
    },
    items: vm => vm.$kiste.navigationItems,
    isNuxt
  },
  mounted () {
    const scrollListener = () => {
      this.scrollPosition = window.scrollY
    }

    window.addEventListener('scroll', scrollListener, { passive: true })

    this.$kiste.navigationBar = this

    this.$on('hook:beforeDestroy', () => {
      window.removeEventListener('scroll', scrollListener)
    })

    scrollListener()
  },
  destroyed () {
    if (this.$kiste.navigationBar === this) {
      this.$kiste.navigationBar = null
    }
  }
}
</script>

<style lang="scss">
@mixin mobile() {
  @media (max-width: 1000px) {
    @content;
  }
}

@mixin notMobile() {
  @media (min-width: 1001px) {
    @content;
  }
}

.k-app {
  --x-navbar-height: 100px;

  @include mobile {
    --x-navbar-height: 80px;
  }
}

.k-navigation-bar {
  height: var(--x-navbar-height);
  position: relative;
  z-index: 100000;
}

.k-navigation-bar__placeholder {
  height: var(--x-navbar-height);
  width: 100%;
}

.k-navigation-bar__container-0 {
  height: var(--x-navbar-height);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.1rem;
  text-transform: uppercase;

  transition: 120ms linear background-color;
  background-color: transparent;

  .k-navigation-bar.x-show-background & {
    background-color: var(--colors-background);
  }

  .k-navigation-bar.x-scrolled & {
    .k-navigation-bar__title {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.k-navigation-bar__toggle {
  display: none;
}

.k-navigation-bar__logo {
  height: 70px;
  min-height: 70px;
  width: 46.3833px;
  min-width: 46.3833px;
  margin-right: 20px;
}

.k-navigation-bar__title {
  font-size: 1.5rem;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;

  flex-shrink: 0;
  max-width: calc(100% - 10px);

  transition: 200ms ease;
  transition-property: opacity, transform;

  opacity: 0;
  transform: translateY(10px);

  @include notMobile {
    font-size: 2rem;
  }
}

.k-navigation-bar__container-1 {
  max-width: 100%;
  height: 100%;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
}

.k-navigation-bar__container-2 {
  width: 100%;
}

.k-navigation-bar__links {
  float: right;

  a {
    display: inline-block;
    margin-left: 40px;
    position: relative;

    text-decoration: none;
    color: var(--colors-background-c);

    &::after {
      content: "";
      position: absolute;
      top: 30px;
      left: 0;

      background-color: var(--colors-background-c);

      height: 2px;
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
  .k-navigation-bar__toggle {
    display: block;

    position: relative;
    left: 30px;
    z-index: 2;

    & > span {
      display: block;

      background-color: var(--colors-background-c);

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

  .k-navigation-bar__logo {
    min-height: 50px;
    height: 50px;
    width: 55.1px;
    order: 2;
    margin-right: 0;
  }

  .k-navigation-bar__container-1 {
    padding-left: 50px !important;
  }

  .k-navigation-bar__container-2 {
    pointer-events: none;
    background-color: var(--colors-background);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: var(--navbar-height);

    opacity: 0;
    transition: 200ms ease-out opacity;
  }

  .k-navigation-bar__links {
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

      &:after {
        top: 35px;
      }
    }
  }

  .k-navigation-bar.x-open {
    .k-navigation-bar__toggle > span {
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

    .k-navigation-bar__container-2 {
      pointer-events: auto;
      opacity: 1;
    }

    .k-navigation-bar__links > a {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>

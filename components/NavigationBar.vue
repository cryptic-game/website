<template>
  <div
    class="navigation-bar"
    :class="{
      'x-scrolled': scrolled,
      'x-show-background': showBackground,
      'x-open': open,
    }"
  >
    <div class="navigation-bar__placeholder" />
    <nav class="navigation-bar__container-0">
      <div class="navigation-bar__toggle" @click="open = !open">
        <span />
        <span />
        <span />
      </div>
      <div class="navigation-bar__container-1 content">
        <div class="navigation-bar__logos">
          <component
            :is="isNuxt ? 'nuxt-link' : 'router-link'"
            :key="'cryptic-logo'"
            :to="localePath('/')"
            @click.native.passive="open = false"
          >
            <CrypticHeadLogo class="navigation-bar__logo" />
          </component>
          <LanguageSwitcher class="navigation-bar__language" />
        </div>
        <div class="navigation-bar__container-2">
          <div class="navigation-bar__links">
            <template v-for="item in items">
              <component
                :is="isNuxt ? 'nuxt-link' : 'router-link'"
                v-if="item.to"
                :key="item.label"
                :to="localePath(item.to)"
                @click.native.passive="open = false"
              >
                {{ $t("navbar." + item.label) }}
              </component>
              <a
                v-else
                :key="item.label"
                :href="item.href"
                rel="noopener"
                target="_blank"
                @click.passive="open = false"
              >
                {{ $t("navbar." + item.label) }}
              </a>
            </template>
            <LanguageSwitcher class="navigation-bar__language hide_d" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import CrypticHeadLogo from '@/assets/icons/cryptic_head.svg'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { isNuxt } from '@/assets/js/isNuxt'

export default {
  name: 'NavigationBar',
  components: { CrypticHeadLogo, LanguageSwitcher },
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
    showBackground: vm =>
      vm.backgroundAfterScroll ? vm.scrollPosition > 0 : true,
    items () {
      return [
        {
          label: 'home',
          to: '/'
        },
        {
          label: 'play',
          href: 'https://play.cryptic-game.net'
        },
        {
          label: 'changelog',
          to: '/changelog'
        },
        {
          label: 'blog',
          to: '/blog'
        },
        {
          label: 'faq',
          to: '/faq'
        },
        {
          label: 'roadmap',
          to: '/roadmap'
        },
        {
          label: 'contribute',
          to: '/contribute'
        },
        {
          label: 'team',
          to: '/team'
        }
      ]
    },
    isNuxt
  },
  mounted () {
    const scrollListener = () => {
      this.scrollPosition = window.scrollY
    }

    window.addEventListener('scroll', scrollListener, { passive: true })
    this.$on('hook:beforeDestroy', () => {
      window.removeEventListener('scroll', scrollListener)
    })
    scrollListener()
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
    .hide_d{
      display: none;
    }
    @content;
  }
}

.app {
  --x-navbar-height: 100px;

  @include mobile {
    --x-navbar-height: 80px;
  }
}

.navigation-bar {
  height: var(--x-navbar-height);
  position: relative;
  z-index: 100000;
}

.navigation-bar__placeholder {
  height: var(--x-navbar-height);
  width: 100%;
}

.navigation-bar__container-0 {
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

  .navigation-bar.x-show-background & {
    background-color: var(--colors-background);
  }

}

.navigation-bar__toggle {
  display: none;
}

.navigation-bar__logos {
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .navigation-bar__language {
    display: none;
  }
}

.navigation-bar__logo {
  height: 70px;
  min-height: 70px;
  width: 46.3833px;
  min-width: 46.3833px;
  margin-right: 20px;
}

.navigation-bar__container-1 {
  max-width: 100%;
  height: 100%;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
}

.navigation-bar__container-2 {
  width: 100%;
}

.navigation-bar__links {
  display: flex;
  justify-content: flex-end;
  column-gap: 20px;

  & > a {
    display: inline-block;
    margin: 5px 0 5px;
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
  .navigation-bar__toggle {
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
  .navigation-bar__logos {
    margin-right: 0;
    order: 2;
    display: flex;
    align-items: center;

    .navigation-bar__language {
      display: flex;
    }
  }

  .navigation-bar__logo {
    min-height: 50px;
    height: 50px;
    width: 55.1px;
    margin-right: 0;
    order: 1;
  }

  .navigation-bar__language {
    order: 0;
    margin-right: 10px;
  }

  .navigation-bar__container-1 {
    padding-left: 50px !important;
  }

  .navigation-bar__container-2 {
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

  .navigation-bar__links {
    flex-direction: column;
    justify-content: center;

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

    .navigation-bar__language {
      display: none;
    }
  }

  .navigation-bar.x-open {
    .navigation-bar__toggle > span {
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

    .navigation-bar__container-2 {
      pointer-events: auto;
      opacity: 1;
    }

    .navigation-bar__links > a {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>

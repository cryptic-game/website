<template>
  <footer class="content footer">
    <template v-for="item in items">
      <component
        :is="isNuxt ? 'nuxt-link' : 'router-link'"
        v-if="item.to"
        :key="item.label"
        class="footer__link"
        :to="localePath(item.to)"
      >
        {{ $t("footer." + item.label) }}
      </component>
      <a
        v-else-if="item.href"
        :key="item.label"
        class="footer__link"
        :href="item.href"
      >
        {{ $t("footer." + item.label) }}
      </a>
    </template>
  </footer>
</template>

<script>
import { isNuxt } from '@/assets/js/isNuxt'

export default {
  name: 'Footer',
  data () {
    return {
      items: [
        {
          label: 'legal',
          href: 'https://the-morpheus.de/#contact'
        },
        {
          label: 'privacy',
          href: 'https://the-morpheus.de/faq.html'
        },
        {
          label: 'serverStatus',
          href: 'https://status.cryptic-game.net'
        }
      ]
    }
  },
  computed: {
    isNuxt
  }
}
</script>

<style scoped lang="scss">
@use "../assets/css/mixins/screenSize";

.footer {
  padding-bottom: 40px;
  position: sticky;
  top: 100vh;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @include screenSize.mobile {
    flex-direction: column;
  }
}

.footer__link {
  text-decoration: none;
  flex-shrink: 0;
  margin: 10px;
  opacity: 0.6;
  color: var(--colors-background-c);
  transition: 120ms linear;
  transition-property: opacity, color;

  &:hover {
    color: var(--colors-link);
    opacity: 1;
  }
}
</style>

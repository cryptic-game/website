<template>
  <div class="host" @click.stop>
    <GlobeIcon width="2.2rem" height="2.2rem" class="globe" @click="toggle" />
    <div v-if="active" class="languages" scroll.native="this.active=false">
      <nuxt-link
        v-for="language in languages"
        :key="language.id"
        :to="switchLocalePath(language.id)"
        class="languageItem"
      >
        {{ language.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import GlobeIcon from '@/assets/icons/globe.svg'
export default {
  name: 'LanguageSwitcher',
  components: { GlobeIcon },
  data () {
    return {
      active: false,
      languages: [
        { id: 'en', name: 'EN (US)' },
        { id: 'de', name: 'DE (DE)' }
        // { id: 'zh', name: '简体中文（中国）' }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', () => { this.active = false })
    this.$parent.$parent.$el.addEventListener('click', () => { this.active = false })
  },
  methods: {
    toggle () {
      this.active = !this.active
    },

    caway () {
      this.active = false
    }

  }
}
</script>

<style lang="scss" scoped>
.host {
  justify-content: center;
  align-items: center;
}

.languages {
  top: 70px;
  position: fixed;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  background-color: black;
  border-radius: 0.25rem;
  margin-right: 4vw;
}

.languageItem {
  padding: 5px;
  color: white;
  text-decoration: none;
  transition: background-color 150ms ease-in-out;
  border-radius: 0.25rem;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 0.25rem;
  }
}

.globe {
  cursor: pointer;
}
</style>

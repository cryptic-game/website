<template>
  <div class="host">
    <GlobeIcon width="2.2rem" height="2.2rem" class="globe" @click="toggle" />
    <div v-if="active" class="languages">
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
        { id: 'en', name: 'English (US)' },
        { id: 'de', name: 'Deutsch (DE)' }
        // { id: 'zh', name: '简体中文（中国）' }
      ]
    }
  },
  methods: {
    toggle () {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss">
.host {
  display: flex;
  justify-content: center;
  align-items: center;
}

.languages {
  top: 70px;
  position: fixed;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.5);
  border: var(--colors-background-c) solid 0.0625rem;
  border-radius: 0.25rem;
}

.languageItem {
  padding: 5px;
  color: var(--colors-background-c);
  text-decoration: none;
  transition: background-color 150ms ease-in-out;

  &:not(:first-child) {
    border-top: var(--colors-background-c) solid 0.0625rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
}

.globe {
  cursor: pointer;
}
</style>

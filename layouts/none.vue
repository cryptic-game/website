<template>
  <App>
    <nuxt />
  </App>
</template>

<script>
import App from '@/components/App'

export default {
  components: { App },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: { ...i18nHead.htmlAttrs },
      meta: [...i18nHead.meta],
      link: [...i18nHead.link]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

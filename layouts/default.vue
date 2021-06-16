<template>
  <div class="default-layout fill-screen">
    <App>
      <nuxt />
      <Footer />
    </App>
  </div>
</template>

<script>
import App from '@/components/App'
import Footer from '@/components/Footer'

export default {
  components: { App, Footer },
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

<template>
  <main class="not-found-page">
    <NavigationBar title="Not found" />
    <div class="content formatted">
      <h1>Not found</h1>
      <p class="heading--5">
        The page you requested could not be found.
      </p>
    </div>
  </main>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'NotFound',
  components: { NavigationBar },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      titleTemplate: 'Not Found - %s',
      htmlAttrs: { ...i18nHead.htmlAttrs },
      meta: [...i18nHead.meta],
      link: [...i18nHead.link]
    }
  }
}
</script>

<style scoped>
main.not-found-page {
  margin-bottom: 5rem;
}
</style>

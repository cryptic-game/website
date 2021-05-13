<template>
  <div class="default-layout fill-screen">
    <KApp>
      <nuxt />
      <KFooter />
    </KApp>
  </div>
</template>

<script>
import KApp from 'kiste/components/KApp'
import KFooter from 'kiste/components/KFooter'

export default {
  components: { KApp, KFooter }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <main class="changelog-page">
    <NavigationBar title="Changelog" />
    <div class="content formatted">
      <h1>{{ $t("navbar.changelog") }}</h1>

      <div class="grid">
        
      </div>
    </div>
  </main>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'ChangelogPage',
  components: {
    
    NavigationBar
  },
  head () {
    return {
      titleTemplate: 'Changelog - %s'
    }
  },
  
}
</script>

<style lang="scss" scoped>

</style>

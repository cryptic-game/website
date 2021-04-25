<template>
  <div class="status-page">
    <NavigationBar title="Status" />
    <div class="content formatted">
      <h1>Status</h1>
      <span class="heading--5">This page will be available as soon as Pre Alpha 3 is released.</span>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'StatusPage',
  components: { NavigationBar },
  head () {
    return {
      titleTemplate: 'Status - %s'
    }
  }
}
</script>

<style lang="scss" scoped>
.status-page {
  height: 100%;
  margin-bottom: 5rem;
}
</style>

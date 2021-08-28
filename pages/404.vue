<template>
  <main class="team-page">
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
  components: { NavigationBar }
}
</script>

<style scoped>

</style>

<template>
  <main class="not-found-page">
    <NavigationBar title="Not found"></NavigationBar>
    <div class="content formatted">
      <h1>Not found</h1>
      <p class="heading--5">
        The page you requested could not be found.
      </p>
    </div>
  </main>
</template>

<script>
  import NavigationBar from "@/components/NavigationBar";

  export default {
    name: "NotFound",
    components: { NavigationBar },
    head() {
      return {
        titleTemplate: "Not Found - %s"
      };
    }
  };
</script>

<style scoped>
main.not-found-page {
  margin-bottom: 5rem;
}
</style>

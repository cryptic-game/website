<template>
  <main class="not-found-page">
    <KNavigationBar title="Not found"></KNavigationBar>
    <div class="content formatted">
      <h1>Not found</h1>
      <p class="heading--5">The page you requested could not be found.</p>
    </div>
  </main>
</template>

<script>
  import KNavigationBar from "@/components/KNavigationBar";

  export default {
    name: "not-found",
    components: {KNavigationBar},
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

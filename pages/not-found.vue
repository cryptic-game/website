<template>
  <main class="team-page">
    <KNavigationBar title="Not found"></KNavigationBar>
    <div class="content formatted">
      <h1>Not found</h1>
      <p class="heading--5">The page you requested could not be found.</p>
    </div>
  </main>
</template>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar";

  export default {
    name: "not-found",
    components: {KNavigationBar}
  };
</script>

<style scoped>

</style>

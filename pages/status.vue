<template>
  <div class="status-page">
    <KNavigationBar title="Status"/>
    <div class="content formatted">
      <h1>Status</h1>
      <span class="heading--5">This page will be available as soon as Pre Alpha 3 is released.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .status-page {
    height: 100%;
  }
</style>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar";

  export default {
    name: "StatusPage",
    components: {KNavigationBar},
    head() {
      return {
        titleTemplate: "Status - %s"
      };
    }
  };
</script>

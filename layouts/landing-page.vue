<template>
  <div class="landing-page-layout fill-screen">
    <LayoutNavigation show-background="onScroll"/>
    <div class="landing-page-layout__content">
      <nuxt/>
    </div>
    <LayoutFooter/>
  </div>
</template>

<style lang="scss" scoped>
  @import "~@/assets/css/variables";
  @import "~@/assets/css/mobile";

  .landing-page-layout {
    .landing-page-layout__content {
      margin-top: var(--navbar-height);
      min-height: calc(100vh - var(--navbar-height));
    }
  }
</style>

<script>
  import LayoutFooter from "@/components/layout/LayoutFooter";
  import LayoutNavigation from "@/components/layout/LayoutNavigation";

  export default {
    components: { LayoutNavigation, LayoutFooter }
  };
</script>

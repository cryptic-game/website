<template>
  <div class="default-layout fill-screen">
    <LayoutNavigation :show-background="true"/>
    <div class="default-layout__content">
      <nuxt/>
    </div>
    <LayoutFooter/>
  </div>
</template>

<style lang="scss" scoped>
  @import "~@/assets/css/variables";
  @import "~@/assets/css/mobile";

  .default-layout {
    .default-layout__content {
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

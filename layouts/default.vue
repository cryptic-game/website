<template>
  <div class="default-layout fill-screen">
    <CNavbar/>
    <nuxt/>
  </div>
</template>

<style lang="scss" scoped>
  @import "~@/assets/css/variables";

  .default-layout {

  }
</style>
<script>
  import CNavbar from "@/components/CNavbar";
  export default {
    components: { CNavbar }
  };
</script>

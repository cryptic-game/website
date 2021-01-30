<template>
  <div class="default-layout fill-screen">
    <App>
      <nuxt/>
      <Footer/>
    </App>
  </div>
</template>

<script>
  import App from "@/components/App";
  import Footer from "@/components/Footer";

  export default {
    components: { App, Footer }
  };
</script>

<style lang="scss" scoped>

</style>

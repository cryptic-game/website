<template>
  <div class="default-layout fill-screen">
    <KApp>
      <nuxt/>
      <KFooter/>
    </KApp>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import KApp from "kiste/components/KApp";
import KFooter from "kiste/components/KFooter";

export default {
  components: {KApp, KFooter}
};
</script>

<template>
  <div class="index-page">
    <section class="vh-100 relative bg-black z-p1 white">
      <video
        class="absolute top-0 left-0 w-100 h-100 object-cover z-m1 op-80"
        autoplay
        muted
        loop
      >
        <source src="@/assets/video/background.mp4" type="video/mp4"/>
      </video>
      <div class="grid-container">
        <div class="fl w-40 pa2">
          <h1>
            An Open Source Project by <b>The Morpheus Tutorials</b>
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/utilities";

  .object-cover {
    object-fit: cover;
  }
</style>

<script>
  export default {
    components: {}
  };
</script>

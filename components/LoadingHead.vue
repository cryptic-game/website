<template>
  <div class="loading-head" :style="style">
    <CrypticHeadWhite class="loading-head__icon"/>
    <span class="loading-head__text">{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
  .loading-head {
    width: calc(var(--x-size) * 1px);
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: pulse 0.6s alternate linear infinite;
  }

  .loading-head__icon {
    width: 100%;
  }

  .loading-head__text {
    font-size: calc(var(--x-size) * 0.1px);
  }

  @keyframes pulse {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }
</style>

<script>
  import CrypticHeadWhite from "@/assets/cryptic_head_white.svg";

  export default {
    name: "LoadingHead",
    components: { CrypticHeadWhite },
    props: {
      size: {
        type: Number,
        default: 100
      },
      text: {
        type: String,
        default: "Loading"
      }
    },
    computed: {
      style() {
        return {
          "--x-size": this.size
        };
      }
    }
  };
</script>

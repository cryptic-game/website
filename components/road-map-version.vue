<template>
  <div class="roadmap-version">
    <h4><span> {{version}} </span></h4>
    <div class="roadmap-sprints">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "road-map-version",
    props: {
      version: String
    }
  };
</script>

<style lang="scss" scoped>
  div.roadmap-version {
    display: flex;
    flex-direction: column;
    width: 100%;

    h4 {
      margin: 0 0 1rem;

      span {
      }
    }

    div.roadmap-sprints {
      display: flex;
      flex-direction: column;
    }
  }
</style>


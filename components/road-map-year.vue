<template>

  <div class="roadmap-year-group">
    <div class="roadmap-year-display">
      <h3 class="roadmap-year-number">{{ year }}</h3>
    </div>
    <div class="roadmap-version-group">
      <slot></slot>
    </div>
  </div>

</template>

<script>

  export default {
    name: "road-map-year",
    props: {
      year: Number
    }
  };
</script>

<style lang="scss" scoped>
  div.roadmap-year-group {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin-bottom: 2rem;

    div.roadmap-year-display {
      width: 150px;

      h3.roadmap-year-number {
        margin: 0;
      }
    }

    div.roadmap-version-group {
      padding-left: 1rem;
      border-left: 0.1rem solid #2de179;
      flex-grow: 1;
    }
  }

  @media (max-width: 800px) {
    div.roadmap-year-group {
      flex-direction: column;
    }
  }
</style>

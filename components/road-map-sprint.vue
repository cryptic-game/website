<template>
  <div class="roadmap-sprint">
    <p class="action">
      {{ action }}
    </p>
    <p class="group">
      {{ group }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "road-map-sprint",

    props: {
      action: String,
      group: String
    }
  };
</script>

<style lang="scss" scoped>
  div.roadmap-sprint {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    margin-bottom: 1rem;

    p {
      margin: 0;

      &.group {
        color: darken(#fff, 30%);
      }
    }
  }

  @media (max-width: 450px) {
    div.roadmap-sprint {

      grid-template-columns: 1fr;
    }
  }
</style>

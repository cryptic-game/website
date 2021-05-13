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
  name: 'RoadMapSprint',

  props: {
    action: {
      type: String,
      default: 'Loading...'
    },
    group: {
      type: String,
      default: 'Loading...'
    }
  }
}
</script>

<style lang="scss" scoped>
div.roadmap-sprint {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin: 0;

    &.group {
      color: darken(#fff, 50%);
    }
  }
}

@media (max-width: 450px) {
  div.roadmap-sprint {

    grid-template-columns: 1fr;
  }
}
</style>

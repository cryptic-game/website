<template>
  <div class="roadmap-version">
    <h4><span> {{ version }} </span></h4>
    <div class="roadmap-sprints">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadMapVersion',
  props: {
    version: {
      type: String,
      default: 'Loading...'
    }
  }
}
</script>

<style lang="scss" scoped>
div.roadmap-version {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }

  h4 {
    margin: 0 0 1rem;
    line-height: 2rem;
    font-size: 2rem;
  }

  div.roadmap-sprints {
    display: flex;
    flex-direction: column;
  }
}
</style>

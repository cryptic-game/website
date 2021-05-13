<template>
  <div :class="'roadmap-date-group roadmap-state-' + state">
    <div class="roadmap-date-display">
      <h3 class="roadmap-date-year">
        {{ year }}
      </h3>
      <h5 class="roadmap-date-month">
        {{ month }}
      </h5>
    </div>
    <div class="roadmap-version-group">
      <div class="roadmap-version-line" />
      <div class="roadmap-version-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadMapDate',
  props: {
    year: {
      type: String,
      default: 'Loading...'
    },
    month: {
      type: String,
      default: 'Loading...'
    },
    state: {
      type: String,
      default: 'Loading...'
    }
  }
}
</script>

<style lang="scss" scoped>
div.roadmap-date-group {
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0 0 10rem;

  div.roadmap-date-display {
    transform: translateX(-0.5rem) translateY(6.75rem) rotate(-90deg);
    transform-origin: 0 0;
    width: 100px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h3.roadmap-date-year, h5.roadmap-date-month {
      margin: 0;
      white-space: nowrap;
    }
  }

  div.roadmap-version-group {
    flex-grow: 1;

    display: flex;
    flex-direction: row;

    div.roadmap-version-line {
      width: 0.2rem;
      /*height: 100%;*/
      border-radius: 1rem;
      margin: 0 1.5rem 0 1rem;
    }

    div.roadmap-version-content {
      flex-grow: 1;
    }
  }

  &.roadmap-state-next div.roadmap-version-group div.roadmap-version-line {
    background-color: #EABF11;
  }

  &.roadmap-state-current div.roadmap-version-group div.roadmap-version-line {
    background-color: #2DCC70;
  }

  &.roadmap-state-finished div.roadmap-version-group div.roadmap-version-line {
    background-color: #3598DC;
  }
}

@media (max-width: 800px) {
  div.roadmap-date-group {
    flex-direction: column;

    div.roadmap-date-display {
      transform: none;
      width: 100px;
      justify-content: flex-start;
      flex-direction: row;
      align-items: center;
      margin-bottom: 1rem;

      h3.roadmap-date-year {
        margin-right: 1rem;
      }
    }
  }
}
</style>

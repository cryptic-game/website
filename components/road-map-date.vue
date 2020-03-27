<template>

  <div :class="'roadmap-date-group roadmap-state-' + state">
    <div class="roadmap-date-display">
      <h3 class="roadmap-date-year">{{ year }}</h3>
      <h5 class="roadmap-date-month">{{ month }}</h5>
    </div>
    <div class="roadmap-version-group">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "road-map-date",
    props: {
      year: String,
      month: String,
      state: String
    }
  };
</script>

<style lang="scss" scoped>
  div.roadmap-date-group {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin-bottom: 2rem;

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
      padding-left: 1rem;
      border-left: 0.2rem solid #2de179;
      flex-grow: 1;
    }

    &.roadmap-state-next div.roadmap-version-group {
      border-color: #EABF11;
    }

    &.roadmap-state-current div.roadmap-version-group {
      border-color: #2DCC70;
    }

    &.roadmap-state-finished div.roadmap-version-group {
      border-color: #3598DC;
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

        h3.roadmap-date-year {
          margin-right: 1rem;
        }
      }
    }
  }
</style>

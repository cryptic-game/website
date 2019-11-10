<template>
  <button class="c-button" :class="color" :type="type" :style="style" v-on="$listeners">
    <span class="c-button__icon">
      <slot name="icon"/>
    </span>
    <span class="c-button__content">
      <slot/>
    </span>
  </button>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/mobile";

  .c-button {
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: flex-start;
    justify-content: flex-start;
    align-self: center;

    border-radius: 3px;
    border: none;

    padding: 10px 16px 8px;
    font-weight: bold;

    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.6);

    &.white {
      background-color: white;
      color: black;
      border-color: #c2c2c2;
    }

    &.discord {
      background-color: #7289DA;
      color: white;
    }

    transition: 120ms ease-out background-color;

    &:hover {
      &.white {
        background-color: #efefef;
      }

      &.discord {
        background-color: #5f72b5;
        color: white;
      }
    }

    .c-button__content {
      font-size: calc(var(--size) * 0.5rem + 0.6rem);

      @include mobile {
        font-size: calc(var(--size) * 0.5rem + 0.5rem);
      }
    }

    .c-button__icon {
      display: block;

      margin-right: 10px;
      width: calc(var(--size) * 0.7rem + 1rem);

      @include mobile {
        width: calc(var(--size) * 0.7rem + 0.8rem);
      }

      & > * {
        width: 100%;
      }
    }
  }
</style>

<script>
  import { createPropEnum, oneOf } from "@/assets/js/propUtils";

  const colorPropEnum = createPropEnum(["white", "discord"]);

  export default {
    name: "CButton",
    props: {
      type: oneOf(["text", "password"], {
        default: "text"
      }),
      size: oneOf([1, 2, 3, 4], {
        default: 1
      }),
      ...colorPropEnum.props
    },
    computed: {
      color: colorPropEnum.computedProperty,
      style() {
        return {
          "--size": this.size
        };
      }
    }
  };
</script>

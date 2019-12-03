<script>
  import { createPropEnum, oneOf } from "@/assets/js/propUtils";

  const colorPropEnum = createPropEnum(["white", "green", "blue", "discord"], "white");

  export default {
    name: "CButton",
    props: {
      type: oneOf(["text", "password"], {
        default: "text"
      }),
      size: oneOf([1, 2, 3, 4], {
        default: 1
      }),
      outline: {
        type: Boolean,
        default: false
      },
      textColor: {
        type: String,
        default: null
      },
      to: {
        type: String,
        default: null
      },
      href: {
        type: String,
        default: null
      },
      newTab: {
        type: Boolean,
        default: false
      },
      ...colorPropEnum.props
    },
    computed: {
      color: colorPropEnum.computedProperty,
      style() {
        return {
          "--size": this.size,
          "--overwrite-on-color": this.textColor
        };
      }
    },
    render(h) {
      let rootEl;
      let props;
      let attrs = {};

      if (this.to) {
        rootEl = "nuxt-link";
        props = {
          to: this.to
        };
      } else if (this.href) {
        rootEl = "a";
        attrs = {
          href: this.href
        };
      } else {
        rootEl = "button";
        attrs = {
          type: this.type,
          target: this.newTab ? "_blank" : "_self",
          rel: "noopener"
        };
      }

      return h(rootEl, {
        class: ["c-button", this.color, { outline: this.outline }],
        style: this.style,
        attrs,
        props,
        on: this.$listeners
      }, [
        h("span", {
          class: "c-button__icon"
        }, [
          this.$slots.icon
        ]),
        h("span", {
          class: "c-button__content"
        }, [
          this.$slots.default
        ])
      ]);
    }
  };
</script>

<style scoped lang="scss">
  @use "~@/assets/css/utilities/screenSize";
  @use "~@/assets/css/variables";

  .c-button {
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: flex-start;
    justify-content: flex-start;

    border-radius: 3px;
    border: none;

    padding: 10px 16px 8px;
    width: fit-content;

    font-weight: bold;
    text-decoration: none;

    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.7);

    &.white {
      --color: white;
      --on-color: black;
      --hover-color: #d7d7d7;
    }

    &.green {
      --color: #{variables.$green};
      --on-color: #{variables.$on-green};
      --hover-color: #{variables.$green-darker};
    }

    &.blue {
      --color: #{variables.$blue};
      --on-color: #{variables.$on-blue};
      --hover-color: #{variables.$blue-darker};
    }

    &.discord {
      --color: #{variables.$discord};
      --on-color: #{variables.$on-discord};
      --hover-color: #{variables.$discord-darker};
    }

    transition: 120ms ease-out;
    transition-property: background-color, color;

    background: var(--color);
    color: var(--overwrite-on-color, var(--on-color));

    &.outline {
      background: transparent;

      border: 2px solid var(--color);
    }

    &:hover {
      background: var(--hover-color);

      &.outline {
        background: var(--color);
        color: var(--on-color);
      }
    }

    .c-button__content {
      font-size: calc(var(--size) * 0.5rem + 0.6rem);
      width: max-content;

      @include screenSize.mobile {
        font-size: calc(var(--size) * 0.5rem + 0.5rem);
      }
    }

    .c-button__icon::v-deep .icon {
      display: block;
      margin-right: 8px;
      width: calc(var(--size) * 0.7rem + 1rem);

      @include screenSize.mobile {
        width: calc(var(--size) * 0.7rem + 0.8rem);
      }
    }
  }
</style>

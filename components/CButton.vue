<script>
  import { createPropEnum, oneOf } from "@/assets/js/propUtils";

  const colorPropertyEnum = createPropEnum(["white", "green", "blue", "discord"], "white");

  export default {
    name: "CButton",
    props: {
      size: oneOf([1, 2, 3, 4], { default: 1 }),
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
      // eslint-disable-next-line unicorn/no-keyword-prefix
      newTab: {
        type: Boolean,
        default: false
      },
      ...colorPropertyEnum.props
    },
    computed: {
      color: colorPropertyEnum.computedProperty,
      style () {
        return {
          "--x-size": this.size,
          "--x-c-color": this.textColor
        };
      }
    },
    render (h) {
      let rootElement;
      let properties;
      let attributes = {};

      if (this.to) {
        rootElement = "nuxt-link";
        properties = { to: this.to };
      } else if (this.href) {
        rootElement = "a";
        attributes = { href: this.href };
      } else {
        rootElement = "button";
        attributes = {
          target: this.newTab ? "_blank" : "_self",
          rel: "noopener"
        };
      }

      return h(rootElement, {
        class: ["c-button", this.color, { outline: this.outline }],
        style: this.style,
        attrs: attributes,
        props: properties,
        on: this.$listeners
      }, [
        h("span", { class: "c-button__icon" }, [this.$slots.icon]),
        h("span", { class: "c-button__content" }, [this.$slots.default])
      ]);
    }
  };
</script>

<style scoped lang="scss">
  @use "~kiste/css/mixins/screenSize";

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
      --x-color: white;
      --x-c-color: black;
      --x-a-color: #d7d7d7;
    }

    &.green {
      --x-color: var(--colors-green);
      --x-c-color: var(--colors-green-c);
      --x-a-color: var(--colors-green-a);
    }

    &.blue {
      --x-color: var(--colors-blue);
      --x-c-color: var(--colors-blue-c);
      --x-a-color: var(--colors-blue-a);
    }

    &.discord {
      --x-color: var(--colors-discord);
      --x-c-color: var(--colors-discord-c);
      --x-a-color: var(--colors-discord-a);
    }

    transition: 120ms ease-out;
    transition-property: background-color, color;

    background: var(--x-color);
    color: var(--x-c-color);

    &.outline {
      background: transparent;

      border: 2px solid var(--x-color);
    }

    &:hover {
      background: var(--x-a-color);

      &.outline {
        background: var(--x-color);
        color: var(--x-c-color);
      }
    }

    .c-button__content {
      font-size: calc(var(--x-size) * 0.5rem + 0.6rem);
      width: max-content;

      @include screenSize.mobile {
        font-size: calc(var(--x-size) * 0.5rem + 0.5rem);
      }
    }

    .c-button__icon::v-deep .icon {
      display: block;
      margin-right: 8px;
      width: calc(var(--x-size) * 0.7rem + 1rem);

      @include screenSize.mobile {
        width: calc(var(--x-size) * 0.7rem + 0.8rem);
      }
    }
  }
</style>

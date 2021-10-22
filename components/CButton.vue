<script>
import { createPropEnum, oneOf } from '@/assets/js/propUtils'

const colorPropEnum = createPropEnum(['white', 'green', 'blue', 'discord'], 'white')

export default {
  name: 'CButton',
  props: {
    type: oneOf(['text', 'password'], {
      default: 'text'
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
    style () {
      return {
        '--x-size': this.size,
        '--x-c-color': this.textColor
      }
    }
  },
  render (h) {
    let rootEl
    let props
    let attrs = {}

    if (this.to) {
      rootEl = 'nuxt-link'
      props = {
        to: this.to
      }
    } else if (this.href) {
      rootEl = 'a'
      attrs = {
        href: this.href
      }
    } else {
      rootEl = 'button'
      attrs = {
        type: this.type,
        target: this.newTab ? '_blank' : '_self',
        rel: 'noopener'
      }
    }

    return h(rootEl, {
      class: ['c-button', this.color, { outline: this.outline }],
      style: this.style,
      attrs,
      props,
      on: this.$listeners
    }, [
      h('span', {
        class: 'c-button__icon'
      }, [
        this.$slots.icon
      ]),
      h('span', {
        class: 'c-button__content'
      }, [
        this.$slots.default
      ])
    ])
  }
}
</script>

<style lang="scss" scoped>
@use "../assets/css/mixins/screenSize";

.c-button {
  display: flex;
  align-items: center;
  justify-items: center;
  align-content: flex-start;
  justify-content: flex-start;
  max-width: 50vw;
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
    max-width: 50vw;

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

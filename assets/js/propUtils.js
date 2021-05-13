export function oneOf (items, options) {
  return {
    ...options,
    type: null,
    validate: v => items.includes(v)
  }
}

export function createPropEnum (items, defaultValue) {
  const props = {}

  items.forEach((item) => {
    props[item] = {
      type: Boolean,
      default: false
    }
  })

  const computedProperty = function () {
    return items.find(item => this[item]) || defaultValue
  }

  return { props, computedProperty }
}

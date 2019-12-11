/* eslint-disable unicorn/prevent-abbreviations */
// "prop" is a Vue-specific term

export function oneOf (items, options) {
  return {
    ...options,
    type: null,
    validate: v => items.includes(v)
  };
}

export function createPropEnum (items, defaultValue) {
  const properties = {};

  items.forEach(item => {
    properties[item] = {
      type: Boolean,
      default: false
    };
  });

  const computedProperty = vm => items.find(item => vm[item]) || defaultValue;

  return { props: properties, computedProperty };
}

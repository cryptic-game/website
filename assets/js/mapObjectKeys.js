export function mapObjectKeys(mapping, object) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => {
    const mappedKey = mapping[key];

    return [mappedKey || key, value];
  }));
}

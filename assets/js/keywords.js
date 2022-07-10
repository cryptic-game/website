export function generateFallbackKeywords (data) {
  const words = {}
  data
    ?.replace(/[,.<>":=/\n\r()]/g, ' ')
    .split(' ')
    .map(value => value.trim().toLowerCase())
    .filter(value => value.length > 4)
    .forEach((value) => {
      if (words[value]) {
        words[value]++
      } else {
        words[value] = 1
      }
    })
  return Object.entries(words)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 15)
    .map(([x]) => x)
    .join(', ')
}

export function reduceHash(hash) {
  return hash.slice(0, 8) + '...' + hash.slice(-6);
}
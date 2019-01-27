export function asArray(obj) {
  return obj === undefined ? [] : Array.isArray(obj) ? obj : [obj];
}

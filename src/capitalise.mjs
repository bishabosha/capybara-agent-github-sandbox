export function capitalise(text) {
  if (typeof text !== 'string') {
    throw new TypeError('capitalise expects a string');
  }
  if (text.length === 0) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

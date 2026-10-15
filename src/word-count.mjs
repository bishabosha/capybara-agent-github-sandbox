export function countWords(text) {
  const clean = text.trim();
  return clean === '' ? 0 : clean.split(/\s+/u).length;
}

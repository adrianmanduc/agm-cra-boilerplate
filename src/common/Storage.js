export function setItem(key, item) {
  return localStorage.setItem(key, JSON.stringify(item));
}

export function getItem(item) {
  return localStorage.getItem(item).then((value) => JSON.parse(value));
}

export function clear() {
  return localStorage.clear();
}

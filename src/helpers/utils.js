export function stall(ms = 1000, throws) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (throws ? reject(new Error()) : resolve()), ms);
  });
}

export const weakMap = new WeakMap();

// Exporting the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize it with 1
    weakMap.set(endpoint, 1);
  } else {
    // If it exists, increment the count
    const count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count + 1);
  }
}

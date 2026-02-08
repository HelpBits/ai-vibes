# Performance

## Purpose

Define performance expectations and optimization guidelines for AI-generated code.

## Do

- **Measure before optimizing** – use profilers and benchmarks
- **Use appropriate data structures** – Map for lookups, Set for uniqueness, Array for ordered data
- **Cache expensive operations** – memoize, cache API calls, precompute when possible
- **Avoid unnecessary re-renders** – React.memo, useMemo, useCallback where appropriate
- **Lazy load when possible** – code splitting, dynamic imports, lazy components
- **Optimize loops** – avoid nested loops with large datasets, use early returns
- **Use efficient algorithms** – consider Big O complexity
- **Debounce/throttle** – for frequent events (scroll, resize, input)
- **Optimize images** – compress, use appropriate formats, lazy load
- **Monitor bundle size** – keep dependencies lean

## Don't

- **Don't premature optimize** – optimize hot paths only after measuring
- **Don't block the main thread** – use Web Workers for heavy computation
- **Don't fetch in loops** – batch API calls, use Promise.all
- **Don't ignore memory leaks** – clean up event listeners, timers, subscriptions
- **Don't load everything upfront** – use pagination, infinite scroll, virtualization
- **Don't ignore Core Web Vitals** – LCP, FID, CLS matter for UX

## Examples

### ✅ Good: Memoization

```javascript
const cache = new Map();

function expensiveOperation(key) {
  if (cache.has(key)) return cache.get(key);

  const result = /* expensive computation */;
  cache.set(key, result);
  return result;
}
```

### ❌ Bad: Repeated computation

```javascript
function expensiveOperation(key) {
  return /* expensive computation every time */;
}
```

### ✅ Good: Batch API calls

```javascript
const userIds = [1, 2, 3, 4, 5];
const users = await fetchUsers(userIds); // Single request
```

### ❌ Bad: N+1 queries

```javascript
const users = [];
for (const id of userIds) {
  users.push(await fetchUser(id)); // 5 separate requests!
}
```

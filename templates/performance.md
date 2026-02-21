# Performance

## Purpose

Define performance expectations and optimization guidelines for AI-generated code.

## Do

- **Measure before optimizing** – use profilers and benchmarks; don't guess
- **Cache expensive operations** – memoize, cache API calls, precompute when possible
- **Lazy load when possible** – code splitting, dynamic imports, deferred execution
- **Debounce/throttle** – for frequent events (scroll, resize, input)
- **Clean up after yourself** – remove event listeners, timers, and subscriptions when done

## Don't

- **Don't fetch in loops** – batch API calls, use Promise.all
- **Don't block the main thread** – use background workers for heavy computation
- **Don't load everything upfront** – paginate or virtualize large datasets

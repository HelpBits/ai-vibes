# Documentation

## Purpose

Define documentation standards for AI-generated code.

## Do

- **Document the "why" not the "what"** – code shows what, comments explain why
- **Add JSDoc for public APIs** – parameters, return types, examples
- **Document complex logic** – algorithms, business rules, non-obvious code
- **Keep README updated** – installation, usage, examples
- **Add inline comments** – for tricky parts, workarounds, TODOs
- **Document breaking changes** – in CHANGELOG or commit messages
- **Include examples** – especially for libraries and utilities
- **Document edge cases** – what assumptions are made
- **Link to related docs** – design docs, tickets, RFCs
- **Keep docs close to code** – avoid docs getting stale

## Don't

- **Don't state the obvious** – `// increment i` is useless
- **Don't let docs drift** – update docs when code changes
- **Don't over-document** – clear code needs fewer comments
- **Don't write novels** – be concise and clear
- **Don't document implementation details** – unless necessary
- **Don't use outdated examples** – test your examples

## Examples

### ✅ Good: Explains "why"

```javascript
// Using setTimeout instead of setInterval because the API call
// can take longer than 5s, which would cause requests to queue up
setTimeout(() => pollAPI(), 5000);
```

### ❌ Bad: States the obvious

```javascript
// Call the API
callAPI();
```

### ✅ Good: JSDoc with examples

```javascript
/**
 * Formats a date for display in the UI
 * @param {Date} date - The date to format
 * @param {string} locale - The locale (e.g., 'en-US', 'es-ES')
 * @returns {string} Formatted date string
 * @example
 *   formatDate(new Date(), 'en-US') // "Jan 1, 2024"
 */
function formatDate(date, locale) {
  return new Intl.DateTimeFormat(locale).format(date);
}
```

### ✅ Good: Complex logic explanation

```javascript
// We're using a binary search here because the data is sorted
// and can be very large (100k+ items). Linear search would be O(n).
// This gives us O(log n) performance.
function binarySearch(arr, target) {
  // ...
}
```

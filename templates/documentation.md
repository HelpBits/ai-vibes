# Documentation

## Purpose

Define documentation standards for AI-generated code.

## Do

- **Document the "why" not the "what"** – code shows what, comments explain why
- **Add JSDoc for public APIs** – parameters, return types, return value
- **Document complex logic** – algorithms, business rules, non-obvious decisions
- **Document breaking changes** – in CHANGELOG or commit messages
- **Keep docs close to code** – avoid docs getting stale

## Don't

- **Don't state the obvious** – `// increment i` is noise
- **Don't let docs drift** – update docs when code changes
- **Don't over-document** – clear code needs fewer comments

## Note

Comments explain WHY, not what. If the reason isn't obvious from the code, explain it:

```javascript
// setTimeout not setInterval: API calls can exceed 5s,
// causing requests to queue up if the previous one hasn't finished.
setTimeout(() => pollAPI(), 5000);
```

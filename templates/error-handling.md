# Error Handling

## Purpose

Define how errors should be handled and reported in AI-generated code.

## Do

- **Use try/catch for async operations** – especially API calls, file I/O
- **Throw meaningful errors** – descriptive messages, include context
- **Use custom error classes** – for domain-specific errors
- **Log errors properly** – include stack traces, context, but not secrets
- **Handle errors at appropriate level** – don't catch too early
- **Provide fallbacks** – graceful degradation when possible
- **Validate inputs early** – fail fast with clear errors
- **Use error boundaries** – in React/UI frameworks
- **Return error objects** – instead of throwing in some cases (Result pattern)
- **Document error cases** – what exceptions can be thrown

## Don't

- **Don't swallow errors** – empty catch blocks hide bugs
- **Don't expose internals** – no stack traces in production to users
- **Don't use errors for control flow** – errors are for exceptional cases
- **Don't log secrets** – no passwords, tokens, PII in error logs
- **Don't ignore promise rejections** – always handle with .catch or try/catch
- **Don't use generic messages** – "Something went wrong" isn't helpful

## Examples

### ✅ Good: Specific error with context

```javascript
async function getUser(userId) {
  if (!userId) {
    throw new Error("userId is required");
  }

  try {
    return await api.fetchUser(userId);
  } catch (error) {
    throw new Error(`Failed to fetch user ${userId}: ${error.message}`);
  }
}
```

### ❌ Bad: Swallowed error

```javascript
async function getUser(userId) {
  try {
    return await api.fetchUser(userId);
  } catch (error) {
    // Silent failure - bug is hidden!
  }
}
```

### ✅ Good: Error boundary (React)

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logError(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

# Error Handling

## Purpose

Define how errors should be handled and reported in AI-generated code.

## Do

- **Throw meaningful errors** – include context: what failed and why
- **Use custom error classes** – for domain-specific errors that callers need to distinguish
- **Handle errors at the right level** – catch where you can meaningfully recover, not earlier
- **Fail fast** – validate inputs at the entry point, throw immediately

## Don't

- **Don't swallow errors** – empty catch blocks hide bugs
- **Don't use errors for control flow** – errors are for exceptional cases
- **Don't use generic messages** – "Something went wrong" gives no actionable information

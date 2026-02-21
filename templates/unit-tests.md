# Unit Tests

## Purpose

Define how AI should write and maintain unit tests in this repo.

## Do

- **Cover edge cases** – null, undefined, empty, boundary values
- **Test error paths** – not just happy paths
- **Keep tests fast** – mock external dependencies (APIs, databases)
- **Test one thing per test** – one assertion, one reason to fail

## Don't

- **Don't test implementation details** – test behavior, not private methods
- **Don't write flaky tests** – avoid timeouts, race conditions
- **Don't mock everything** – test real logic when possible

## Test structure

Use Given / When / Then:

```javascript
it("returns error given duplicate email", async () => {
  // Given
  await createUser({ email: "test@example.com" });

  // When
  const result = createUser({ email: "test@example.com" });

  // Then
  await expect(result).rejects.toThrow("Email already exists");
});
```

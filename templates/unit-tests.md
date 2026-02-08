# Unit Tests

## Purpose

Define how AI should write and maintain unit tests in this repo.

## Do

- **Update tests when behavior changes** – tests should reflect current expected behavior
- **Cover edge cases** – empty inputs, null, undefined, boundary values
- **Test error paths** – not just happy paths
- **Use descriptive test names** – `it('should return 404 when user not found')`
- **Keep tests fast** – mock external dependencies (APIs, databases)
- **Test one thing per test** – focused assertions
- **Use test fixtures** – reusable test data
- **Assert meaningful outputs** – not just "doesn't crash"

## Don't

- **Don't test implementation details** – test behavior, not private methods
- **Don't write flaky tests** – avoid timeouts, race conditions
- **Don't skip failing tests** – fix or remove them
- **Don't copy-paste tests** – extract shared setup
- **Don't mock everything** – test real logic when possible
- **Don't ignore test failures** – they indicate real issues

## Examples

### ✅ Good: Behavior-focused test

```javascript
describe("UserService", () => {
  it("should throw error when creating user with duplicate email", async () => {
    await createUser({ email: "test@example.com" });

    await expect(createUser({ email: "test@example.com" })).rejects.toThrow(
      "Email already exists",
    );
  });
});
```

### ✅ Good: Edge case coverage

```javascript
describe("calculateDiscount", () => {
  it("should return 0 for negative prices", () => {
    expect(calculateDiscount(-10)).toBe(0);
  });

  it("should return 0 for null price", () => {
    expect(calculateDiscount(null)).toBe(0);
  });

  it("should handle zero price", () => {
    expect(calculateDiscount(0)).toBe(0);
  });
});
```

### ❌ Bad: Testing implementation details

```javascript
it("should call internal _parseData method", () => {
  const spy = jest.spyOn(service, "_parseData");
  service.process(data);
  expect(spy).toHaveBeenCalled(); // testing internals, not behavior
});
```

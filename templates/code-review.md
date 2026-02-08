# Code Review

## Purpose

Define standards for code reviews and what to look for when reviewing AI-generated code.

## Do

- **Check for security issues** – SQL injection, XSS, hardcoded secrets
- **Verify error handling** – proper try/catch, error messages, fallbacks
- **Review test coverage** – edge cases covered, meaningful assertions
- **Check naming consistency** – follows repo conventions
- **Verify documentation** – complex logic explained, JSDoc/comments where needed
- **Look for duplication** – reusable code extracted to functions/modules
- **Check dependencies** – necessary, up-to-date, no suspicious packages
- **Verify accessibility** – semantic HTML, ARIA labels, keyboard navigation
- **Check performance** – no obvious bottlenecks, efficient algorithms
- **Review git history** – clear commit messages, logical commits

## Don't

- **Don't approve blindly** – actually read and understand the changes
- **Don't nitpick style** – let linters/formatters handle it
- **Don't block on preferences** – focus on correctness and maintainability
- **Don't merge with unresolved comments** – address or explicitly defer
- **Don't skip testing** – actually run the code locally
- **Don't assume AI is always right** – LLMs make mistakes

## Examples

### ✅ Good: Constructive feedback

```
This function could throw if userId is undefined.
Consider adding validation:
  if (!userId) throw new Error('userId required');
```

### ❌ Bad: Vague criticism

```
This doesn't look right
```

### ✅ Good: Security catch

```
⚠️ SQL injection risk here - use parameterized queries:
  db.query('SELECT * FROM users WHERE id = ?', [userId])
```

# Code Review

## Purpose

Define standards for code reviews and what to look for when reviewing AI-generated code.

## Do

- **Check for security issues** – SQL injection, XSS, hardcoded secrets
- **Verify error handling** – proper try/catch, error messages, fallbacks
- **Review test coverage** – edge cases covered, meaningful assertions
- **Check naming consistency** – follows repo conventions
- **Look for duplication** – reusable code extracted to functions/modules
- **Check dependencies** – necessary, up-to-date, no suspicious packages

## Don't

- **Don't nitpick style** – let linters/formatters handle it
- **Don't block on preferences** – focus on correctness and maintainability
- **Don't merge with unresolved comments** – address or explicitly defer
- **Don't assume AI is always right** – LLMs make mistakes

## Review Comment Format

Name the issue, explain the risk, suggest the fix:

```
This can throw if userId is undefined.
Fix: if (!userId) throw new Error('userId required');

⚠️ SQL injection risk — use parameterized queries:
  db.query('SELECT * FROM users WHERE id = ?', [userId])
```

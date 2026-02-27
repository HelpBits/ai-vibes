# Maintainability

## Purpose

Define standards that keep the codebase readable, consistent, and easy to change.

## Do

- **Keep functions small** – one function, one job; split when it needs a comment to explain what it does
- **One level of abstraction per function** – a function should either orchestrate other functions OR handle low-level detail, never both; the moment it mixes levels, extract the low-level part into a named helper
- **Keep files focused** – one responsibility per file
- **Use guard clauses** – return early to avoid deep nesting
- **Name constants** – no magic numbers or strings inline
- **Delete dead code** – unused code belongs in Git history, not the codebase
- **Limit function parameters** – prefer an options object for 3+ params
- **Enforce formatting with tooling** – linter/formatter decisions are not for code review

## Don't

- **Don't repeat logic** – if you write it twice, extract it

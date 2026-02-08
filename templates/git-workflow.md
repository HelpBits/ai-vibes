# Git Workflow

## Purpose

Define Git commit and branch standards for AI-generated code changes.

## Do

- **Write clear commit messages** – use conventional commits format
- **Make atomic commits** – one logical change per commit
- **Use descriptive branch names** – feature/add-login, fix/memory-leak
- **Keep commits small** – easier to review and revert
- **Test before committing** – ensure code works
- **Write commit body** – for complex changes, explain why
- **Reference issues** – "Fixes #123" in commit message
- **Squash before merge** – keep main branch clean (if team convention)
- **Pull before push** – avoid merge conflicts
- **Use feature branches** – never commit directly to main

## Don't

- **Don't commit secrets** – use .gitignore, check before push
- **Don't commit commented code** – delete it, Git has history
- **Don't commit build artifacts** – node_modules, dist/, .env
- **Don't use vague messages** – "fix bug", "update code"
- **Don't commit WIP** – to shared branches
- **Don't rewrite public history** – no force push to main/shared branches
- **Don't make giant commits** – breaks down to reviewable chunks

## Examples

### ✅ Good: Conventional commit

```
feat: add user authentication with JWT

Implements login, logout, and token refresh endpoints.
Uses bcrypt for password hashing and validates tokens
on protected routes.

Fixes #45
```

### ❌ Bad: Vague message

```
updated stuff
```

### ✅ Good: Branch naming

```
feature/user-authentication
fix/login-button-spacing
refactor/api-client-structure
docs/update-readme
```

### ❌ Bad: Branch naming

```
my-branch
test
new-stuff
```

### Conventional Commit Types

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting, no code change
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance tasks
- `perf:` Performance improvement

```

```

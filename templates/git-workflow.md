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
- **Open a PR before merging** – every change gets a review, no direct merges to main
- **Use draft PRs for WIP** – signal the work isn't ready without blocking the branch
- **Rebase before push** – use `git pull --rebase` to avoid unnecessary merge commits
- **Agree on a merge strategy** – squash, rebase, or merge commit; pick one and stick to it
- **Use feature branches** – never commit directly to main

## Don't

- **Don't commit secrets** – use .gitignore, check before push
- **Don't commit commented code** – delete it, Git has history
- **Don't commit build artifacts** – node_modules, dist/, .env
- **Don't use vague messages** – "fix bug", "update code"
- **Don't commit WIP** – to shared branches
- **Don't rewrite public history** – no force push to main/shared branches
- **Don't make giant commits** – breaks down to reviewable chunks

## Commit Format

Use conventional commits. This enables automated changelogs and version bumps.

```
<type>(<optional scope>): <short summary>

<body: explain why, not what — for non-trivial changes>

<footer: Fixes #123, Breaking changes, etc.>
```

**Types:** `feat` | `fix` | `refactor` | `perf` | `test` | `docs` | `style` | `ci` | `build` | `chore` | `revert`

**Branch names:** `<type>/<short-description>` — e.g. `feature/user-auth`, `fix/login-redirect`, `refactor/api-client`

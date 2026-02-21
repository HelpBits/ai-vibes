# Git Workflow

## Purpose

Define Git commit and branch standards for AI-generated code changes.

## Do

- **Make atomic commits** – one logical change per commit
- **Write commit body for non-trivial changes** – explain why, not what
- **Reference issues** – "Fixes #123" in commit message or footer
- **Open a PR before merging** – every change gets a review, no direct merges to main
- **Use draft PRs for WIP** – signal work isn't ready without blocking the branch
- **Rebase before push** – use `git pull --rebase` to avoid noise merge commits
- **Agree on a merge strategy** – squash, rebase, or merge commit; pick one and enforce it

## Don't

- **Don't commit build artifacts** – node_modules, dist/, .env
- **Don't rewrite public history** – no force push to main or shared branches

## Commit Format

Use conventional commits. This enables automated changelogs and version bumps.

```
<type>(<optional scope>): <short summary>

<body: explain why, not what — for non-trivial changes>

<footer: Fixes #123, Breaking changes, etc.>
```

**Types:** `feat` | `fix` | `refactor` | `perf` | `test` | `docs` | `style` | `ci` | `build` | `chore` | `revert`

**Branch names:** `<type>/<short-description>` — e.g. `feature/user-auth`, `fix/login-redirect`

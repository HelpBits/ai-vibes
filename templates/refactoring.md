# Refactoring

## Purpose

Define how to safely clean up a codebase without breaking behavior or overloading context.

## Do

- **Work one file at a time** – complete, confirm, then move to the next; never refactor across multiple files in one pass
- **Apply the boy scout rule** – leave code you touch cleaner than you found it; ignore code you don't touch
- **Separate refactoring from behavior changes** – never mix a rename, extract, or restructure with a feature or fix; keep them in separate commits
- **Check all callsites before renaming** – if a name is used in more than one place, verify every reference before changing it
- **Extract incrementally** – one concept per extraction; don't chain multiple refactors in a single step

## Don't

- **Don't rewrite** – refactoring is restructuring, not rewriting; if the logic is wrong, fix it separately

## Note

When asked to refactor a file: read it, identify the single highest-value change, apply it, stop. Ask before continuing to the next file or the next change.

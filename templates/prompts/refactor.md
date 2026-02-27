<!--
  Refactoring strategy for this repo.
  Paste into your AI to start a guided refactoring session.
-->

You are a senior software engineer refactoring this codebase. Follow this strategy in order. Do not skip phases.

## Rules

Before starting, read these rule files — they define the standards everything will be measured against:

- `vibes/refactoring.md` — refactoring constraints, approach, and clean code targets
- `vibes/maintainability.md` — what good, maintainable code looks like here (includes single abstraction level rule)
- `vibes/architecture.md` — architectural patterns, single responsibility, and DRY for classes/components
- `vibes/naming.md` — naming standards
- `vibes/security.md` — security standards
- `vibes/error-handling.md` — error handling standards
- `vibes/performance.md` — performance standards (read if present)
- `vibes/logging.md` — logging standards (read if present)

---

## Phase 1 — Understand

Read the entire codebase. Do not suggest or change anything yet.

Build a picture of:

- What the project does and its overall purpose
- How it is structured — entry points, key modules, data flow
- What patterns are already established in the code
- What dependencies exist and how they interact
- Where complexity lives

---

## Phase 2 — Assess

Cross-reference what you found against the rule files. Identify problems grouped **by theme** — not file by file, but across the whole codebase.

### Clean Code Lens

Before scanning for general issues, apply this checklist to every function, class, and component you found:

**Functions:**

- [ ] Does it do exactly one thing?
- [ ] Does it operate at a single level of abstraction? (orchestration OR detail — never both)
- [ ] Is it short enough that no part needs an inline comment to explain what it does?
- [ ] Does it have 3 or fewer parameters? (if not, should it take an options object?)

**Classes and components:**

- [ ] Does it have exactly one reason to change?
- [ ] Can it be described in one sentence without the word "and"?
- [ ] Is any logic copy-pasted from another class or component? (DRY violation)
- [ ] Does it mix concerns — e.g. presentation + data fetching, business logic + formatting?

### Themes to identify

- **Single abstraction violations** — functions that mix high-level orchestration with low-level detail in the same body
- **Single responsibility violations** — classes or components that do more than one thing or have more than one reason to change
- **DRY violations** — duplicated logic across classes, components, or files that should live in a shared utility, hook, or service
- **Inconsistent naming patterns** — across multiple files
- **Missing or inconsistent error handling** — across a whole layer
- **Architectural violations** — business logic leaking into the wrong layer
- **Security gaps** — in input handling or secret management
- **Dead code** — functions, variables, imports never used

For each theme, note:

- What the problem is
- How many files are affected
- Risk level of fixing it: **low** (rename, delete) / **medium** (extract, restructure) / **high** (cross-cutting change)

---

## Phase 3 — Safety Check

Before proposing any changes:

1. Check whether tests exist for the files in scope
2. If no tests are found, surface this clearly:

   > ⚠️ No tests found covering these files. Refactoring without tests means there is no safety net to catch unintended behavior changes. Proceed anyway, or write characterization tests first?

3. Wait for the user to respond before continuing
4. If the user accepts the risk, proceed. If not, help them write characterization tests first using `vibes/unit-tests.md` as the standard.

---

## Phase 4 — Plan

Present a prioritized improvement plan ordered by **impact vs risk** — highest value, lowest risk first.

For each item in the plan:

- Theme name
- Problem summary
- Files affected
- Risk level
- Proposed approach (rename / extract / restructure / delete)

**Stop here. Do not make any changes yet. Wait for the user to approve the plan before proceeding.**

---

## Phase 5 — Execute

Once the plan is approved, work through it one theme at a time:

1. Apply the change for that theme across all affected files
2. Stop and summarize exactly what was changed
3. Ask for confirmation before moving to the next theme

**Never mix refactoring with behavior changes.** If you discover a bug or missing feature while refactoring, flag it separately — do not fix it as part of this session. Structural changes and behavior changes belong in separate commits.

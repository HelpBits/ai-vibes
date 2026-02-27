<!--
  Documentation strategy for this repo.
  Paste into your AI to start a guided documentation session.
-->

You are a senior software engineer writing documentation for this codebase. Follow this strategy in order. Do not skip phases.

## Rules

Before starting, read these rule files — they define the documentation standards for this repo:

- `vibes/documentation.md` — what good documentation looks like here
- `vibes/naming.md` — naming conventions (helps identify names that need clarification)
- `vibes/architecture.md` — architectural patterns (read if present, helps document structure)

---

## Phase 1 — Understand

Read the entire codebase. Do not write anything yet.

Build a picture of:

- What the project does and its overall purpose
- How it is structured — entry points, key modules, data flow
- What is already documented (inline comments, JSDoc, README sections)
- Where the complexity, non-obvious decisions, and tricky logic live

---

## Phase 2 — Assess

Identify documentation gaps grouped by type:

- **Missing public API docs** — exported functions or classes with no JSDoc (parameters, return types, purpose)
- **Complex logic with no explanation** — algorithms, business rules, non-obvious decisions that need a "why"
- **Misleading or stale comments** — comments that no longer match what the code actually does
- **Missing README sections** — setup instructions, architecture overview, key concepts, environment variables
- **Undocumented decisions** — code that exists for a specific reason no one would guess from reading it

For each gap, note what is missing and where it lives.

---

## Phase 3 — Plan

Present a prioritized documentation plan ordered by value to a new developer — what would most help someone unfamiliar with the codebase understand it quickly.

For each item:

- What needs documenting
- Where it lives (file and function/section)
- What type of doc is needed (inline comment / JSDoc / README section)

**Stop here. Do not write anything yet. Wait for the user to approve the plan before proceeding.**

---

## Phase 4 — Execute

Once the plan is approved, work through it one item at a time:

1. Write the documentation for that item
2. Show what was added
3. Ask for confirmation before moving to the next item

Follow the standard from `vibes/documentation.md` throughout: document the **why**, not the **what**. Code already shows what it does — comments exist to explain why it was written that way, what constraint it works around, or what would break if you changed it.

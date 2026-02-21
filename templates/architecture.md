# Architecture

## Purpose

Define architectural patterns and organization principles for this repo.

## Do

- **Follow existing patterns** – if the repo has a structure, maintain it
- **Put code in the right place** – controllers, services, models, utils
- **Reuse existing utilities** – check before creating new helper functions
- **Separate concerns** – business logic, data access, presentation in distinct layers
- **Use dependency injection** – for testability

## Don't

- **Don't create new patterns** – without justification or discussion
- **Don't tightly couple modules** – avoid circular dependencies
- **Don't bypass abstractions** – use the data layer, don't query directly from controllers

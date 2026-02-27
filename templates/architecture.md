# Architecture

## Purpose

Define architectural patterns and organization principles for this repo.

## Do

- **Follow existing patterns** – if the repo has a structure, maintain it
- **Put code in the right place** – controllers, services, models, utils
- **Reuse existing utilities** – check before creating new helper functions
- **Separate concerns** – business logic, data access, presentation in distinct layers
- **One responsibility per class or component** – a class or component should have exactly one reason to change; if describing it requires the word "and", it should be split
- **DRY at the class and component level** – logic shared between two or more classes or components belongs in a shared utility, hook, or service; duplication at this level compounds and becomes the hardest kind to fix later
- **Use dependency injection** – for testability

## Don't

- **Don't create new patterns** – without justification or discussion
- **Don't tightly couple modules** – avoid circular dependencies
- **Don't bypass abstractions** – use the data layer, don't query directly from controllers

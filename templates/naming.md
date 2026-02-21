# Naming Conventions

## Purpose

Define naming standards for consistency across the codebase.

## Do

- **Be consistent with existing patterns** – if the repo uses `fetch*`, don't introduce `get*`
- **Match domain language** – use terms from the product and business, not generic tech terms
- **Use clear boolean names** – `isActive`, `hasPermission`, `canEdit`

## Don't

- **Don't use misleading names** – `get*` should not modify state; `create*` should not read
- **Don't use generic names** – `handler`, `manager`, `helper`, `utils` without context

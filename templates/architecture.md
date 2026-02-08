# Architecture

## Purpose

Define architectural patterns and organization principles for this repo.

## Do

- **Follow existing patterns** – if the repo has a structure, maintain it
- **Put code in the right place** – controllers, services, models, utils
- **Reuse existing utilities** – check before creating new helper functions
- **Keep modules focused** – single responsibility principle
- **Minimize dependencies** – between modules
- **Document architecture decisions** – why, not just what
- **Use dependency injection** – for testability
- **Separate concerns** – business logic, data access, presentation

## Don't

- **Don't create new patterns** – without justification or discussion
- **Don't duplicate functionality** – search for existing solutions first
- **Don't tightly couple modules** – avoid circular dependencies
- **Don't mix layers** – keep business logic out of controllers
- **Don't bypass abstractions** – use the data layer, don't query directly
- **Don't ignore folder structure** – respect the repo's organization

## Examples

### ✅ Good: Layered architecture

```javascript
// controller/userController.js
export async function getUser(req, res) {
  const user = await userService.findById(req.params.id);
  res.json(user);
}

// service/userService.js
export async function findById(id) {
  return userRepository.findById(id);
}

// repository/userRepository.js
export async function findById(id) {
  return db.query("SELECT * FROM users WHERE id = ?", [id]);
}
```

### ❌ Bad: Mixed concerns

```javascript
// controller/userController.js
export async function getUser(req, res) {
  // Don't put database queries directly in controllers
  const user = await db.query("SELECT * FROM users WHERE id = ?", [
    req.params.id,
  ]);
  res.json(user);
}
```

### ✅ Good: Reusing utilities

```javascript
import { formatDate } from "../utils/date";
import { validateEmail } from "../utils/validation";

const formattedDate = formatDate(user.createdAt);
```

### ❌ Bad: Duplicating utilities

```javascript
// Creating new date formatting when one exists
function myDateFormatter(date) {
  // duplicates existing formatDate utility
}
```

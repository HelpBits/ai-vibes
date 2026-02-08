# Naming Conventions

## Purpose

Define naming standards for consistency across the codebase.

## Do

- **Use descriptive names** – `getUserById` not `get`
- **Follow language conventions** – camelCase for JS/TS, snake_case for Python
- **Be consistent** – if the repo uses `fetch*`, don't add `get*` functions
- **Use plural for collections** – `users`, `items`
- **Use verb-noun for functions** – `createUser`, `deletePost`
- **Use clear boolean names** – `isActive`, `hasPermission`, `canEdit`
- **Avoid abbreviations** – unless widely known (HTTP, API, ID)
- **Match domain language** – use terms from the product/business

## Don't

- **Don't be cryptic** – `a`, `tmp`, `data2`
- **Don't use misleading names** – `get*` should not modify state
- **Don't mix conventions** – pick one and stick with it
- **Don't use generic names** – `handler`, `manager`, `helper` without context
- **Don't overuse prefixes** – `myFunction`, `theVariable`

## Examples

### ✅ Good: Clear function names

```javascript
function createUser(userData) {}
function deletePost(postId) {}
function isAuthenticated(user) {}
```

### ❌ Bad: Vague names

```javascript
function process(d) {} // what does this do?
function handle() {} // handle what?
function doStuff() {} // too generic
```

### ✅ Good: Descriptive variables

```javascript
const activeUsers = users.filter((u) => u.isActive);
const maxRetries = 3;
const apiBaseUrl = "https://api.example.com";
```

### ❌ Bad: Unclear variables

```javascript
const arr = users.filter((u) => u.isActive); // what kind of array?
const num = 3; // what number?
const url = "https://api.example.com"; // which URL?
```

### ✅ Good: Boolean naming

```javascript
const isLoading = true;
const hasPermission = user.role === "admin";
const canDelete = isOwner || isAdmin;
```

### ❌ Bad: Unclear booleans

```javascript
const loading = true;      // could be a loading indicator element
const permission = true;   // which permission?
const delete = true;       // "delete" is ambiguous
```

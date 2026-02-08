# API Design

## Purpose

Define standards for designing APIs (REST, GraphQL, internal modules).

## Do

- **Use RESTful conventions** – GET (read), POST (create), PUT/PATCH (update), DELETE
- **Version your API** – /v1/, /v2/, or header-based versioning
- **Use plural nouns** – `/users`, `/posts`, not `/user`, `/post`
- **Return proper HTTP status codes** – 200 success, 201 created, 400 bad request, 404 not found, 500 error
- **Include pagination** – for list endpoints (limit, offset or cursor)
- **Validate inputs** – return 400 with clear error messages
- **Use consistent naming** – camelCase or snake_case, pick one
- **Include timestamps** – createdAt, updatedAt for resources
- **Document your API** – OpenAPI/Swagger specs
- **Handle errors gracefully** – return error objects with code and message

## Don't

- **Don't use verbs in URLs** – use HTTP methods instead
- **Don't expose internal IDs** – use UUIDs or opaque identifiers
- **Don't return different structures** – for same endpoint in different states
- **Don't forget rate limiting** – protect against abuse
- **Don't expose stack traces** – in production error responses
- **Don't break backward compatibility** – without versioning
- **Don't use GET for mutations** – GET should be idempotent

## Examples

### ✅ Good: RESTful design

```
GET    /v1/users          # List users
GET    /v1/users/123      # Get user
POST   /v1/users          # Create user
PATCH  /v1/users/123      # Update user
DELETE /v1/users/123      # Delete user
```

### ❌ Bad: Non-RESTful

```
GET  /getUsers
POST /createUser
POST /deleteUser
```

### ✅ Good: Error response

```json
{
  "error": {
    "code": "INVALID_EMAIL",
    "message": "Email address is not valid",
    "field": "email"
  }
}
```

### ❌ Bad: Vague error

```json
{
  "error": "Bad request"
}
```

### ✅ Good: Pagination

```json
{
  "data": [...],
  "pagination": {
    "total": 1000,
    "page": 1,
    "pageSize": 20,
    "totalPages": 50
  }
}
```

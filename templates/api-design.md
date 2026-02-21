# API Design

## Purpose

Define standards for designing APIs (REST, GraphQL, internal modules).

## Do

- **Version your API** – /v1/, /v2/, or header-based; decide and be consistent
- **Use consistent naming** – camelCase or snake_case across all endpoints; pick one
- **Include pagination** – for all list endpoints; use limit/offset or cursor
- **Document your API** – maintain an OpenAPI/Swagger spec

## Don't

- **Don't return different structures** – same endpoint must always return the same shape
- **Don't break backward compatibility** – add a new version instead
- **Don't expose stack traces** – in production error responses

## Response formats

Use consistent shapes across all endpoints:

**Error:**

```json
{
  "error": {
    "code": "INVALID_EMAIL",
    "message": "Email is not valid",
    "field": "email"
  }
}
```

**Paginated list:**

```json
{
  "data": [],
  "pagination": { "total": 1000, "page": 1, "pageSize": 20, "totalPages": 50 }
}
```

# Security

## Purpose

Define security expectations for AI-generated code in this repo.

## Do

- **Never commit secrets** – no API keys, tokens, passwords in code or logs
- **Validate all inputs** – especially user-provided data, query params, form fields
- **Use environment variables** for secrets (e.g., `.env` files, not committed)
- **Sanitize outputs** – prevent XSS, SQL injection, command injection
- **Follow least privilege** – grant minimal necessary permissions
- **Keep dependencies updated** – regularly audit and update packages
- **Use secure defaults** – HTTPS, secure cookies, strong crypto
- **Log security events** – failed auth attempts, suspicious activity (without logging sensitive data)

## Don't

- **Don't hardcode credentials** – ever
- **Don't trust user input** – always validate and sanitize
- **Don't use weak crypto** – no MD5, SHA1 for passwords; use bcrypt, argon2, or scrypt
- **Don't expose stack traces** – in production error messages
- **Don't add risky dependencies casually** – vet packages before installing
- **Don't skip security headers** – CSP, HSTS, X-Frame-Options, etc.

## Examples

### ✅ Good: Environment variables

```javascript
const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error("API_KEY not configured");
}
```

### ❌ Bad: Hardcoded secret

```javascript
const apiKey = "sk-1234567890abcdef"; // NEVER do this
```

### ✅ Good: Input validation

```javascript
function getUser(userId) {
  if (!/^[0-9]+$/.test(userId)) {
    throw new Error("Invalid user ID");
  }
  return db.query("SELECT * FROM users WHERE id = ?", [userId]);
}
```

### ❌ Bad: SQL injection risk

```javascript
function getUser(userId) {
  return db.query(`SELECT * FROM users WHERE id = ${userId}`); // vulnerable
}
```

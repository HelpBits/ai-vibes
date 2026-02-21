# Security

## Purpose

Define security expectations for AI-generated code in this repo.

## Do

- **Validate and sanitize all inputs** – user data, query params, form fields; prevent XSS, SQL injection
- **Use environment variables for secrets** – never in code, never committed
- **Log security events** – failed auth, suspicious activity; never log tokens, passwords, or PII
- **Use strong crypto** – bcrypt, argon2, or scrypt for passwords; never MD5 or SHA1

## Don't

- **Don't expose stack traces** – in production error messages
- **Don't add unvetted dependencies** – audit packages before installing
- **Don't skip security headers** – CSP, HSTS, X-Frame-Options

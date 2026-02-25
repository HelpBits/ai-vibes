# Logging

## Purpose

Define what, when, and how to log so production signals remain useful and clean.

## Do

- **Use structured logging** – emit JSON with consistent fields: `level`, `message`, `timestamp`, and relevant context
- **Log at boundaries** – service entry/exit, external calls, job start/completion; not inside every function
- **Include enough context to diagnose** – request ID, resource ID, operation name; enough to reproduce without loading the full file

## Don't

- **Don't log inside loops** – aggregate and log once after the loop
- **Don't use console.log in production code** – use a structured logger

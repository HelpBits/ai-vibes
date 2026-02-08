# Contributing to ai-vibes

Thank you for your interest in contributing to ai-vibes! This document provides guidelines for contributing to the project.

## Code of Conduct

Be respectful, inclusive, and constructive in all interactions.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/ai-vibes/ai-vibes/issues)
2. If not, create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Your environment (Node version, OS)

### Suggesting Features

1. Check existing issues and discussions
2. Create a new issue with:
   - Clear use case
   - Expected behavior
   - Why it would be valuable

### Submitting Code

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Test your changes: `npm run build && npm link`
5. Commit with clear messages: `git commit -m "feat: add new feature"`
6. Push to your fork: `git push origin feature/my-feature`
7. Open a Pull Request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/ai-vibes.git
cd ai-vibes

# Install dependencies
npm install

# Build
npm run build

# Test locally
npm link
cd /tmp/test-project
ai-vibes init
```

## Adding a New Rule Template

**Architecture:** Templates are stored as markdown files in `templates/` and automatically embedded during build.

To add a new rule template (e.g., `database.md`):

### 1. Create the markdown file

Create `templates/database.md`:

````markdown
# Database

## Purpose

Define database interaction standards for AI-generated code.

## Do

- Use parameterized queries to prevent SQL injection
- Use transactions for multi-step operations
- Add proper indexes for performance

## Don't

- Don't use string concatenation for queries
- Don't ignore database errors
- Don't fetch more data than needed

## Examples

### ✅ Good: Parameterized query

\```javascript
const user = await db.query('SELECT \* FROM users WHERE id = ?', [userId]);
\```

### ❌ Bad: String concatenation

\```javascript
const user = await db.query(`SELECT \* FROM users WHERE id = ${userId}`);
\```
````

### 2. Add metadata to rules.json

Edit `templates/rules.json` and add your rule definition:

```json
{
  "rules": [
    {
      "id": "database",
      "filename": "database.md",
      "minimal": false,
      "modes": ["codegen", "review"]
    }
  ]
}
```

### 3. Update the generator script

Edit `scripts/generate-templates.js` and add your template filename to the array:

```javascript
const templateFiles = [
  "security.md",
  "unit-tests.md",
  "naming.md",
  "architecture.md",
  "performance.md",
  "code-review.md",
  "error-handling.md",
  "documentation.md",
  "accessibility.md",
  "api-design.md",
  "git-workflow.md",
  "database.md", // Add here
];
```

### 4. Build and test

```bash
npm run build  # This automatically runs generate script
ai-vibes init --dir test-output
ls test-output/  # Should include database.md
```

That's it! The template is now fully integrated. The build process automatically:

1. Reads your markdown file
2. Embeds it into the compiled JavaScript
3. Makes it available via the CLI

This scalable architecture means adding new templates doesn't require modifying any TypeScript code - just create a markdown file and add metadata.

## Code Style

- Use TypeScript
- Follow existing code patterns
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:

- `feat: add performance rule template`
- `fix: handle invalid directory names`
- `docs: update README with new examples`

## Testing

Currently, testing is manual. To test:

1. Build the project: `npm run build`
2. Link locally: `npm link`
3. Test all scenarios:
   - `ai-vibes init`
   - `ai-vibes init --minimal`
   - `ai-vibes init --force`
   - `ai-vibes init --dir custom-dir`
   - `ai-vibes init --manifest custom.yaml`

## Pull Request Process

1. Update README.md if adding features
2. Update DEVELOPMENT.md if changing dev workflow
3. Ensure your code builds successfully
4. Test manually with various options
5. Describe your changes clearly in the PR
6. Link related issues

## Questions?

Open an issue or discussion on GitHub!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

# ai-vibes

> Give your AI the vibe check it deserves.

Your AI writes amazing code. Too bad it looks nothing like the rest of your codebase. 🤦

**ai-vibes** scaffolds AI steering rules in 30 seconds. Define your team's standards once, every AI follows them. Think `.editorconfig` but for AI behavior.

## Quick Start

```bash
npx ai-vibes init
```

That's it. Answer two prompts (or press Enter). You get a `vibes.json` manifest and markdown rule files.

**Want minimal?** (3 files instead of 11)

```bash
npx ai-vibes init --minimal
```

**Prefer YAML?**

```bash
npx ai-vibes init --manifest vibes.yaml
```

**Requirements:** Node.js 18+

> 🎉 **Saved you 30 minutes?** This tool is free, but coffee isn't. If ai-vibes made your day better, [buy me a coffee ☕](https://www.buymeacoffee.com/helpbits). I promise to use it for actual coffee (or debugging at 3am, which requires coffee).

## What You Get

**Minimal mode** (3 files):

- 🔒 `security.md` - Never commit secrets, validate inputs
- ✅ `unit-tests.md` - Test behavior, cover edge cases
- 📝 `naming.md` - Consistent naming conventions

**Full mode** (11 files) - adds:

- Architecture, Performance, Code Review, Error Handling, Documentation, Accessibility, API Design, Git Workflow

All templates are **starting points**. Edit them to match your team's actual standards.

## How to Use With AI

**GitHub Copilot:**

```
@workspace Follow the guidelines in vibes.json
```

**Cursor/Windsurf:**

```
Create an API endpoint following vibes.json
```

**Claude/ChatGPT:**

```bash
cat vibes.json vibes/*.md
# Paste into your conversation
```

**Pro tip:** File paths in JSON are clickable in VS Code. No more hunting for files.

## What It Does

✅ Creates `vibes.json` manifest (clickable paths in VS Code!)  
✅ Creates rule documents in Markdown  
✅ Gives you a place to say "No, AI, we don't do that here"

Supports both JSON and YAML formats.

## What It Doesn't Do

❌ Validate rules (it's not a linter)  
❌ Enforce rules (you still need code review)  
❌ Integrate with AI tools directly (bring your own AI)  
❌ Make coffee ☕

## Why This Exists

Every AI can read Markdown. Not every AI follows your coding standards.

This tool gives you a single place to define those standards. Edit the templates to match your team's reality, commit them to version control, and reference them when working with any AI assistant.

It's intentionally minimal. You write the rules, AI follows them.

## FAQ

**Do I need to install this?**  
No. `npx ai-vibes init` runs without installing. One command, zero commitment.

**Can I customize the templates?**  
That's literally the entire point. These are starting points, not commandments carved in stone.

**Should I commit these files?**  
Yes! Version control = time travel. Future-you will thank past-you for documenting these decisions.

**Does this work with [my AI tool]?**  
If your AI can read Markdown (spoiler: they all can), then yes. Tool-agnostic by design.

**Why JSON by default?**  
Clickable file paths in VS Code. But YAML works too if you're into that.

**Will you actually use my coffee money for coffee?**  
Yes. And open source development. Which requires coffee. It's a virtuous cycle.

## Buy Me a Coffee? ☕

**Plot twist:** This tool saved you from writing 11 markdown files by hand.

That's at least 30 minutes you didn't spend googling "security best practices example markdown."

If ai-vibes made your life easier:

- ☕ [Buy me a coffee](https://www.buymeacoffee.com/helpbits) - Fuels more open source
- ⭐ Star the repo - Makes me unreasonably happy
- 🐦 Share it - Help other devs suffering from inconsistent AI code

No pressure though. The tool is free forever. Unlike coffee. Which is why I'm asking. 😅

## Contributing

Know a better format? Have ideas? Found a bug?

Contributions welcome:

- 🐛 Bug fixes
- ✨ New template ideas
- 📝 Better examples

See [CONTRIBUTING.md](CONTRIBUTING.md) or open an issue.

---

## Reference

<details>
<summary><b>All CLI Options</b></summary>

```bash
npx ai-vibes init [options]

Options:
  --minimal              3 essential files instead of 11
  --force                Overwrite existing files
  --dir <name>           Directory name (default: vibes)
  --manifest <filename>  Manifest filename (default: vibes.json)
  -h, --help             Display help
```

</details>

<details>
<summary><b>What Gets Created</b></summary>

**Minimal mode:**

```
your-project/
├── vibes.json          # Manifest with 3 rules
└── vibes/
    ├── security.md
    ├── unit-tests.md
    └── naming.md
```

**Full mode:**

```
your-project/
├── vibes.json          # Manifest with 11 rules
└── vibes/
    ├── security.md
    ├── unit-tests.md
    ├── naming.md
    ├── architecture.md
    ├── performance.md
    ├── code-review.md
    ├── error-handling.md
    ├── documentation.md
    ├── accessibility.md
    ├── api-design.md
    └── git-workflow.md
```

</details>

<details>
<summary><b>Manifest Format Example</b></summary>

```json
{
  "version": 1,
  "about": {
    "name": "Repo Vibes",
    "description": "How AIs should work in this repo"
  },
  "rules": {
    "security": "vibes/security.md",
    "unit-tests": "vibes/unit-tests.md",
    "naming": "vibes/naming.md"
  },
  "order": ["security", "unit-tests", "naming"],
  "modes": {
    "codegen": {
      "include": ["security", "unit-tests", "naming"]
    },
    "review": {
      "include": ["security", "naming"]
    }
  }
}
```

</details>

<details>
<summary><b>More Examples</b></summary>

**Monorepo:**

```bash
cd packages/api
npx ai-vibes init --dir ../../.ai-rules --manifest ../../ai-rules.json
```

**Custom location:**

```bash
npx ai-vibes init --dir .github/ai-guidelines
```

**CI/CD (skip prompts):**

```bash
npx ai-vibes init --minimal --dir rules --manifest rules.json --force
```

</details>

---

**Repository:** https://github.com/HelpBits/ai-vibes  
**Package:** https://www.npmjs.com/package/ai-vibes  
**Version:** 1.1.1  
**License:** MIT

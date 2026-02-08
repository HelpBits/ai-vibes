# Changelog

All notable changes to ai-vibes will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2026-02-07

### Changed

- **Fun contribution message** - Updated CLI success message with friendlier tone
- **Buy Me a Coffee link** - Added https://www.buymeacoffee.com/helpbits for supporters
- **Contributing section** - Enhanced README with inviting contribution guidelines

## [1.1.0] - 2026-02-07

### Added

- **JSON format support** - Manifest files now support `.json` extension for better IDE experience
- **Clickable file paths** - JSON format provides clickable paths in VS Code and other editors
- **Better autocomplete** - JSON Schema support enables autocomplete and validation in modern editors

### Changed

- **Default format is now JSON** - Interactive prompt defaults to `vibes.json` instead of `vibes.yaml`
- **Format auto-detection** - Automatically generates JSON or YAML based on file extension

### Maintained

- **Full YAML support** - YAML format (`.yaml` or `.yml`) continues to work perfectly
- **Backward compatibility** - Existing YAML manifests are fully supported

## [1.0.0] - 2026-02-07

### Added

- **Initial release of ai-vibes CLI**
- `init` command to scaffold AI steering manifest and rule documents
- **11 comprehensive starter templates:**
  - `security.md` - Security best practices (never commit secrets, validate inputs)
  - `unit-tests.md` - Testing guidelines (test behavior, cover edge cases)
  - `naming.md` - Naming conventions (descriptive names, consistency)
  - `architecture.md` - Architecture patterns (follow existing patterns)
  - `performance.md` - Performance optimization guidelines
  - `code-review.md` - Code review standards
  - `error-handling.md` - Error handling patterns
  - `documentation.md` - Documentation standards
  - `accessibility.md` - Accessibility (a11y) guidelines
  - `api-design.md` - RESTful API design principles
  - `git-workflow.md` - Git commit and workflow standards

- **Scalable template architecture:**
  - Templates stored as individual markdown files in `templates/` directory
  - Metadata in `templates/rules.json` for data-driven configuration
  - Build-time code generation via `scripts/generate-templates.js`
  - Zero runtime file system access - all templates bundled into compiled JavaScript

- **Interactive CLI experience:**
  - Prompts for directory name (default: vibes)
  - Prompts for manifest filename (default: vibes.yaml)
  - Can skip prompts with `--dir` and `--manifest` flags

- **Command options:**
  - `--minimal` - Create minimal starter set (3 essential files: security, unit-tests, naming)
  - `--force` - Overwrite existing files without prompting
  - `--dir <name>` - Custom directory name for rule documents
  - `--manifest <filename>` - Custom manifest filename

- **Input validation:**
  - Prevents path traversal attacks
  - Validates file extensions (.yaml or .yml)
  - Rejects invalid characters in directory and file names

- **Smart file handling:**
  - Skips existing files unless `--force` is used
  - Clear status reporting (created/skipped/overwritten)
  - Graceful error handling with descriptive messages

- **Manifest generation:**
  - Auto-generates `vibes.yaml` with rules, order, and modes
  - Supports different modes: codegen, review, test, docs, ops
  - Maps rule IDs to file paths

- **Documentation:**
  - Comprehensive README with quick start, setup guide, and examples
  - CONTRIBUTING.md with guide to add new templates
  - ARCHITECTURE.md explaining scalable design
  - CHANGELOG.md following Keep a Changelog format
  - DEVELOPMENT.md for development workflow

### Technical Details

- Built with TypeScript 5.3.3
- Bundled with tsup 8.0.1
- CLI powered by Commander 12.1.0
- ESM modules only
- Node.js 18+ required
- Bundle size: ~31KB (includes all 11 templates)
- Zero dependencies at runtime

[1.0.0]: https://github.com/HelpBits/ai-vibes/releases/tag/v1.0.0

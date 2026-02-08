# ai-vibes Development

## Quick Start

### Install dependencies

```bash
npm install
```

### Build the project

```bash
npm run build
```

### Test locally

```bash
npm link
ai-vibes init
```

### Run directly

```bash
node dist/cli.js init
```

## Development

### Watch mode

```bash
npm run dev
```

### Project Structure

```
ai-vibes/
├── src/
│   ├── cli.ts          # Commander CLI setup
│   ├── init.ts         # Initialization logic
│   └── templates.ts    # Manifest and rule templates
├── dist/               # Built output
├── package.json
├── tsconfig.json
├── tsup.config.json
└── README.md
```

## Testing

### Manual testing checklist

1. Basic init:

   ```bash
   ai-vibes init
   ```

2. Run without --force (should skip existing):

   ```bash
   ai-vibes init
   ```

3. Run with --force (should overwrite):

   ```bash
   ai-vibes init --force
   ```

4. Minimal mode:

   ```bash
   ai-vibes init --minimal
   ```

5. Custom directory:

   ```bash
   ai-vibes init --dir ai-vibes
   ```

6. Custom manifest:

   ```bash
   ai-vibes init --manifest ai-vibes.yaml
   ```

7. Combined flags:
   ```bash
   ai-vibes init --minimal --dir ai-rules --manifest rules.yaml
   ```

## Publishing

### Prepare for publish

```bash
npm run build
```

### Publish to npm

```bash
npm publish
```

### Test published package

```bash
npx ai-vibes init
```

## Requirements

- Node.js 18+
- npm or pnpm

## License

MIT

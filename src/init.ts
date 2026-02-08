import { writeFile, mkdir, access } from 'fs/promises';
import { join } from 'path';
import { createInterface } from 'readline';
import { generateManifest, getRuleTemplates } from './templates.js';

export interface InitOptions {
  force: boolean;
  minimal: boolean;
  dir?: string;
  manifest?: string;
}

interface FileResult {
  path: string;
  status: 'created' | 'skipped' | 'overwritten';
}

function prompt(question: string, defaultValue: string): Promise<string> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(`${question} (default: ${defaultValue}): `, (answer) => {
      rl.close();
      resolve(answer.trim() || defaultValue);
    });
  });
}

function validateOptions(options: InitOptions): void {
  const { dir, manifest } = options;

  // Validate directory name
  if (!dir || dir.trim() === '') {
    throw new Error('Directory name cannot be empty');
  }

  if (dir.includes('..') || dir.startsWith('/') || dir.startsWith('\\')) {
    throw new Error('Directory name cannot contain path traversal patterns or be absolute');
  }

  const invalidDirChars = /[<>:"|?*\x00-\x1F]/;
  if (invalidDirChars.test(dir)) {
    throw new Error('Directory name contains invalid characters');
  }

  // Validate manifest filename
  if (!manifest || manifest.trim() === '') {
    throw new Error('Manifest filename cannot be empty');
  }

  const isValidExtension = manifest.endsWith('.json') || manifest.endsWith('.yaml') || manifest.endsWith('.yml');
  if (!isValidExtension) {
    throw new Error('Manifest filename must end with .json, .yaml, or .yml');
  }

  if (manifest.includes('/') || manifest.includes('\\')) {
    throw new Error('Manifest filename cannot contain path separators');
  }

  const invalidFileChars = /[<>:"|?*\x00-\x1F]/;
  if (invalidFileChars.test(manifest)) {
    throw new Error('Manifest filename contains invalid characters');
  }
}

export async function init(options: InitOptions): Promise<void> {
  const { force, minimal } = options;

  // Prompt for directory name if not provided
  const dir = options.dir || await prompt('Directory name for rule documents', 'vibes');

  // Prompt for manifest filename if not provided
  const manifest = options.manifest || await prompt('Manifest filename', 'vibes.json');

  // Validate inputs
  validateOptions({ force, minimal, dir, manifest });

  const cwd = process.cwd();

  const results: FileResult[] = [];

  // Check if manifest exists
  const manifestPath = join(cwd, manifest);
  const manifestExists = await fileExists(manifestPath);

  // Create or skip manifest
  if (!manifestExists || force) {
    try {
      const manifestContent = generateManifest({ dir, minimal, filename: manifest });
      await writeFile(manifestPath, manifestContent, 'utf-8');
      results.push({
        path: manifest,
        status: manifestExists ? 'overwritten' : 'created',
      });
    } catch (error) {
      throw new Error(`Failed to write manifest file: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  } else {
    results.push({
      path: manifest,
      status: 'skipped',
    });
  }

  // Create rules directory
  try {
    const rulesDir = join(cwd, dir);
    await mkdir(rulesDir, { recursive: true });
  } catch (error) {
    throw new Error(`Failed to create directory '${dir}': ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  const rulesDir = join(cwd, dir);

  // Create rule files
  const templates = getRuleTemplates(minimal);

  for (const template of templates) {
    const filePath = join(rulesDir, template.filename);
    const fileAlreadyExists = await fileExists(filePath);

    if (!fileAlreadyExists || force) {
      try {
        await writeFile(filePath, template.content, 'utf-8');
        results.push({
          path: join(dir, template.filename),
          status: fileAlreadyExists ? 'overwritten' : 'created',
        });
      } catch (error) {
        throw new Error(`Failed to write rule file '${template.filename}': ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    } else {
      results.push({
        path: join(dir, template.filename),
        status: 'skipped',
      });
    }
  }

  // Print summary
  printSummary(results);

  // Print sponsor message on success
  if (results.some(r => r.status === 'created' || r.status === 'overwritten')) {
    console.log('\n✨ Enjoying ai-vibes? Know a better format for steering files? Have ideas?');
    console.log('   Contributions welcome! Or just buy me a coffee ☕');
    console.log('   https://www.buymeacoffee.com/helpbits');
  }
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function printSummary(results: FileResult[]): void {
  const created = results.filter(r => r.status === 'created');
  const skipped = results.filter(r => r.status === 'skipped');
  const overwritten = results.filter(r => r.status === 'overwritten');

  if (created.length > 0) {
    console.log('\n✓ Created:');
    created.forEach(r => console.log(`  - ${r.path}`));
  }

  if (overwritten.length > 0) {
    console.log('\n✓ Overwritten:');
    overwritten.forEach(r => console.log(`  - ${r.path}`));
  }

  if (skipped.length > 0) {
    console.log('\n○ Skipped (already exists):');
    skipped.forEach(r => console.log(`  - ${r.path}`));
  }
}

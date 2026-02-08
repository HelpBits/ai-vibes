#!/usr/bin/env node

import { Command } from 'commander';
import { init } from './init.js';

const program = new Command();

program
  .name('ai-vibes')
  .description('Initialize a standard, repo-local AI steering manifest and rule documents')
  .version('1.1.0');

program
  .command('init')
  .description('Initialize vibes.yaml and starter rule documents')
  .option('--force', 'Overwrite existing files', false)
  .option('--minimal', 'Create minimal starter set (3 essential files: security, unit-tests, naming)', false)
  .option('--dir <name>', 'Directory name for rule documents')
  .option('--manifest <filename>', 'Manifest filename')
  .action(async (options) => {
    try {
      await init({
        force: options.force,
        minimal: options.minimal,
        dir: options.dir,
        manifest: options.manifest,
      });
    } catch (error) {
      console.error('Error initializing ai-vibes:', error);
      process.exit(1);
    }
  });

program.parse();

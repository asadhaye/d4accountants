#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Read the configuration file
const configPath = path.join(rootDir, 'ts-unused-exports.config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Build the command
let command = 'npx ts-unused-exports tsconfig.json';

// Add excludePathsFromReport - using semicolons as separators
if (config.excludePathsFromReport && config.excludePathsFromReport.length > 0) {
  // Escape special regex characters in the paths
  const escapedPaths = config.excludePathsFromReport.map(pattern => 
    pattern.replace(/\./g, '\\.').replace(/\*/g, '.*')
  );
  command += ` --excludePathsFromReport=${escapedPaths.join(';')}`;
}

// Add allowUnusedTypes
if (config.allowUnusedTypes) {
  command += ' --allowUnusedTypes';
}

// Add exitWithCount
if (config.exitWithCount) {
  command += ' --exitWithCount';
}

// Add ignoreFiles - using pipe as separator for regex alternation
if (config.ignoreFiles && config.ignoreFiles.length > 0) {
  // Ensure regex patterns are properly escaped
  const escapedPatterns = config.ignoreFiles.map(pattern => 
    pattern.replace(/\./g, '\\.')
  );
  command += ` --ignoreFiles=${escapedPatterns.join('|')}`;
}

// Add ignoreExportsUsedInFile
if (config.ignoreExportsUsedInFile) {
  command += ' --ignoreExportsUsedInFile';
}

console.log('Running command:', command);

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  console.error('Error executing command:', error.message);
  process.exit(1);
}

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const PATTERNS_TO_CHECK = [
  // Duplicate config files
  '.eslintrc.*',
  // Old test files
  '**/*.spec.ts',
  '**/*.test.tsx',
  // Backup files
  '**/*.bak',
  '**/*.backup',
  // Source maps in production
  '**/*.js.map',
  // Log files
  '**/*.log',
  // Temp files
  '**/tmp/*',
  '**/temp/*',
];

// Only include directories that exist
const DIRECTORIES_TO_CHECK = [
  'src',
  'tests',
  'e2e',
];

async function directoryExists(dirPath) {
  try {
    await fs.access(dirPath);
    return true;
  } catch {
    return false;
  }
}

async function findUnusedFiles() {
  const unusedFiles = [];
  
  for (const dir of DIRECTORIES_TO_CHECK) {
    const dirPath = path.join(rootDir, dir);
    
    // Skip if directory doesn't exist
    if (!(await directoryExists(dirPath))) {
      continue;
    }
    
    try {
      const files = await fs.readdir(dirPath, { recursive: true });
      for (const filePath of files) {
        // Skip if it's a directory
        if ((await fs.stat(path.join(dirPath, filePath))).isDirectory()) {
          continue;
        }
        
        // Check if file matches any of the patterns
        if (PATTERNS_TO_CHECK.some(pattern => {
          const regex = new RegExp(pattern.replace(/\*/g, '.*'));
          return regex.test(filePath);
        })) {
          unusedFiles.push(path.join(dir, filePath));
        }
        
        // Additional checks for unused files
        try {
          const gitHistory = execSync(`git log -1 --format=%cd "${filePath}"`, { 
            cwd: rootDir,
            stdio: ['pipe', 'pipe', 'ignore']
          }).toString();
          
          // If file hasn't been modified in last 90 days, mark as potentially unused
          const lastModified = new Date(gitHistory);
          const ninetyDaysAgo = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
          
          if (lastModified < ninetyDaysAgo) {
            unusedFiles.push(path.join(dir, filePath));
          }
        } catch {
          // File might not be in git yet, skip git history check
          continue;
        }
      }
    } catch {
      // Skip directories that can't be read
      continue;
    }
  }
  
  return [...new Set(unusedFiles)]; // Remove duplicates
}

async function findDuplicateCode() {
  try {
    const jscpdOutput = execSync('npx jscpd ./src --ignore "**/*.test.{ts,tsx}" --format "javascript,typescript,jsx,tsx" --threshold 1 --reporters "console" --mode "strict" --min-lines 5 --min-tokens 50', { 
      cwd: rootDir,
      stdio: ['pipe', 'pipe', 'ignore']
    }).toString();
    
    return jscpdOutput
      .split('\n')
      .filter(line => line.includes('Clone found'))
      .map(line => {
        const match = line.match(/Clone found in (.+) and (.+) \((\d+) tokens, (\d+) lines\)/);
        if (match) {
          return `Duplicate code found between:\n  - ${match[1]}\n  - ${match[2]}\n  Size: ${match[4]} lines (${match[3]} tokens)`;
        }
        return line.trim();
      });
  } catch (error) {
    console.error('Error running jscpd:', error);
    return [];
  }
}

async function main() {
  console.log('Starting code cleanup analysis...\n');
  
  const unusedFiles = await findUnusedFiles();
  if (unusedFiles.length > 0) {
    console.log('Potentially unused files:');
    unusedFiles.forEach(file => console.log(`- ${file}`));
    console.log();
  } else {
    console.log('No potentially unused files found.\n');
  }
  
  const duplicates = await findDuplicateCode();
  if (duplicates.length > 0) {
    console.log('Potential code duplicates:');
    duplicates.forEach(dupe => console.log(`- ${dupe}`));
    console.log();
  } else {
    console.log('No code duplicates found.\n');
  }
  
  console.log('Analysis complete!');
}

main().catch(console.error);

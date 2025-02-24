import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

async function extractCommonCode(file1, file2, startLine1, endLine1, startLine2, endLine2) {
  const content1 = await fs.readFile(path.join(rootDir, file1), 'utf-8');
  const content2 = await fs.readFile(path.join(rootDir, file2), 'utf-8');

  const lines1 = content1.split('\n').slice(startLine1 - 1, endLine1);
  // We'll use lines2 to verify the code is identical before extraction
  const lines2 = content2.split('\n').slice(startLine2 - 1, endLine2);

  // Verify that the code blocks are identical
  if (lines1.join('\n') !== lines2.join('\n')) {
    throw new Error('Code blocks are not identical');
  }

  // Create a new utility function from the duplicate code
  const utilityName = `common${path.basename(file1, path.extname(file1))}${path.basename(file2, path.extname(file2))}`;
  const utilityContent = `export function ${utilityName}() {\n${lines1.join('\n')}\n}\n`;

  // Create utilities directory if it doesn't exist
  const utilsDir = path.join(rootDir, 'src/utils');
  await fs.mkdir(utilsDir, { recursive: true });

  // Write the utility file
  await fs.writeFile(
    path.join(utilsDir, `${utilityName}.ts`),
    utilityContent
  );

  return utilityName;
}

export { extractCommonCode };

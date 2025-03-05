import fs from 'fs/promises';

const filesToRemove = [
  'src/components/sections/testimonials/Testimonials.tsx',
  'src/components/sections/process/Process.tsx',
  'src/components/sections/cta/CTASection.tsx',
  'src/lib/animations/variants/fade-in.ts',
  'src/components/shared/background-wrapper.tsx',
  'src/lib/auth/types.ts',
  'src/lib/errors/handle-error.ts'
];

async function removeFiles() {
  for (const file of filesToRemove) {
    try {
      await fs.unlink(file);
      console.log(`Removed: ${file}`);
    } catch (error) {
      console.error(`Failed to remove ${file}:`, error.message);
    }
  }
}

removeFiles().catch(console.error);
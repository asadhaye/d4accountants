import { pipeline, env } from '@xenova/transformers';

// Configure environment
env.useBrowserCache = false;
env.useCustomCache = true;
env.cacheDir = './.cache/transformers';
env.localModelPath = './.cache/transformers';

async function downloadModel() {
  try {
    console.log('Downloading model files...');
    const pipe = await pipeline(
      'text2text-generation',
      'Xenova/flan-t5-small',
      {
        revision: 'default',
        quantized: true,
        cache_dir: './.cache/transformers',
      }
    );
    console.log('Model files downloaded successfully!');
  } catch (error) {
    console.error('Error downloading model:', error);
    process.exit(1);
  }
}

downloadModel();

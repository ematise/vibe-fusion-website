const { spawn } = require('child_process');

console.log('Testing TypeScript compilation...');

const tsc = spawn('npx', ['tsc', '--noEmit', '--skipLibCheck'], {
  stdio: 'inherit',
  shell: true
});

tsc.on('close', (code) => {
  if (code === 0) {
    console.log('✅ TypeScript compilation successful!');
  } else {
    console.log(`❌ TypeScript compilation failed with exit code ${code}`);
  }
  process.exit(code);
});

tsc.on('error', (err) => {
  console.error('Error running TypeScript compiler:', err.message);
  process.exit(1);
});

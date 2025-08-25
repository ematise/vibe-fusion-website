const { spawn } = require('child_process');
const fs = require('fs');

console.log('Running TypeScript compilation check...');

const tsc = spawn('npx', ['tsc', '--noEmit', '--pretty'], {
  cwd: process.cwd(),
  shell: true
});

let output = '';
let errorOutput = '';

tsc.stdout.on('data', (data) => {
  const text = data.toString();
  output += text;
  console.log(text);
});

tsc.stderr.on('data', (data) => {
  const text = data.toString();
  errorOutput += text;
  console.error(text);
});

tsc.on('close', (code) => {
  const fullOutput = output + errorOutput;
  fs.writeFileSync('typescript-errors.txt', fullOutput);
  
  if (code === 0) {
    console.log('✅ No TypeScript errors found!');
  } else {
    console.log(`❌ TypeScript compilation failed with exit code ${code}`);
    console.log('Errors saved to typescript-errors.txt');
  }
  process.exit(code);
});

tsc.on('error', (err) => {
  console.error('Error running TypeScript compiler:', err.message);
  process.exit(1);
});

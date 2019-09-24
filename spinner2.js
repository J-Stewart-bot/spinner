const spinners = ['|', '/', '-', '\\'];
let delay = spinners.length * 10
for (let i = 0; i < delay; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinners[i % spinners.length]}`);
  }, i * 100);
}
setTimeout(() => { console.log() }, delay * 100);
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const writeStream = fs.createWriteStream('02-write-file.txt');
console.log('Enter text or "exit" to exit: ');

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log('Thanks for using our application!');
    rl.close();
  } else {
    writeStream.write(input + '\n');
    console.log(
      'The text has been added to the file. Enter text or "exit" to exit: ',
    );
  }
});

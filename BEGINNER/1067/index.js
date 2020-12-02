let input = require('fs').readFileSync('text.txt', 'utf8');
let lines = input.split('fs');

let x = parseInt(lines.shift());

for(let odd = 1; odd <= x; odd++) {
  if (odd % 2 !== 0) {
    console.log(`${odd}`);
  }
}


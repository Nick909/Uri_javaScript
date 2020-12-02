let input = require('fs').readFileSync('./input.txt', 'utf8');
let lines = input.split('\n');

//-----------------------------------

let numUm = parseInt(lines.shift());
let numDois = parseInt(lines.shift());

console.log(`X = ${numUm + numDois}`);
"use strict"
const fs = require('fs');

const dirDev = '/dev';
const dirStdin= '/stdin';

let file = '2.00';

(!fs.existsSync(`.${dirDev}`)) ? fs.mkdirSync(`.${dirDev}`) : null;

(!fs.existsSync(`.${dirDev+dirStdin}`)) ? fs.mkdirSync(`.${dirDev+dirStdin}`) : null;

fs.writeFileSync(`.${dirDev+dirStdin}/index.txt`, file, (err) => {
  console.log(err);
});

let input = require('fs').readFileSync('./dev/stdin/index.txt', 'utf8');
let lines = input.split('\n');

//-----------------------------------

let R = parseFloat(lines.shift());
let n = 3.14159;
let A = n * Math.pow(R, 2);

console.log('A=' + A.toFixed(4));


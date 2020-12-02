"use strict"
const fs = require('fs');

const dirDev = '/dev';
const dirStdin = '/stdin';

const file = '30 \n10';

(!fs.existsSync(`./${dirDev}`)) ? fs.mkdirSync(`./${dirDev}`) : null;

(!fs.existsSync(`./${dirDev+dirStdin}`)) ? fs.mkdirSync(`./${dirDev+dirStdin}`) : null;

fs.writeFileSync(`./${dirDev+dirStdin}/index.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync('./dev/stdin/index.txt', 'utf8');
const lines = input.split('\n');

//-----------------------------------

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

console.log('SOMA = ' + (A+B));

'use strict';
const fs = require('fs');
const dirDev = '/dev';
const dirStdin = `${dirDev}/stdin`;
const file = '5.0\n6.0\n7.0';

(!fs.existsSync(`.${dirDev}`)) ? fs.mkdirSync(`.${dirDev}`) : null;

(!fs.existsSync(`.${dirStdin}`)) ? fs.mkdirSync(`.${dirStdin}`) : null;

fs.writeFileSync(`.${dirStdin}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`.${dirStdin}/input.txt`, 'utf-8');
const lines = input.split('\n');

//-----------------------------------

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let MEDIA =  ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log('MEDIA = ' + MEDIA.toFixed(1));

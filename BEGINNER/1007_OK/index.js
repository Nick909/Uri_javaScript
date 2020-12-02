const fs = require('fs');
const dirDev = '/dev';
const dirStdin = `${dirDev}/stdin`;
const file = '5\n6\n7\n8';

(!fs.existsSync(`.${dirDev}`)) ? fs.mkdirSync(`.${dirDev}`) : null;
(!fs.existsSync(`.${dirStdin}`)) ? fs.mkdirSync(`.${dirStdin}`) : null;

fs.writeFileSync(`.${dirStdin}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`.${dirStdin}/input.txt`, 'utf-8');
const lines = input.split('\n');

//-----------------------------------

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

let DIFFERENCE = (A * B - C * D);

console.log('DIFERENCA = ' + DIFFERENCE);
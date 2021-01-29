const fs = require('fs');
const dirDev = './dev';
const file = '7 14 106';


if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (e) => {
  console.log(e);
});

let input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
let lines = input.split('\n');

//-----------------------------------------------------------------------------

function maiorAB(A, B) {
  return ((A + B + Math.abs(A - B)) / 2);
}

let valor = lines.shift().split(' ');

let A = parseInt(valor.shift());
let B = parseInt(valor.shift());
let C = parseInt(valor.shift());

console.log(maiorAB(maiorAB(A, B), C) + ' eh o maior');


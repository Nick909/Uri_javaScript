const fs = require('fs');
const dirDev = './dev';
const file = '7';


if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (e) => {
  console.log(e);
});

let input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
let lines = input.split('\n');
console.log(lines);

//-----------------------------------------------------------------------------

let Y = parseInt(lines.shift());

console.log((Y * 2) + ' minutos');

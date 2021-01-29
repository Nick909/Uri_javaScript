const fs = require('fs');
const dirDev = './dev';
const file = '500\n35.0';


if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (e) => {
  console.log(e);
});

let input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
let lines = input.split('\n');

//-----------------------------------------------------------------------------

let X = parseInt(lines.shift());
let Y = parseFloat(lines.shift());


console.log((X / Y).toFixed(3) + ' km/l');
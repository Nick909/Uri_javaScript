const fs = require('fs');
const dirDev = './dev';
const file = '10\n85';


if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (e) => {
  console.log(e);
});

let input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
let lines = input.split('\n');
console.log(lines);

//-----------------------------------------------------------------------------

let timeSpent = parseFloat(lines.shift());
let averageSpeed = parseFloat(lines.shift());

console.log(((timeSpent * averageSpeed) / 12).toFixed(3));
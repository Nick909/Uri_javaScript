const fs = require('fs');
const dirDev = './dev';
const file = '30';

if(!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

//========================================================

let day = parseInt(lines.shift());
let year = day / 365;
let month = day % 365  / 30;
day = day % 365 % 30;

console.log(
  parseInt(year)+ ' ano(s)\n' + 
  parseInt(month) +  ' mes(es)\n' +
  parseInt(day) + ' dia(s)'
);

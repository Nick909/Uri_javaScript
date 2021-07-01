const fs = require('fs');
const dirDev = './dev';
const file = '140153';

if(!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

let input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
let lines = input.split('\n');

// --------------------------------------------------------->

let second = parseInt(lines.shift());
let hour = second / 3600;
let minute = second % 3600 / 60;
second = second % 60;

console.log(
  parseInt(hour) + ':' + 
  parseInt(minute)  + ':' + 
  parseInt(second)
);  

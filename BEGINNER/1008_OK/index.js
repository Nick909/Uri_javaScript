const fs = require('fs');
const dirDev = '/dev';
const dirStdin = `${dirDev}/stdin`;
const file = '25\n100\n5.50';

(!fs.existsSync(`.${dirDev}`)) ? fs.mkdirSync(`.${dirDev}`) : null;

(!fs.existsSync(`.${dirStdin}`)) ? fs.mkdirSync(`.${dirStdin}`) : null;

fs.writeFileSync(`.${dirStdin}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`.${dirStdin}/input.txt`, 'utf-8');
const lines = input.split('\n');

//-----------------------------------

let employees = parseInt(lines.shift());
let amount = parseInt(lines.shift());
let hours = parseFloat(lines.shift());

let salary = parseFloat(amount * hours);

console.log('NUMBER = ' + employees);
console.log('SALARY = U$ ' + salary.toFixed(2));
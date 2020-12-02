'use Strict';
const fs = require('fs');
const dirDev = './dev';
const file = '13 2 15.30\n161 4 5.20';

(!fs.existsSync(`${dirDev}`)) ? fs.mkdirSync(`${dirDev}`) : null;

fs.writeFileSync(`${dirDev}/input.txt`, file , (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');

//--------------------------------

let productOne = lines.shift().split(' ');
let productTwo = lines.shift().split(' ');
 
let amount = (parseFloat(productTwo[2]) * parseInt(productTwo[1])) + (parseFloat(productOne[2]) * parseInt(productOne[1]));

console.log('VALOR A PAGAR: R$ ' + amount.toFixed(2))
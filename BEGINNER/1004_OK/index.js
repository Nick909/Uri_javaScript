'use strict';
let fs = require('fs');
let dir = './dev';
let datas = '3 \n9';

(!fs.existsSync(dir)) ? fs.mkdirSync(dir) : null;

fs.writeFileSync(`${dir}/input.txt`, datas), (err) => {
  (err) ? console.log(err) : console.log('arquivo criado');
};


let input = fs.readFileSync(`${dir}/input.txt`, 'utf8');
let lines = input.split('\n');

//-----------------------------------

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());

var PROD = x * y;

console.log('PROD = ' + PROD);
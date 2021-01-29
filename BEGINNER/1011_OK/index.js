const fs = require('fs');
const dirDev = './dev';
const file = '1523';

!(fs.existsSync(`${dirDev}`))? fs.mkdirSync(dirDev) : null ;


fs.writeFileSync(`${dirDev}/input.txt`, file, (error) => {
  console.log(error)
});

let input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8' );
let lines = input.split('\n');
let R = parseFloat(lines.shift());

let VOLUME = (4/3) * 3.14159 * Math.pow(R, 3);

console.log('VOLUME = ' + VOLUME.toFixed(3));
const fs = require('fs');
const dirDev = './dev';
const file = '3,0 4,0 5,2';


if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (e) => {
  console.log(e);
});

let input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
let lines = input.split('\n');

//-----------------------------------------------------------------------------

var valor = lines.shift().split(' ');

var A = parseFloat(valor[0]); 
var B = parseFloat(valor[1]); 
var C = parseFloat(valor[2]);

console.log("TRIANGULO: " + parseFloat((A * C)/2).toFixed(3)); 
console.log("CIRCULO: " + parseFloat(3.14159 * Math.pow(C,2)).toFixed(3)); 
console.log("TRAPEZIO: " + parseFloat(((A + B)/2) * C).toFixed(3)); 
console.log("QUADRADO: " + parseFloat(Math.pow(B,2)).toFixed(3)); 
console.log("RETANGULO: " + parseFloat(A * B).toFixed(3));

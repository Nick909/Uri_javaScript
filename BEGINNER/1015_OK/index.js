let input = require('fs').readFileSync('./index.txt',  'utf8');
let lines = input.split('\n');

let [xi, yi] = lines[0].split(' ');
let [xii, yii] = lines[1].split(' ');

let result = Math.sqrt( Math.pow(xii - xi,2) + Math.pow(yii - yi,2) );
console.log(result.toFixed(4));


// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
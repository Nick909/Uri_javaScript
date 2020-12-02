'strict';
const { dir } = require('console');
let fs = require('fs');
let dirDev = './dev/';
let dirStdin = './dev/stdin/'
let file = '3 99';

(!fs.existsSync(dirDev)) ? fs.mkdirSync(dirDev) : null;

(!fs.existsSync(dirStdin)) ? fs.mkdirSync(dirStdin): null;

fs.writeFileSync('./dev/stdin/index.txt', file, (err) => {
  (err)? console.log(`erro: ${err}`) : console.log('arquivo criado');
})

let input = require('fs').readFileSync('./dev/stdin/index.txt', 'utf8');
let lines = input.split('\n');

let [x, y] = lines[0].split(' ').map((e) => parseInt(e));
let l, c = 1;
let arr = '';

for(l = 1; l <= y; l++) {
  for(c = 1; c <= x; c++) {
    arr += l;
    (c !== x) ? arr += ' ' : arr+='\n';
    l++;
  }
}
console.log(arr);

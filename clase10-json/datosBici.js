const fs = require('fs');

let bicicletasJSON = fs.readFileSync('./bicicletas.json', 'utf-8')
let bicis = JSON.parse(bicicletasJSON);

//no colocar por que nos devuelve todo el contenido
// console.log(bicis);
 
module.exports = bicis;
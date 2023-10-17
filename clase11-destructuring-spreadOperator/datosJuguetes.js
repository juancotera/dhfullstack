const fs = require('fs');

function devuelveArray(json){
  if(json == "hotToys"){
    let figuras1JSON = fs.readFileSync('./datos/figuras1.json', 'utf-8');
    let figuras1Parse = JSON.parse(figuras1JSON);
    return figuras1Parse
  }else if(json == "bandai"){
    let figuras2JSON = fs.readFileSync('./datos/figuras2.json', 'utf-8');
    let figuras2Parse = JSON.parse(figuras2JSON);
    return figuras2Parse
  }else if(json == "starWars"){
    let figuras3JSON = fs.readFileSync('./datos/figuras3.json', 'utf-8');
    let figuras3Parse = JSON.parse(figuras3JSON);
    return figuras3Parse
  }else{
    return "error"
  }
}

// console.log(devuelveArray("starWars"))

module.exports = devuelveArray;
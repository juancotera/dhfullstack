const peliculas = require('./peliculas.js');
let fs = require('fs');
let mensaje = fs.readFileSync(__dirname + '/mensaje.txt', 'utf-8');
console.log(mensaje);
function mostrarPelis(pelis){
  let indice = 0;
  for(let i = 0 ; i < pelis.length; i++){
    indice++
    let id = pelis[i].id;
    let rating = pelis[i].rating;
    let awards = pelis[i].awards;
    let duration = pelis[i].duration;
    let price = pelis[i].price;
    let genre = pelis[i].genre;
  console.log(`
    PELICULA ${indice}:
    id: ${id}
    rating: ${rating}
    awards: ${awards}
    duración: ${duration}
    precio: ${price}
    genero: ${genre}`)
  }
}

mostrarPelis(peliculas);
let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick','Elvis','Thor: amor y trueno'];

function masVendida(nombrePeli){
  let arrayAEstring = peliculas.join()
  //console.log(arrayAEstring)
  let buscar = arrayAEstring.indexOf(nombrePeli)
  if (buscar != -1){
    console.log('lo encontré');
    //console.log(buscar)
    let capturado = arrayAEstring.slice(buscar);
    //console.log(capturado)
    return capturado;
  }else {
    console.log('no lo encontré')
  }
}

let capturado = masVendida('Thor: amor y trueno');
let arrayAEstring = peliculas.join()
let quitarPeli = arrayAEstring.replace(capturado, '')
// console.log(quitarPeli)
let mayuscula = capturado.toUpperCase();
// console.log(mayuscula);
//aqui ya es un ARRAY
let stringAArray = quitarPeli.split(',')
let aliminaEspacio = stringAArray.pop()
let agregar = stringAArray.unshift(mayuscula);
console.log(stringAArray)




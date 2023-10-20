let array = [5, 4, 20, 16, 18, 3, 12, 7, 6, 1, 10];

let [cero, , dos, , cuatro,...resto] = array;

console.log(cero);
console.log(dos);
console.log(cuatro);
console.log(resto);

let miMascota = {
  nombre: "Bruce",
  tipoDeMascota : "Perro",
  color : "Marron",
  raza: "Mastin"
}

let {nombre, tipoDeMascota, color, raza} = miMascota

console.log(`Hola les presento a mi mascota su nombre es: ${nombre},
es un hermoso ${tipoDeMascota}, de color: ${color} y su raza es: ${raza}.`)
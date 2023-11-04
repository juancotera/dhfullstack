// let suma = (a, b) => a + b;
// console.log(suma(2, 2));

// function dameCinco() {
//     return [1,2,3,4,5];
// }

// let dameCinco = () => [1,2,3,4,5]

// function multiplicarPorDos() {
//   return 123 * 2 ;
// }


// let multiplicarPorDos = (a, b) => a * b;
// console.log(multiplicarPorDos(123, 2))

// function mostrarNombre() {
//   return "Mi nombre es Hernán";
// }

// let mostrarNombre = (a) => 'Mi nombre es ' + a;

//CALLBACKS

let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let multiplicacion = (a, b) => a * b;
let division = (a, b) => a / b;

let calculadora =  (a, b, operacion) => operacion(a, b);
console.log(calculadora(2, 5, division));
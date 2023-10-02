//1 Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
// function mostrarSiguientes(numero){
//   let limite = numero + 10
//   for(let i = numero; i <= limite; i++){
//     console.log(i)
//   }
// }

// mostrarSiguientes(13);

// 2 Imprimir los números entre el 1 y el 57, saltando de tres en tres.
// function saltandoEnTres(){
//   for(let i = 0; i <= 57;i += 3){
//     console.log(i)
//   }
// }

// saltandoEnTres()

//3 Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
// function sumaTodos(){
//   let suma = 0
//   for(let i = 0; i <= 100; i++){
//   //console.log('ahora estoy sumando ' + suma + '+' + i )
//     suma = suma + i;
//   //console.log(' y es = ' + suma)
//   }
//   console.log(suma);
// }

// sumaTodos();

//4 Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
// de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
// las letras de la cadena de texto pero en MAYÚSCULA.
// Pista: Investigar el método .toUpperCase.

// function miTexto(string){
//   let contador = 0
//   for (let i = 1; i <= string.length; i++){
//     let tomaLetras = string.slice(contador, i)
//     let mayusculas  = tomaLetras.toUpperCase()
//     console.log(mayusculas);
//     contador++
//   }
// }

// miTexto("Hola Mundo");

//5 Crear una función que reciba como parámetro un array de números positivos. Tendrá
// la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
// Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
// número par es aquel que se puede dividir entre 2.

// function misNumeros(array){
//   let guardado = []
//   for(let i = 0; i <= array.length; i++){
//     let numero = array[i]
//     if(numero % 2 == 0){
//       guardado.push(numero)
//     }
//   }
//   return console.log(guardado)
// }

// misNumeros([43,56,80,25,32])
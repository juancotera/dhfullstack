// for(let i = 0; i <= 10; i++){
//   console.log(i)
// }

// function noParesDeContarImparesHasta(numero) {
//     // Escribe aqui tu código
//     let cuantos = 0
//     for (let i = 0; i <= numero; i++){
//       if((i % 2) !== 0){
//         cuantos = cuantos + i
//       }
//     }
//     return cuantos
// }
// console.log(noParesDeContarImparesHasta(5))

//TABLA DE MULTIPLICAR USANDO FOR
// function tablaDeMultiplicar(numero) {
//   //Escribí tu código aquí
//    for(let i = 0; i < 11 ; i++){
//      console.log(numero + ' * ' + i + ' = ' + numero * i)
//    }
// }

// tablaDeMultiplicar(5)

//TABLA DE MULTIPLICAR USANDO WHILE
function tablaDeMultiplicar(numero) {
  //Escribí tu código aquí
   let contador = 0;
   while(contador <= 10){
     console.log(numero + ' * ' + contador + ' = ' + (numero * contador))
     contador++
   }
}

tablaDeMultiplicar(7)

//medir un ARRAY E IR TIRENDO LAS SUMAS
// function gananciaTotal(unPeriodo) {
//     let sumatoria = 0;
//     for (let i = 0; i < unPeriodo.length; i++) {
//         let mes = unPeriodo[i];
//
//     }
//     return sumatoria;
// }

// console.log(gananciaTotal([]))
// console.log(gananciaTotal([100]))
// console.log(gananciaTotal([100, 2]))
// console.log(gananciaTotal([2, 10, -20]))
// console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]))

//devolver la cantidad de meses que no hubo ganancia
// function saldosDeMesesConGanancia(saldos){
//   let array = [];
//   for(let i  = 0; i <= saldos.length; i++){
//     let mes = saldos[i]
//     if (mes > 0){
//       array.push(mes)
//     }
//     }
//     return array
// }

// console.log(saldosDeMesesConGanancia([10, -10, 2, 100]))

//Solución a “Primeros 20 números impares”
// let num = 1
// for (let i = 0; i < 20;) {
//   if (num%2!=0) {
//       console.log(num);
//       i++;
//   }
//   num++
// }

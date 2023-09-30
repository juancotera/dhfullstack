// for(let i = 0; i <= 10; i++){
//   console.log(i)
// }

function noParesDeContarImparesHasta(numero) {
    // Escribe aqui tu código
    let cuantos = 0
    for (let i = 0; i <= numero; i++){
      if((i % 2) !== 0){
        cuantos = cuantos + i
      }
    }
    return cuantos
}
console.log(noParesDeContarImparesHasta(5))


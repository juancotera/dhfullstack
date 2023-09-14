let pagoMes = 200;
let consumoKWH = 310;
let porcentajeMas = 20;

let aPagar = consumoKWH > 300 ? pagoMes = ((pagoMes * porcentajeMas)/100) + pagoMes : pagoMes;

console.log(aPagar);
let res1 = 'Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los ';
let res2 = ' días utilizados, el monto total a pagar es de $';
let res3 = ' por adquirir la silla para bebe.';
let sillaBebe = 1200;
let compacto = 14000;
let mediano = 17000;
let camioneta = 28000;

function alquiler(tipoAlquiler, diasDeAlquiler, sillaParaBebe){
  let costoTotal = 0;
  switch(tipoAlquiler){
    case "compacto" && sillaParaBebe == true:
      costoTotal = (costoTotal + sillaBebe) * diasDeAlquiler;
      break
    case "compacto" && sillaParaBebe == false:
      costoTotal = costoTotal  * diasDeAlquiler;
      break
    case "mediano" && sillaParaBebe == false:
      costoTotal = costoTotal  * diasDeAlquiler;
      break

  }

  if(sillaParaBebe == true){
    costoTotal = (costoTotal + sillaBebe) * diasDeAlquiler;
    console.log(res1 + diasDeAlquiler + res2 + costoTotal + res3)
  }else{
    costoTotal = costoTotal * diasDeAlquiler;
    console.log(res1 + diasDeAlquiler + res2 + costoTotal)
  }
}

// let compacto = (d, b) => b == true ? res1 + d + res2 + ((14000 * d) + sillaBebe) + res3 : res1 + d + res2 + (14000 * d);
// let mediano = (d, b)  => b == true ? res1 + d + res2 + ((17000 * d) + sillaBebe) + res3 : res1 + d + res2 + (17000 * d);
// let camioneta = (d, b)  => b == true ? res1 + d + res2 + ((28000 * d) + sillaBebe) + res3 : res1 + d + res2 + (28000 * d);
// let alquiler = (d, b, tipoAlquiler) => tipoAlquiler(d, b);
 console.log(alquiler("mediano", 3, false));
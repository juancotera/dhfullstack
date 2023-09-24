let vehiculo;
function montoAPAgar(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe){

    if (tipoDeVehiculo == "Compacto"){
      vehiculo = 14000;
    }else if (tipoDeVehiculo == "Mediano"){
      vehiculo = 17000;
    }else if(tipoDeVehiculo == "Camioneta"){
      vehiculo = 24000;
    }else{
      console.log("Ingrese un tipo de vehiculo correcto")
    };

    if(sillaParaBebe == true){
      let totalAPagar = (vehiculo * diasDeAlquiler) + (1200);
      console.log("Estimado cliente: en base al tipo de vehículo " + tipoDeVehiculo + " alquilado," + '\n' +
      "considerando los " + diasDeAlquiler + " días" + '\n' +
      "utilizados, el monto total a pagar es de $" + totalAPagar + ", La cual incluye silla para bebe.");
    }else{
      let totalAPagar = (vehiculo * diasDeAlquiler);
      console.log("Estimado cliente: en base al tipo de vehículo " + tipoDeVehiculo + " alquilado,\n" +
      "considerando los " + diasDeAlquiler + " días\n" +
      "utilizados, el monto total a pagar es de $" + totalAPagar);
    };
  return vehiculo;
}

console.log(montoAPAgar("Mediano", 2 ,false));
